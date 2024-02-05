/* eslint-disable @next/next/no-img-element */
import React, { useState , useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function BlogPost({ techblog }) {
  const {
    autherImg,
    autherName,
    blogDop,
    blogImg,
    blogName,
    blogShortDiscription,
    blogTags,
    slug,
  } = techblog.fields;
  const date = blogDop.substring(0, 10);
  return (
    <div>
        {/* <Link
          href={`/blogpage/${slug}`}
          className=" text-decoration-none  text-dark"
        > */}
          <div
            className="card mb-4  mx-auto mt-4 shadow "
            style={{ maxWidth: "820px" }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={`https:${blogImg.fields.file.url}`}
                  className="img-fluid  mx-3 my-3 "
                  alt={blogName}
                  blurDataURL="blur"
                  placeholder="blur"
                  // priority
                  // style={{ maxHeight: "190px" }}
                  width={300}
                  height={450}
                />
              </div>
              <div className="col-md-8 ">
                <section
                  className="card-body mx-3 "
                  style={{ minHeight: "210px" }}
                >
                  <div className="card-text m-0 border-bottom border-2 d-flex">
                    <div className="d-flex mx-auto ">
                      <i className="bi bi-calendar-check "></i>
                      <p className="ps-2 m-0 text-muted">{date}</p>
                    </div>
                    <div className="d-flex mx-auto">
                      <i className="bi bi-tags"></i>

                      <p className=" ps-2 m-0 text-muted">{blogTags}</p>
                    </div>
                    <div className="d-flex mx-auto">
                      <i className="bi bi-person-circle"></i>
                      <p className="ps-2 text-muted">{autherName}</p>
                    </div>
                  </div>
                  <h4 className="card-title mt-2  ">{blogName}</h4>
                  <p className="card-text">
                    {documentToReactComponents(blogShortDiscription)}
                  </p>
                </section>
              </div>
            </div>
          </div>
        {/* </Link>  */}
        {/* :(
        "Loading"
      )
      } */}
    </div>
  );
}

export default BlogPost;
