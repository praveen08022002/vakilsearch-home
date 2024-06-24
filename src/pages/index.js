import Image from "next/image";
import { Inter } from "next/font/google";
import Homepage from "@/components/homepage";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  return <Homepage {...props} />;
}

export async function getServerSideProps({ query, req }) {
  const blogApi = `${process?.env?.BLOG_API}?per_page=2&status=publish&_embed`;

  const blogData = await axios
    .get(blogApi)
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      console.log("error", err);
    });

  return {
    props: {
      blogSection: blogData,
    },
  };
}
