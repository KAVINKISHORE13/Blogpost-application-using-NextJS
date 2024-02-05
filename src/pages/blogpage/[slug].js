/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { createClient } from "contentful";
import Link from "next/link";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Skeleton from "../../../Components/Skeleton";


const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "blogauther",
  });
  const paths = res.items.map((items) => {
    return {
      params: { slug: items.fields.slug.toString() },
    };
  });
  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps = async ({ params }) => {
  const response = await client.getEntries({
    content_type: "blogauther",
    "fields.slug": params.slug.toString(),
  });

  if (!response.items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      blog: response.items[0],
      fallback: true 
    },
  };
};

export default function Slug({ blog }) {
  // console.log(blog);

  const {
    autherImg,
    autherName,
    blogDescriptions,
    blogDop,
    blogImg,
    blogName,
    blogShortDiscription,
    slug,
  } = blog.fields;

  const date = blogDop.substring(0, 10);
  if (!blog) return <Skeleton />;
  console.log(`https:${autherImg.fields.file.url}`);
  return (
    <div>
      <Head>
        <title>My next js app | {slug}</title>
      </Head>
      {
       (
        <div>
          <div className="d-flex mb-3 mx-2">
            <div className="col-2 border shadow-sm mt-3 me-2  p-2">
              <p className="mt-3">
                <span className="text-muted"> Published on :</span> {date}
              </p>
              <p className="text-muted">Published by : </p>
              <div className="d-flex align-items-center ">
                <img
                  className="rounded-circle ms-3p-2 " 
                  src={`https:${autherImg.fields.file.url}`}
                  alt={autherName}
                  loading="lazy"
                  width={70}
                  height={70}
                />
                <h5 className="ms-2">{autherName}</h5>
              </div>
            </div>
            <div className="card mt-3 border border-0  ">
              <div className="card-body d-flex ">
                <div className="mt-2">
                  <h2 className="card-title">{blogName}</h2>
                  <p className="card-text text-muted">
                    {documentToReactComponents(blogShortDiscription)}
                  </p>
                  <div className="card-text">
                    <small className="text-muted d-flex justify-content-start">
                      <h5> by {autherName}</h5>
                    </small>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center ">
                <Image
                  src={`https:${blogImg.fields.file.url}`}
                  className="card-img-top img-fluid"
                  alt={blogName}
                  width={200}
                  height={200}
                />
              </div>
              <p className="card-text mt-3 p-3">
                {documentToReactComponents(blogDescriptions)}
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center mb-4">
            <Link href={"/"} type="button" className="btn btn-primary">
              Back to Home Page
            </Link>
          </div>
        </div>
      )
      }
    </div>
  );
}
