/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import { debounce } from "lodash";
import { useRouter } from "next/router";
import { Spinner } from "react-bootstrap";
import animationlib from "../../utils/animationLib";
import { readCookie } from "@/utils/serviceHelper";
import Image from "next/image";

const text_list = [
  "Try 'Company Registration'",
  "Try 'GST Filing'",
  "Try 'FSSAI Registration'",
  "Try 'Trademark'",
  "Try 'Copyright Registration'",
  "Try 'Incorporate in USA'",
  "Search through all our services",
];

const urlParser = (url) => {
  let m = url.match(
      /^(([^:\/?#]+:)?(?:\/\/((?:([^\/?#:]*):([^\/?#:]*)@)?([^\/?#:]*)(?::([^\/?#:]*))?)))?([^?#]*)(\?[^#]*)?(#.*)?$/
    ),
    r = {
      hash: m[10] || "", // #asd
      host: m[3] || "", // localhost:257
      hostname: m[6] || "", // localhost
      href: m[0] || "", // http://username:password@localhost:257/deploy/?asd=asd#asd
      origin: m[1] || "", // http://username:password@localhost:257
      pathname: m[8] || (m[1] ? "/" : ""), // /deploy/
      port: m[7] || "", // 257
      protocol: m[2] || "", // http:
      search: m[9] || "", // ?asd=asd
      username: m[4] || "", // username
      password: m[5] || "", // password
    };
  if (r.protocol.length == 2) {
    r.protocol = "file:///" + r.protocol.toUpperCase();
    r.origin = r.protocol + "//" + r.host;
  }
  r.href = r.origin + r.pathname + r.search + r.hash;
  return m && r;
};

const searchDashboard = (searchQuery, clickedLink, error) => {
  const payload = {
    data: {
      ga: readCookie("_ga"),
      keyword: searchQuery,
      url: window.location.href,
      type: "homepage",
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      ...(clickedLink && {
        selectedLink: {
          keyword: searchQuery,
          url: clickedLink,
        },
      }),
      ...(error && {
        error: error,
      }),
    },
  };
  axios({
    url: `${process.env.BASE_URL}/api/searchDashboard`,
    method: "POST",
    data: {
      ...payload,
    },
  })
    .then((res) => {
      console.log("successFullCreated");
    })
    .catch((error) => {
      console.log("error", error);
    });
};

const AutoSuggest = (props) => {
  const autoSearchRef = useRef();
  const [queryItems, setQueryItems] = useState([]);
  const [cursor, setCursor] = useState(1);
  const [animation, setAnimation] = useState(0);
  const [searchText, setSearchText] = useState("");
  const inputToAnimate = useRef();
  const [loader, setLoader] = useState(true);

  const router = useRouter();

  const autoCompleteRequest = useCallback(
    debounce((searchQuery) => {
      setLoader(true);
      axios({
        url: `${process.env.BASE_URL}/api/search`,
        method: "get",
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/json",
        },
        params: {
          q: searchQuery,
        },
      })
        .then((res) => {
          setLoader(false);
          const queryItems = res.data;
          if (res?.data?.length == 0) {
            searchDashboard(searchQuery);
          }
          setQueryItems(queryItems);
        })
        .catch((error) => {
          setLoader(false);
          searchDashboard(searchQuery, false, error);
        });
    }, 750),
    []
  );

  const handleAutoSuggest = (event) => {
    const inputLen = event.target.value.length;
    setSearchText(event.target.value);
    const keycode = event.key;
    if (inputLen >= 3) {
      autoCompleteRequest(event.target.value.toLowerCase());
    } else {
      setQueryItems([]);
    }

    if (queryItems.length !== 0) {
      if (keycode == "ArrowDown") {
        if (queryItems.length !== cursor) {
          setCursor(cursor + 1);
        } else {
          event.preventDefault();
        }
      }
      if (keycode == "ArrowUp") {
        if (cursor > 1) {
          setCursor(cursor - 1);
        } else {
          event.preventDefault();
        }
      }
      if (keycode == "Enter") {
        const selectedUrl = urlParser(queryItems[cursor - 1].url).pathname;
        router.push(selectedUrl);
      }
    }
  };

  const handleClickOutside = (event) => {
    if (
      autoSearchRef.current &&
      !autoSearchRef.current.contains(event.target)
    ) {
      setQueryItems([]);
      setCursor(1);
    }
  };

  const redirection = (url) => {
    window.location.href = urlParser(url).pathname;
  };

  useEffect(() => {
    animationlib.placeholderAnimation(inputToAnimate, text_list, true);
  }, [animation]);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside, false);

    return () =>
      window.removeEventListener("mousedown", handleClickOutside, false);
  }, [handleClickOutside]);
  return (
    <div className="w-full z-50">
      <div
        ref={autoSearchRef}
        className={`w-full md:max-w-[949px] ${
          queryItems?.length >= 1
            ? "md:rounded-t-3xl rounded-t-[32px]"
            : "md:rounded-3xl rounded-[32px]"
        }  max-w-[343px] 
        mx-auto flex flex-row justify-between relative md:py-[16px] md:px-[24px] py-[12px] px-[12px] border border-white bg-white 
         `}
      >
        <input
          id="autosuggestfor"
          className={`w-full outline-none text-lg text-blue-900 border-none outline-none"`}
          type="text"
          ref={inputToAnimate}
          onKeyUp={(e) => handleAutoSuggest(e)}
          onFocus={(e) => {
            handleAutoSuggest(e);
          }}
        ></input>
        <Image
          src={"https://assets.vakilsearch.com/live-images/ic-search-blue.svg"}
          width={24}
          height={24}
          alt="searchIcon"
        />
        {loader && (
          <div style={{ position: "absolute", right: "10px", bottom: "8px" }}>
            <Spinner
              animation="border"
              variant="dark"
              style={{ width: "20px", height: "20px" }}
            />
          </div>
        )}
        {queryItems.length !== 0 && (
          <ul className="absolute bg-white w-full top-[62px] rounded-b-3xl z-[99] left-0 max-h-[240px] no-scrollbar overflow-scroll">
            {queryItems.map((item, index) => (
              <li
                className={`${cursor === index + 1 ? "selected" : ""} :hove `}
                key={`query_${index}`}
                onClick={() => {
                  props.trackEvent("click", "homesearch_click", {
                    serviceClicked: item.title,
                  });
                }}
              >
                <p
                  style={{ padding: "8px 10px", cursor: "pointer" }}
                  onClick={() => {
                    searchDashboard(searchText, item.url);
                    redirection(item.url);
                  }}
                >
                  {item.title}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AutoSuggest;
