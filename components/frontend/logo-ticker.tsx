"use client";

import acmeLogo from "@/app/assets/logo-acme.png";
import quantamLogo from "@/app/assets/logo-quantum.png";
import apexLogo from "@/app/assets/logo-apex.png";
import celestialLogo from "@/app/assets/logo-celestial.png";
import pulseLogo from "@/app/assets/logo-pulse.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { TextAnimate } from "../magicui/text-animate";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <TextAnimate
        animation="blurInUp"
        by="character"
        className="mt-5
             text-md md:text-2xl font-semibold text-center mb-16 text-neutral-600"
        duration={5}
      >
        Trusted By Leading Educational Institutions WorldWide
      </TextAnimate>
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={acmeLogo}
              alt="acme logo"
              className="logo-ticker-image"
            />
            <Image
              src={quantamLogo}
              alt="quantam logo"
              className="logo-ticker-image"
            />
            <Image
              src={celestialLogo}
              alt="celestial logo"
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt="pulse logo"
              className="logo-ticker-image"
            />
            <Image
              src={apexLogo}
              alt="apex logo"
              className="logo-ticker-image"
            />

            <Image
              src={acmeLogo}
              alt="acme logo"
              className="logo-ticker-image"
            />
            <Image
              src={quantamLogo}
              alt="quantam logo"
              className="logo-ticker-image"
            />
            <Image
              src={celestialLogo}
              alt="celestial logo"
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt="pulse logo"
              className="logo-ticker-image"
            />
            <Image
              src={apexLogo}
              alt="apex logo"
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
