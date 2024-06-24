import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TagManager from "react-gtm-module";
import { generateCookie, getGAClientID } from "@/utils/serviceHelper";
import axios from "axios";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [gaClientID, setGaClientID] = useState(null);

  const userTrack = async () => {
    const gaId = getGAClientID();
    setGaClientID(gaId);
    if (gaId) {
      const payload = await generateCookie();
      axios
        .post(`${process.env.BASE_URL}/api/user-track`, payload)
        .then(function () {})
        .catch(() => {
          console.log("Error in User track API");
        });
      return;
    }
    userTrack();
  };

  useEffect(() => {
    // Add the event listener for URL change
    router.events.on("routeChangeComplete", userTrack);
    // Remove the event listener when the component unmounts
    return () => {
      router.events.off("routeChangeComplete", userTrack);
    };
  }, [router.asPath]);

  /**Tag Manager Script Called */
  useEffect(() => {
    TagManager.initialize({ gtmId: process.env.gtm_track });
    setTimeout(() => {
      userTrack();
    }, 1500);
  }, []);

  return <Component {...pageProps} gaClientID={gaClientID} />;
}
