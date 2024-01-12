"use client";

import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Blog = () => {
  const [dataBlog, setDataBlog] = useState(null);

  const getDataBlogDetail = async () => {
    const baseURL = `https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20`;

    try {
      const response = await axios.get(baseURL);

      if (response.status === 200) {
        setDataBlog(response?.data?.photos);
        console.log("test response", response);
      } else {
        setDataBlog(null);
      }
    } catch (error) {
      setDataBlog(null);
    }
  };

  useEffect(() => {
    getDataBlogDetail();
  }, []);

  return (
    <div style={{ margin: 20 }}>
      <Head>
        <title>Bakul Brambang Title</title>
        <meta property="og:title" content="Bakul Brambang Title" />
        <meta property="og:description" content="Bakul Brambang Description" />
        <meta property="og:url" content={`http://test123/blog`} />
      </Head>
      <h1>Blog</h1>

      {dataBlog ? (
        <ul>
          {dataBlog.map((capsule, index) => (
            <div style={{ marginTop: 10 }} key={capsule.id}>
              <Image
                alt={capsule.id}
                src={capsule.url}
                width={100}
                height={100}
              />
              <Link href={`/blog/${capsule.id}`}>
                <p style={{ fontWeight: "bold" }}>
                  {index + 1}. {capsule.title} (Click Details)
                </p>
              </Link>
              <p>{capsule.description}</p>
            </div>
          ))}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Blog;
