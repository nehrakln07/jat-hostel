import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Link from "next/link";

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-24 mb-24 px-2 xl:px-16 mx-auto"
      id="about"
    >
      <ScrollAnimationWrapper>
        <motion.div className="flex text-center"
          variants={scrollAnimation}>
            <div className="w-full my-10 flex justify-between flex-wrap md:flex-nowrap text-center pt-16" style={{fontWeight: 700}}>
              <p className="w-full text-4xl text-bold text-green-500"><span className="text-orange-500">जाट </span>बलवान - जय भगवान</p>
              <p className="w-full text-4xl text-bold text-green-500">जय जवान - जय किसान</p>
            </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 pb-6 sm:pb-16"
          variants={scrollAnimation}>
          <div className="flex w-full">
            <motion.div className="w-full h-full	" variants={scrollAnimation}>
              <Image
                src="/assets/veer-tejaji.jpg"
                alt="VPN Illustrasi"
                quality={100}
                width={546}
                height={500}
                // fill
                layout="responsive"
              />
            </motion.div>
          </div>
          <div className="flex w-full">
            <motion.div className="w-full h-full" variants={scrollAnimation}>
              <Image
                src="/assets/surajmal.jpeg"
                alt="VPN Illustrasi"
                quality={100}
                width={546}
                height={500}
                // fill
                layout="responsive"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <scrollAnimation>
        <motion.div className="w-full text-center flex flex-col justify-center items-start row-start-2 sm:row-start-1">
          <h1 className="w-full text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
            Welcome to JAT Hostels Rajasthan
            </h1>
          <p className="text-black-500 mt-4 mb-6">
            Rajasthan Jat Hostels, a network of hostels run by community aimed at connecting students from all over Rajasthan and providing them with mentorship opportunities, career guidance and push society in right direction.
          </p>
          {/* <div className="w-full text-center">
            <ButtonPrimary>
              <Link href="/hostels">View All Hostels</Link>
            </ButtonPrimary>
          </div> */}
        </motion.div>
      </scrollAnimation>
    </div>
  );
};

export default Hero;