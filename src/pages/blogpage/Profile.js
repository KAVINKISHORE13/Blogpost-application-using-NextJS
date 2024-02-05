import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Img from '../../../public/error_under_maintenance.png'

function Profile() {
  return (
    <>
    <Head>
       <title>My next js app | Profile</title>
     </Head>
    <div suppressHydrationWarning={true}>
      <div className="text-center my-4 ">
        <div className="text-center">
          <Image
            src={
            Img  }
            alt="aboutimage"
            width={400}
            height={400}
            loading="lazy"
          />
        </div>
        <Link class="btn btn-danger" href="/">
          Back to Home
        </Link>
      </div>
    </div>
    </>
  );
}

export default Profile;
