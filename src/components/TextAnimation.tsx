import React from "react";
import Image from "next/image";

const TextAnimation = () => {
  return (
    <div className="text-[2.26rem]  uppercase h-[100vh] flex flex-col  justify-center">
      <p className="">{"Hello 👋 I'm"}</p>
      <section className="h-[50px] overflow-hidden ">
        <div className=" first:animate-text-slide ">
          <div className="bg-[#686ffd] pb-1 px-3 inline-block mb-[2.81rem] h-[2.81rem]">
            Deva 🤗
          </div>
        </div>
        <div className=" first:animate-text-slide ">
          <div className="bg-[#9798e1] pb-1 px-3 inline-block mb-[2.81rem] h-[2.81rem]">
            Back End Dev
          </div>
        </div>
        <div className=" first:animate-text-slide ">
          <div className="bg-[#686ffd] pb-1 px-3 inline-block mb-[2.81rem] h-[2.81rem]">
            Telkom School 🏫
          </div>
        </div>
      </section>
    </div>
  );
};

export default TextAnimation;
