import {
  IconCheck,
  IconFileDownload,
  IconSettingsFilled,
  IconUpload,
  IconEdit,
} from "@tabler/icons-react";
import React from "react";
import PrimaryBtn from "../PrimaryBtn";
import Carousel from "./Carousel";
export default function Information() {
  const iconMap = {
    0: IconUpload,
    1: IconSettingsFilled,
    2: IconEdit,
    3: IconFileDownload,
  };
  const feature = [
    "Upload Video",
    "Generate Subtitle",
    "Edit Subtitle",
    "Download .srt/.vtt",
  ];
  const modes = ["No credit card required", "Nominal Fee", "Cancel Anytime"];

  return (
    <main className="md:mt-36 space-y-36 mt-16  md:px-20 px-4">
      <section className="space-y-20">
        <h2 className="text-center text-3xl md:text-5xl font-medium underline decoration-8 underline-offset-[14px] decoration-primary-900">
          How it works
        </h2>
        <div className="mt-12 flex md:flex-row flex-col items-center justify-center">
          {feature.map((element, index) => {
            const Icon = iconMap[index];
            return (
              <div
                key={index}
                className="flex flex-col items-center mx-10 my-3 md:mt-0"
              >
                <div className="bg-primary-900 text-white md:p-8 p-6 rounded-lg ">
                  <Icon size="46" />
                </div>
                <p className="md:text-2xl text-xl mt-2">{element}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <h2 className="text-center text-3xl md:text-5xl font-medium ">
          Cutting edge technology that supports 10+ languages
        </h2>
        <Carousel />
      </section>
      <section className="flex flex-col ">
        <h2 className="text-center text-3xl md:text-5xl font-medium ">
          Want to experience the fastest way to generate subtitle for your
          videos?
        </h2>
        <div className="self-center m-10">
          <PrimaryBtn />
        </div>
        <div className="flex flex-col md:flex-row  md:justify-center mb-12">
          {modes.map((element, index) => {
            return (
              <div
                key={index}
                className="flex  items-center gap-2 md:justify-center md:mx-10 my-2"
              >
                <IconCheck color="#2F855A" />
                <p>{element}</p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
