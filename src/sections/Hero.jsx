import { motion } from "framer-motion";

import Button from "../components/Button";

import { wedding } from "../config/wedding";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background */}

      {/* <img
        src={wedding.hero.image}
        alt="Wedding"
        className="absolute inset-0 h-full w-full object-cover"
      /> */}
      <motion.img
        src={wedding.hero.image}
        alt="Wedding"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
            duration: 8,
            ease: "easeOut",
        }}
        />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="relative z-10 text-center text-white px-6"
      >
        <p className="uppercase tracking-[0.45em] text-xs md:text-sm">
          {wedding.hero.subtitle}
        </p>

        <h1
          className="
          font-title
          mt-6

          text-6xl

          md:text-8xl

          tracking-wide
        "
        >
          {wedding.bride.firstName}
        </h1>

        <div className="font-title text-5xl my-3">
          and
        </div>

        <h1
          className="
          font-title

          text-6xl

          md:text-8xl

          tracking-wide
        "
        >
          {wedding.groom.firstName}
        </h1>

        <p className="mt-8 tracking-[0.15em] uppercase text-sm">
          {wedding.hero.invitation}
        </p>

        <p className="mt-6 text-xl font-title">
          {wedding.date.display}
        </p>

        <div className="mt-12">
          <Button href="#rsvp">
            RSVP NOW
          </Button>
        </div>
        <motion.div
            animate={{
                y: [0, 8, 0],
            }}
            transition={{
                repeat: Infinity,
                duration: 1.8,
            }}
            className="mt-16 text-3xl"
            >
            ↓
        </motion.div>
      </motion.div>
    </section>
  );
}