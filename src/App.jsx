"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import CountUp from "react-countup";
import { useEffect, useRef } from "react";

const FadeUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

export default function AnniversaryWebsite() {
  const audioRef = useRef(null);

  useEffect(() => {
    const playMusic = async () => {
      try {
        await audioRef.current?.play();
      } catch (err) {
        console.log("Autoplay blocked");
      }
    };

    playMusic();

    document.addEventListener("click", playMusic);

    return () => {
      document.removeEventListener("click", playMusic);
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-red-100 text-gray-800">
      {/* FLOATING HEARTS */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300 opacity-20 text-xl sm:text-2xl md:text-3xl"
            initial={{
              y: "100vh",
              x: Math.random() * 1500,
              scale: Math.random() * 1.5 + 0.5,
            }}
            animate={{
              y: "-20vh",
            }}
            transition={{
              duration: Math.random() * 10 + 12,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          >
            💖
          </motion.div>
        ))}
      </div>

      {/* HERO SECTION */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        {/* Aurora */}
        <div className="absolute inset-0 bg-[conic-gradient(at_top_right,_#ff4d6d,_#ff8fa3,_#ffc2d1,_#ff4d6d)] opacity-20 blur-3xl animate-pulse"></div>

        {/* Shooting Stars */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[2px] w-[80px] sm:w-[120px] bg-white rotate-[-25deg]"
              initial={{
                x: -200,
                y: Math.random() * 1000,
                opacity: 0,
              }}
              animate={{
                x: 1800,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 2,
              }}
            />
          ))}
        </div>

        {/* Floating Emojis */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute left-3 top-20 text-3xl sm:left-10 sm:text-5xl"
        >
          💗
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-20 right-4 text-4xl sm:right-10 sm:text-6xl"
        >
          💞
        </motion.div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute right-6 top-24 text-3xl sm:right-20 sm:text-5xl"
        >
          ✨
        </motion.div>

        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-full bg-white/70 px-4 py-2 shadow-xl backdrop-blur-xl sm:px-6 sm:py-3"
          >
            <span className="text-2xl sm:text-3xl">💖</span>

            <p className="text-[10px] font-bold uppercase tracking-[2px] text-rose-500 sm:text-sm sm:tracking-[4px]">
              SSG ❤️ HSG • Forever Together
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="
            bg-gradient-to-r
            from-rose-500
            via-pink-500
            to-red-500
            bg-clip-text
            text-transparent
            font-black
            leading-tight
            text-4xl
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
            "
          >
            Happy 3rd
            <br />
            Anniversary ❤️
          </motion.h1>

          <TypeAnimation
            sequence={[
              "You are my happiness ❤️",
              2000,
              "You are my safe place 🐰",
              2000,
              "You are my forever 💍",
              2000,
            ]}
            wrapper="p"
            speed={40}
            repeat={Infinity}
            className="
            mt-6
            text-lg
            sm:text-2xl
            md:text-3xl
            font-semibold
            text-gray-700
            "
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="
            mx-auto
            mt-6
            max-w-4xl
            text-sm
            leading-7
            text-gray-600
            sm:text-lg
            sm:leading-8
            md:text-2xl
            md:leading-10
            "
          >
            From a Civil Engineer & a Software Developer
            <br />
            to soulmates forever 💕
          </motion.p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
              rounded-2xl
              bg-rose-500
              px-6
              py-3
              text-base
              sm:px-10
              sm:py-5
              sm:text-xl
              font-bold
              text-white
              shadow-[0_0_30px_rgba(255,0,85,0.5)]
              "
            >
              Saslu ❤️ Sasli
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="
              rounded-2xl
              border
              border-rose-200
              bg-white/80
              px-6
              py-3
              text-base
              sm:px-10
              sm:py-5
              sm:text-xl
              font-bold
              text-rose-500
              shadow-xl
              backdrop-blur-xl
              "
            >
              29 May 2023 ✨
            </motion.button>
          </div>
        </div>
      </section>

      {/* LOVE STORY */}
      <section className="relative px-4 py-20 sm:px-6 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,0,120,0.1),transparent_60%)]"></div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <FadeUp>
            <div className="mb-14 text-center sm:mb-20">
              <h2
                className="
              bg-gradient-to-r
              from-rose-500
              via-pink-500
              to-red-500
              bg-clip-text
              text-transparent
              text-3xl
              sm:text-5xl
              md:text-6xl
              font-black
              "
              >
                Our Cute Love Story 🐰
              </h2>

              <p className="mt-4 text-base text-gray-600 sm:text-xl">
                Built with love, cuddles and endless memories ❤️
              </p>
            </div>
          </FadeUp>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                emoji: "💍",
                title: "SSG Met HSG",
                text: "The most beautiful chapter started when destiny connected us.",
              },
              {
                emoji: "🐰",
                title: "Cute Saslu & Sasli",
                text: "Every little moment together became magical.",
              },
              {
                emoji: "❤️",
                title: "Forever Together",
                text: "Two souls creating one beautiful forever story.",
              },
            ].map((item, index) => (
              <FadeUp key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="
                  rounded-[30px]
                  border
                  border-white/40
                  bg-white/40
                  p-6
                  sm:p-10
                  backdrop-blur-xl
                  shadow-[0_10px_50px_rgba(255,0,100,0.15)]
                  "
                >
                  <div className="text-5xl sm:text-7xl">{item.emoji}</div>

                  <h3 className="mt-5 text-2xl font-black text-rose-500 sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                    {item.text}
                  </p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* COUNTDOWN */}
      <section className="px-4 py-20 sm:px-6 sm:py-28">
        <FadeUp>
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="mb-14 text-3xl font-black text-rose-500 sm:text-5xl md:text-6xl">
              Since 29 May 2023 ❤️
            </h2>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
              {[
                { end: 3, label: "Years" },
                { end: 36, label: "Months" },
                { end: 1095, label: "Days" },
                { end: "∞", label: "Memories" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -6 }}
                  className="
            rounded-[30px]
            bg-white/80
            backdrop-blur-xl
            border border-white/50
            p-6
            shadow-[0_15px_50px_rgba(255,0,100,0.15)]
            transition-all
            duration-300
            sm:p-10
            "
                >
                  <div className="text-3xl font-black text-rose-500 sm:text-5xl">
                    {item.label === "Memories" ? (
                      <span className="inline-block animate-pulse">∞</span>
                    ) : (
                      <CountUp end={item.end} duration={4} />
                    )}
                  </div>

                  <div className="mt-3 text-sm text-gray-600 sm:text-xl">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeUp>
      </section>

      {/* PHOTO GALLERY */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 px-4 py-20 sm:px-6 sm:py-28">
        <FadeUp>
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-black text-rose-500 sm:text-5xl md:text-7xl">
                Precious Memories 📸
              </h2>

              <p className="mt-4 text-base text-gray-600 sm:text-xl">
                Every picture tells our forever story ❤️
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {["/public/m1.jpeg", "/public/m2.jpeg", "/public/m3.jpeg"].map(
                (img, index) => (
                  <Tilt
                    key={index}
                    glareEnable
                    glareMaxOpacity={0.3}
                    scale={1.03}
                    transitionSpeed={2000}
                  >
                    <motion.div
                      whileHover={{ y: -10 }}
                      className="group overflow-hidden rounded-[30px] bg-white p-3 shadow-2xl"
                    >
                      <img
                        src={img}
                        alt="memory"
                        className="
                      h-[280px]
                      sm:h-[420px]
                      w-full
                      rounded-[20px]
                      object-cover
                      transition-all
                      duration-700
                      group-hover:scale-110
                      "
                      />
                    </motion.div>
                  </Tilt>
                ),
              )}
            </div>
          </div>
        </FadeUp>
      </section>

      {/* LOVE LETTER */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,0,120,0.15),transparent_60%)]"></div>

        <FadeUp>
          <div
            className="
          relative
          z-10
          mx-auto
          max-w-5xl
          rounded-[35px]
          border
          border-white/40
          bg-white/40
          p-6
          sm:p-12
          backdrop-blur-2xl
          shadow-[0_20px_80px_rgba(255,0,100,0.2)]
          "
          >
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="mx-auto mb-6 text-5xl sm:text-6xl"
              >
                💌
              </motion.div>

              <h2 className="text-3xl font-black text-rose-500 sm:text-5xl">
                To My SSG ❤️
              </h2>

              <p
                className="
              mt-8
              text-base
              leading-8
              text-gray-700
              sm:text-xl
              sm:leading-[50px]
              "
              >
                My Dear SSG,
                <br />
                Thank you for being my happiness, my safe place, my best friend
                and my forever person. These 3 years with you feel like the most
                beautiful dream of my life. Every day with you feels magical.
                From your care to your smile, everything makes me fall in love
                with you again and again.
                <br />
                <br />
                I promise to love you more with every passing year. No matter
                where life takes us, my heart will always belong to you. ❤️
                <br />
                <br />
                {/* Forever Yours,<br/> */}
                Your Kiara 🐰❤️
              </p>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Romantic Image Grid Section */}
      <section className="relative overflow-hidden from-pink-50 via-rose-50 to-red-100 px-4 py-20 sm:px-6 sm:py-32">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 h-[300px] w-[300px] rounded-full bg-pink-300/20 blur-3xl"></div>

        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-rose-400/20 blur-3xl"></div>

        {/* Floating Emojis */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute left-4 top-16 text-4xl sm:left-10 sm:text-6xl"
        >
          💖
        </motion.div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute right-6 top-20 text-3xl sm:right-20 sm:text-5xl"
        >
          ✨
        </motion.div>

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mb-14 text-center sm:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div
                className="
        mb-6
        inline-block
        rounded-full
        bg-white/70
        px-5
        py-2
        shadow-xl
        backdrop-blur-md
        sm:px-8
        sm:py-3
        "
              >
                <p
                  className="
          text-[10px]
          font-bold
          uppercase
          tracking-[2px]
          text-rose-500
          sm:text-sm
          sm:tracking-[4px]
          "
                >
                  SSG ❤️ HSG
                </p>
              </div>

              <h2
                className="
        bg-gradient-to-r
        from-rose-500
        via-pink-500
        to-red-500
        bg-clip-text
        text-3xl
        sm:text-5xl
        md:text-7xl
        font-black
        leading-tight
        text-transparent
        "
              >
                Our Beautiful
                <br />
                Memory Gallery 📸
              </h2>

              <p
                className="
        mx-auto
        mt-6
        max-w-4xl
        text-sm
        leading-7
        text-gray-600
        sm:text-xl
        sm:leading-9
        "
              >
                Every picture holds a heartbeat,
                <br />
                every smile holds a forever ❤️
              </p>
            </motion.div>
          </div>

          {/* Attractive Grid */}
          <div
            className="
    grid
    auto-rows-[250px]
    grid-cols-1
    gap-5
    sm:grid-cols-2
    lg:grid-cols-4
    "
          >
            {[
              {
                img: "/public/g1.jpeg",
                className: "lg:col-span-2 lg:row-span-2",
              },
              {
                img: "/public/g2.jpeg",
                className: "lg:row-span-1",
              },
              {
                img: "/public/g3.jpeg",
                className: "lg:row-span-1",
              },
              {
                img: "/public/g15.jpeg",
                className: "lg:col-span-2",
              },
              {
                img: "/public/g7.jpeg",
                className: "",
              },
              {
                img: "/public/g4.jpeg",
                className: "",
              },
              {
                img: "/public/g14.jpeg",
                className: "",
              },
              {
                img: "/public/g17.jpeg",
                className: "",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className={`
          group
          relative
          overflow-hidden
          rounded-[30px]
          bg-white
          shadow-[0_20px_60px_rgba(255,0,100,0.18)]
          ${item.className}
          `}
              >
                {/* Glow Effect */}
                <div
                  className="
          absolute
          inset-0
          z-10
          bg-gradient-to-t
          from-black/60
          via-black/10
          to-transparent
          opacity-60
          transition
          duration-500
          group-hover:opacity-80
          "
                ></div>

                {/* Image */}
                <img
                  src={item.img}
                  alt="memory"
                  className="
            h-full
            w-full
            object-cover
            transition-all
            duration-[1500ms]
            group-hover:scale-110
            group-hover:rotate-1
            "
                />

                {/* Shine Animation */}
                <div
                  className="
          absolute
          inset-0
          z-20
          -translate-x-full
          bg-gradient-to-r
          from-transparent
          via-white/30
          to-transparent
          transition-transform
          duration-1000
          group-hover:translate-x-full
          "
                ></div>

                {/* Bottom Text */}
                <div
                  className="
          absolute
          bottom-0
          left-0
          z-30
          p-5
          sm:p-7
          "
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3
                      className="
              text-xl
              sm:text-2xl
              font-black
              text-white
              drop-shadow-lg
              "
                    >
                      Forever Together ❤️
                    </h3>

                    <p
                      className="
              mt-2
              text-sm
              text-rose-100
              sm:text-base
              "
                    >
                      SSG & HSG ✨
                    </p>
                  </motion.div>
                </div>

                {/* Floating Heart */}
                <motion.div
                  animate={{
                    y: [-5, 5, -5],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="
            absolute
            right-4
            top-4
            z-30
            text-3xl
            "
                >
                  💖
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Voice Message Section */}
      <section className="relative overflow-hidden  from-rose-50 to-pink-100 px-4 py-20 sm:px-6 sm:py-24">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] rounded-full bg-pink-300/20 blur-3xl"></div>

        <div className="absolute bottom-0 right-0 h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] rounded-full bg-rose-400/20 blur-3xl"></div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mb-6 text-5xl sm:text-7xl"
          >
            🎙️
          </motion.div>

          <h2
            className="
    text-3xl
    sm:text-5xl
    md:text-6xl
    font-black
    text-rose-600
    leading-tight
    "
          >
            A Special
            <br className="sm:hidden" />
            Voice Message ❤️
          </h2>

          <p
            className="
    mx-auto
    mt-5
    max-w-3xl
    text-sm
    leading-7
    text-gray-600
    sm:mt-6
    sm:text-xl
    sm:leading-9
    "
          >
            A romantic message from Kiara to Saurabh ✨
          </p>

          <motion.div
            whileHover={{ y: -6 }}
            className="
      mx-auto
      mt-10
      max-w-3xl
      rounded-[30px]
      sm:rounded-[40px]
      border
      border-white/50
      bg-white/80
      p-5
      sm:p-10
      shadow-2xl
      backdrop-blur-xl
      "
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mb-5 text-5xl sm:text-6xl"
            >
              🐰❤️🐰
            </motion.div>

            {/* <p
              className="
      mb-6
      text-sm
      leading-7
      text-gray-500
      sm:mb-8
      sm:text-lg
      "
            >
              Replace voice-message.mp3 with your real voice recording.
            </p> */}

            <audio controls className="w-full rounded-xl">
              <source src="/voice.mp3" type="audio/mpeg" />
            </audio>
          </motion.div>
        </div>
      </section>

      {/* Cinematic Wedding Memory Section */}
      <section
        className="
relative
overflow-hidden

from-rose-100
via-pink-50
to-red-100
px-4
py-20
sm:px-6
sm:py-32
"
      >
        {/* Background Blur */}
        <div className="absolute top-0 left-0 h-[250px] w-[250px] sm:h-[500px] sm:w-[500px] rounded-full bg-pink-300/30 blur-3xl"></div>

        <div className="absolute bottom-0 right-0 h-[250px] w-[250px] sm:h-[500px] sm:w-[500px] rounded-full bg-rose-400/20 blur-3xl"></div>

        {/* Floating Emojis */}
        <div className="absolute left-2 top-16 text-3xl animate-bounce sm:left-10 sm:top-20 sm:text-5xl">
          💖
        </div>

        <div className="absolute right-4 top-24 text-2xl animate-pulse sm:right-20 sm:top-40 sm:text-4xl">
          ✨
        </div>

        <div className="absolute bottom-20 left-4 text-4xl animate-bounce sm:bottom-24 sm:left-20 sm:text-6xl">
          🐰
        </div>

        <div className="absolute bottom-14 right-4 text-3xl animate-pulse sm:bottom-20 sm:right-20 sm:text-5xl">
          🌹
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mb-14 text-center sm:mb-20">
            <div
              className="
      mb-6
      inline-block
      rounded-full
      bg-white/70
      px-5
      py-2
      shadow-xl
      backdrop-blur-md
      sm:mb-8
      sm:px-8
      sm:py-3
      "
            >
              <p
                className="
        text-[10px]
        font-semibold
        uppercase
        tracking-[2px]
        text-rose-500
        sm:text-sm
        sm:tracking-[4px]
        "
              >
                SSG ❤️ HSG
              </p>
            </div>

            <h2
              className="
      text-3xl
      sm:text-5xl
      md:text-7xl
      font-black
      leading-tight
      text-rose-600
      "
            >
              Our Pre-Wedding
              <br />
              Memory Film 🎥
            </h2>

            <p
              className="
      mx-auto
      mt-6
      max-w-4xl
      text-sm
      leading-7
      text-gray-600
      sm:mt-8
      sm:text-xl
      sm:leading-9
      md:text-2xl
      "
            >
              Every smile, every moment...
              <br />
              became the most beautiful memory of our forever ❤️
            </p>
          </div>

          {/* Video Card */}
          <motion.div whileHover={{ y: -5 }} className="relative group">
            {/* Glow */}
            <div
              className="
      absolute
      -inset-2
      sm:-inset-3
      rounded-[30px]
      sm:rounded-[45px]
      bg-gradient-to-r
      from-rose-400
      via-pink-400
      to-red-400
      opacity-40
      blur-xl
      transition
      duration-700
      group-hover:opacity-70
      "
            ></div>

            <div
              className="
      relative
      overflow-hidden
      rounded-[30px]
      sm:rounded-[45px]
      border
      border-white/50
      bg-white/70
      p-3
      sm:p-5
      shadow-[0_20px_80px_rgba(255,0,85,0.25)]
      backdrop-blur-xl
      "
            >
              {/* Video */}
              <div className="overflow-hidden rounded-[20px] sm:rounded-[35px]">
                <iframe
                  className="
            h-[220px]
            w-full
            rounded-[20px]
            sm:h-[450px]
            md:h-[600px]
            lg:h-[700px]
            sm:rounded-[35px]
            "
                  src="https://www.youtube.com/embed/nfJ8I8amsOM?autoplay=0"
                  title="Wedding Memory Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Bottom Text */}
              <div className="mt-6 text-center sm:mt-10">
                <h3
                  className="
          text-2xl
          sm:text-3xl
          md:text-4xl
          font-black
          text-rose-500
          "
                >
                  29 May 2023 💍
                </h3>

                <p
                  className="
          mx-auto
          mt-4
          max-w-3xl
          text-sm
          leading-7
          text-gray-600
          sm:mt-5
          sm:text-lg
          sm:leading-9
          md:text-xl
          "
                >
                  The day HSG became forever yours
                  <br />
                  and SSG became forever mine ❤️
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-rose-500 px-4 py-12 text-center text-white">
        <motion.h2
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-3xl font-black sm:text-4xl"
        >
          SSG ❤️ HSG
        </motion.h2>

        <p className="mt-4 text-base text-rose-100 sm:text-xl">
          Forever Together 🐰✨
        </p>
      </footer>

      <audio ref={audioRef} loop className="hidden">
        <source src="/bg.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}

// export default function AnniversaryWebsite() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-red-100 text-gray-800 overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center">
//         <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_#ff4d6d,_transparent_30%),radial-gradient(circle_at_bottom_left,_#ff8fa3,_transparent_30%)]"></div>

//         <div className="relative z-10 max-w-4xl">
//           <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/70 px-5 py-2 shadow-lg backdrop-blur-sm">
//             <span className="text-2xl">💖</span>
//             <p className="text-sm font-semibold tracking-wide uppercase">
//               SSG ❤️ HSG • Forever Together
//             </p>
//           </div>

//           <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-rose-600 drop-shadow-sm">
//             Happy 3rd Anniversary SSG ❤️
//           </h1>

//           <p className="mt-6 text-lg md:text-2xl text-gray-700 leading-relaxed">
//             From a Civil Engineer & a Software Developer to soulmates forever 💕<br />You are my SSG and I will always be your HSG.
//           </p>

//           <div className="mt-10 flex flex-wrap justify-center gap-4">
//             <button className="rounded-2xl bg-rose-500 px-8 py-4 text-lg font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-rose-600">
//               Saslu ❤️ Sasli
//             </button>

//             <button className="rounded-2xl border border-rose-300 bg-white/80 px-8 py-4 text-lg font-semibold text-rose-600 shadow-lg transition hover:scale-105">
//               29 May 2023 ✨
//             </button>
//           </div>
//         </div>

//         {/* Floating Hearts */}
//         <div className="absolute top-20 left-10 text-4xl animate-bounce">💗</div>
//         <div className="absolute bottom-32 right-12 text-5xl animate-pulse">💞</div>
//         <div className="absolute top-40 right-24 text-3xl animate-bounce delay-300">🌹</div>
//       </section>

//       {/* Memories Section */}
//       <section className="px-6 py-24">
//         <div className="mx-auto max-w-6xl">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-rose-600">
//               Our Cute Love Story 🐰
//             </h2>
//             <p className="mt-4 text-lg text-gray-600">
//               Built with love, care, bunny cuddles and endless memories ❤️
//             </p>
//           </div>

//           <div className="grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 emoji: '💍',
//                 title: 'SSG Met HSG',
//                 text: 'The most beautiful chapter of our life started when SSG met his HSG.',
//               },
//               {
//                 emoji: '🌍',
//                 title: 'Cute Saslu & Sasli',
//                 text: 'Every small moment, every laugh, every cuddle became magical together.',
//               },
//               {
//                 emoji: '❤️',
//                 title: 'Engineer Couple ❤️',
//                 text: 'A Civil Engineer and a Software Developer creating the sweetest forever story.',
//               },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="rounded-3xl bg-white/80 p-8 shadow-2xl backdrop-blur-md transition duration-300 hover:-translate-y-2"
//               >
//                 <div className="text-6xl">{item.emoji}</div>
//                 <h3 className="mt-6 text-2xl font-bold text-rose-500">
//                   {item.title}
//                 </h3>
//                 <p className="mt-4 text-gray-600 leading-relaxed">
//                   {item.text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Love Letter Section */}
//       <section className="px-6 py-24 bg-white/50 backdrop-blur-sm">
//         <div className="mx-auto max-w-4xl rounded-[40px] bg-white/80 p-10 shadow-2xl border border-rose-100">
//           <div className="text-center">
//             <h2 className="text-4xl font-bold text-rose-600 mb-8">
//               To My SSG 💌
//             </h2>

//             <p className="text-lg md:text-xl leading-9 text-gray-700">
//               My Dear SSG,
//               <br /><br />
//               Thank you for being my happiness, my safe place, my best friend and my forever person.
//               These 3 years with you feel like the most beautiful dream of my life.
//               Every day with you feels magical. From your care to your smile, everything makes me fall in love with you again and again.
//               <br /><br />
//               I promise to love you more with every passing year.
//               No matter where life takes us, my heart will always belong to you.
//               ❤️
//               <br /><br />
//               Happy Anniversary My Saslu ❤️<br /><br />Forever Yours,<br />Your Sasli 🐰
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Countdown Style Section */}
//       <section className="px-6 py-24">
//         <div className="mx-auto max-w-5xl text-center">
//           <h2 className="text-4xl md:text-5xl font-bold text-rose-600 mb-14">
//             Since 29 May 2023 ❤️
//           </h2>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {[
//               { number: '3', label: 'Years' },
//               { number: '36', label: 'Months' },
//               { number: '1095+', label: 'Days' },
//               { number: '∞', label: 'Memories' },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="rounded-3xl bg-white p-8 shadow-xl hover:scale-105 transition"
//               >
//                 <div className="text-5xl font-extrabold text-rose-500">
//                   {item.number}
//                 </div>
//                 <div className="mt-3 text-lg font-medium text-gray-600">
//                   {item.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Photo Gallery Section */}
//       <section className="px-6 py-24 bg-gradient-to-br from-pink-50 to-rose-100">
//         <div className="mx-auto max-w-6xl">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-black text-rose-600">
//               Our Precious Memories 📸
//             </h2>
//             <p className="mt-4 text-xl text-gray-600">
//               Every picture holds a beautiful memory of SSG & HSG ❤️
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop',
//               'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop',
//               'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
//             ].map((img, index) => (
//               <div
//                 key={index}
//                 className="group overflow-hidden rounded-[35px] shadow-2xl bg-white p-3 hover:-translate-y-3 transition duration-500"
//               >
//                 <img
//                   src={img}
//                   alt="memory"
//                   className="h-[350px] w-full object-cover rounded-[25px] group-hover:scale-110 transition duration-700"
//                 />
//               </div>
//             ))}
//           </div>

//           <p className="text-center mt-10 text-lg text-gray-500">
//             Replace these photos with your real couple pictures 💕
//           </p>
//         </div>
//       </section>

//       {/* Why I Love You */}
//       <section className="px-6 py-24 bg-white">
//         <div className="mx-auto max-w-6xl text-center">
//           <h2 className="text-5xl font-black text-rose-600 mb-6">
//             Why HSG Loves SSG ❤️
//           </h2>

//           <p className="text-xl text-gray-600 mb-16">
//             A few reasons why my Saslu is the best husband ever 🐰
//           </p>

//           <div className="grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 emoji: '🛡️',
//                 title: 'My Safe Place',
//                 text: 'No matter what happens, your presence makes everything feel peaceful.',
//               },
//               {
//                 emoji: '😊',
//                 title: 'Your Smile',
//                 text: 'Your smile is my favorite thing in the whole world.',
//               },
//               {
//                 emoji: '🌍',
//                 title: 'My Whole World',
//                 text: 'You are not just my husband, you are my entire world.',
//               },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="rounded-[35px] bg-gradient-to-br from-rose-100 to-pink-100 p-10 shadow-xl hover:scale-105 transition duration-300"
//               >
//                 <div className="text-6xl mb-6">{item.emoji}</div>
//                 <h3 className="text-3xl font-bold text-rose-500">
//                   {item.title}
//                 </h3>
//                 <p className="mt-5 text-lg text-gray-600 leading-8">
//                   {item.text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Cute Rabbit Section */}
//       <section className="px-6 py-24 bg-gradient-to-br from-rose-500 via-pink-500 to-red-500 text-white text-center overflow-hidden relative">

//         <div className="absolute top-10 left-10 text-7xl opacity-20">🐰</div>
//         <div className="absolute bottom-10 right-10 text-8xl opacity-20">🐇</div>

//         <div className="relative z-10 max-w-4xl mx-auto">
//           <div className="text-8xl mb-8 animate-bounce">🐰❤️🐰</div>

//           <h2 className="text-5xl md:text-7xl font-black leading-tight">
//             Saslu & Sasli
//             <br />
//             Forever ✨
//           </h2>

//           <p className="mt-10 text-2xl leading-relaxed text-rose-100">
//             In every lifetime,
//             <br />
//             HSG will always choose her SSG ❤️
//           </p>
//         </div>
//       </section>

//       {/* Romantic Timeline */}
//       <section className="px-6 py-28 bg-[#fff7fa] relative overflow-hidden">
//         <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top,_#ff4d6d,_transparent_40%)]"></div>

//         <div className="relative z-10 max-w-5xl mx-auto">
//           <div className="text-center mb-20">
//             <h2 className="text-5xl md:text-6xl font-black text-rose-600">
//               Our Forever Timeline 💞
//             </h2>

//             <p className="mt-5 text-xl text-gray-600">
//               Every chapter with you became my favorite memory ❤️
//             </p>
//           </div>

//           <div className="space-y-10">

//             {[
//               {
//                 date: 'First Meeting ✨',
//                 text: 'The moment HSG met SSG, destiny quietly smiled.',
//               },
//               {
//                 date: 'Falling In Love ❤️',
//                 text: 'Slowly our hearts became home for each other.',
//               },
//               {
//                 date: '29 May 2023 💍',
//                 text: 'The day our forever officially started.',
//               },
//               {
//                 date: 'Today & Forever 🐰',
//                 text: 'Still deeply in love. Still each other’s safe place.',
//               },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-[35px] p-8 shadow-2xl hover:scale-[1.02] transition duration-300"
//               >
//                 <div className="min-w-[120px] h-[120px] rounded-full bg-gradient-to-br from-rose-400 to-pink-500 text-white flex items-center justify-center text-4xl shadow-xl">
//                   ❤️
//                 </div>

//                 <div className="text-center md:text-left">
//                   <h3 className="text-3xl font-black text-rose-500">
//                     {item.date}
//                   </h3>

//                   <p className="mt-4 text-lg text-gray-600 leading-8">
//                     {item.text}
//                   </p>
//                 </div>
//               </div>
//             ))}

//           </div>
//         </div>
//       </section>

//       {/* Romantic Quotes */}
//       <section className="px-6 py-28 bg-gradient-to-br from-rose-100 via-pink-100 to-red-100">
//         <div className="max-w-6xl mx-auto text-center">

//           <h2 className="text-5xl md:text-6xl font-black text-rose-600 mb-16">
//             Little Things I Love About You 💖
//           </h2>

//           <div className="grid md:grid-cols-2 gap-10">

//             {[
//               'The way you care for me 🥺',
//               'Your cute smile 😊',
//               'How safe I feel with you ❤️',
//               'Our late night talks 🌙',
//               'Your bunny love for your Sasli 🐰',
//               'The way you make me laugh ✨',
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white/80 backdrop-blur-md rounded-[30px] p-8 shadow-xl text-2xl font-semibold text-rose-500 hover:-translate-y-2 transition duration-300"
//               >
//                 {item}
//               </div>
//             ))}

//           </div>
//         </div>
//       </section>

//       {/* Surprise Ending */}
//       <section className="relative overflow-hidden px-6 py-36 bg-gradient-to-br from-rose-600 via-pink-500 to-red-500 text-white text-center">

//         <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_white,_transparent_30%)]"></div>

//         <div className="absolute top-10 left-10 text-6xl animate-bounce">💖</div>
//         <div className="absolute top-20 right-16 text-5xl animate-pulse">✨</div>
//         <div className="absolute bottom-16 left-16 text-7xl animate-bounce">🐰</div>
//         <div className="absolute bottom-10 right-10 text-6xl animate-pulse">💍</div>

//         <div className="relative z-10 max-w-5xl mx-auto">

//           <div className="text-8xl md:text-9xl mb-10 animate-pulse">
//             ❤️
//           </div>

//           <h2 className="text-6xl md:text-8xl font-black leading-tight">
//             Dear SSG,
//             <br />
//             You Are My
//             <br />
//             Greatest Blessing ✨
//           </h2>

//           <p className="mt-12 text-2xl md:text-3xl leading-relaxed text-rose-100 max-w-4xl mx-auto">
//             No matter how many years pass,
//             <br />
//             your HSG will always love you endlessly.
//             <br /><br />
//             Forever Your Sasli 🐰❤️
//           </p>

//           <div className="mt-16 flex justify-center gap-6 text-5xl md:text-6xl">
//             <span>💖</span>
//             <span>🌹</span>
//             <span>🐰</span>
//             <span>💍</span>
//             <span>✨</span>
//           </div>
//         </div>
//       </section>

//       {/* Voice Message Section */}
// <section className="py-24 px-6 bg-gradient-to-br from-rose-50 to-pink-100">

//   <div className="max-w-5xl mx-auto text-center">

//     <div className="text-7xl mb-6">
//       🎙️
//     </div>

//     <h2 className="text-5xl font-black text-rose-600 mb-6">
//       A Special Voice Message ❤️
//     </h2>

//     <p className="text-xl text-gray-600 mb-14">
//       A romantic message from HSG to SSG ✨
//     </p>

//     <div className="bg-white rounded-[40px] p-10 shadow-2xl max-w-3xl mx-auto">

//       <div className="text-6xl mb-6">
//         🐰
//       </div>

//       <p className="text-lg text-gray-500 mb-8">
//         Replace voice-message.mp3 with your real voice recording.
//       </p>

//       <audio controls className="w-full">
//         <source src="/voice-message.mp3" type="audio/mpeg" />
//       </audio>

//     </div>

//   </div>

// </section>

// {/* Wedding Video Section */}
// {/* Cinematic Wedding Memory Section */}
// <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-br from-rose-100 via-pink-50 to-red-100">

//   {/* Background Blur */}
//   <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-300/30 rounded-full blur-3xl"></div>

//   <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rose-400/20 rounded-full blur-3xl"></div>

//   {/* Floating Emojis */}
//   <div className="absolute top-20 left-10 text-5xl animate-bounce">
//     💖
//   </div>

//   <div className="absolute top-40 right-20 text-4xl animate-pulse">
//     ✨
//   </div>

//   <div className="absolute bottom-24 left-20 text-6xl animate-bounce">
//     🐰
//   </div>

//   <div className="absolute bottom-20 right-20 text-5xl animate-pulse">
//     🌹
//   </div>

//   <div className="relative z-10 max-w-7xl mx-auto">

//     {/* Heading */}
//     <div className="text-center mb-20">

//       <div className="inline-block bg-white/70 backdrop-blur-md px-8 py-3 rounded-full shadow-xl mb-8">
//         <p className="uppercase tracking-[4px] font-semibold text-rose-500">
//           SSG ❤️ HSG
//         </p>
//       </div>

//       <h2 className="text-5xl md:text-7xl font-black text-rose-600 leading-tight">
//         Our Wedding
//         <br />
//         Memory Film 🎥
//       </h2>

//       <p className="mt-8 text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
//         Every smile, every ritual, every moment...
//         <br />
//         became the most beautiful memory of our forever ❤️
//       </p>

//     </div>

//     {/* Video Card */}
//     <div className="relative group">

//       {/* Glow */}
//       <div className="absolute -inset-3 bg-gradient-to-r from-rose-400 via-pink-400 to-red-400 rounded-[45px] blur-xl opacity-40 group-hover:opacity-70 transition duration-700"></div>

//       <div className="relative bg-white/70 backdrop-blur-xl border border-white/50 rounded-[45px] p-5 shadow-[0_20px_80px_rgba(255,0,85,0.25)] overflow-hidden">

//         {/* Video */}
//         <div className="overflow-hidden rounded-[35px]">

//           <iframe
//             className="w-full h-[250px] md:h-[700px] rounded-[35px]"
//             src="https://www.youtube.com/embed/nfJ8I8amsOM?autoplay=0"
//             title="Wedding Memory Video"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>

//         </div>

//         {/* Bottom Text */}
//         <div className="text-center mt-10">

//           <h3 className="text-3xl md:text-4xl font-black text-rose-500">
//             29 May 2023 💍
//           </h3>

//           <p className="mt-5 text-lg md:text-xl text-gray-600 leading-9 max-w-3xl mx-auto">
//             The day HSG became forever yours
//             <br />
//             and SSG became forever mine ❤️
//           </p>

//         </div>

//       </div>

//     </div>

//     {/* Bottom Romantic Line */}
//     <div className="text-center mt-20">

//       <p className="text-3xl md:text-5xl font-black text-rose-500 leading-relaxed">
//         Saslu 🐰 + Sasli 🐰
//         <br />
//         Forever & Always ✨
//       </p>

//     </div>

//   </div>

// </section>

//       {/* Footer */}
//       <footer className="relative overflow-hidden bg-rose-500 py-14 text-center text-white">
//         <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_white,_transparent_30%)]"></div>

//         <div className="relative z-10 px-4">
//           <h2 className="text-3xl md:text-5xl font-bold">
//             SSG ❤️ HSG
//           </h2>

//           <p className="mt-4 text-lg md:text-xl text-rose-100">
//             My Saslu & Sasli Forever 🐰✨
//           </p>

//           <div className="mt-8 flex justify-center gap-4 text-3xl">
//             <span>💖</span>
//             <span>🌹</span>
//             <span>💍</span>
//             <span>✨</span>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
