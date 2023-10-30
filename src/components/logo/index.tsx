"use client";
import React from "react";
import Image from "next/image";

const Logo = (props: any) => {

  const { imgLink, width, height } = props;

  return (
    <>
      <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}/${imgLink}`} alt={`${process.env.NEXT_PUBLIC_BASE_URL}/${imgLink}`} priority height={height} width={width} />
    </>
  );
};

export default Logo;
