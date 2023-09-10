import React from "react";
import Image from "next/image";

interface prop {
  title?: string;
  image?: string;
  children: any;
  link?: string;
  class?: string;
}
const Card = (props: prop) => {
  return (
    <div className={`w-80 bg-blue-950 rounded-md ${props.class}`}>
      <Image
        alt="card poto"
        className="w-full"
        src={`${props.image}`}
        width={1000}
        height={1000}
      />
      <div className="p-2">
        <h3 className="capitalize pt-8 text-2xl">{props.title}</h3>
        <div className="w-[19.5rem]">{props.children}</div>
      </div>
    </div>
  );
};

export default Card;
