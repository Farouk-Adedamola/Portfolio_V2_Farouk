import React from 'react';
// import Image from 'next/image'
import Text from '@/components/Text/Text';
import Button from '@/components/Button/Button';

const Hero = () => {
  return (
    <section className=" mx-auto px-4 mt-12">
      <section className="flex flex-col gap-4">
        <div className="flex flex-row items-baseline gap-2 ">
          <Text
            className="font-medium text-[50px] 2xl:text-[60px]"
            font="product-sans"
            weight="medium"
          >
            Hi, I&apos;m
          </Text>
          <Text
            className="font-sf-regular text-[50px] 2xl:text-[60px] font-bold text-zinc-800 dark:text-zinc-200"
            font="product-sans"
            weight="bold"
          >
            Farouk Adedamola
          </Text>
          <span className="bg-btn rounded-full w-6 h-6"></span>
        </div>
        <div className="flex flex-col gap-6 max-w-[600px]">
          <Text
            className="font-product-sans font-medium text-[20px] text-zinc-800 dark:text-zinc-200"
            font="product-sans"
            weight="medium"
          >
            I&apos;m an experienced frontend engineer passionate about learning
            and building solution softwares that is beneficial to developers and
            the world at large.
          </Text>
          <div className="flex ">
            <Button fontColor="white">Download CV</Button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
