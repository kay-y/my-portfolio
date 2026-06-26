import dynamic from "next/dynamic";
import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Link from "next/link";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

const FloatingGeometry = dynamic(() => import("../components/3d/FloatingGeometry"), {
  ssr: false,
});

export default function Home() {
  const socialClassNames = "text-3xl cursor-pointer text-White hover:text-Orange transition-colors";

  return (
    <>
      <Head>
        <title>Kayode | Frontend Developer</title>
        <meta name="description" content="Frontend Developer portfolio showcasing creative web development" />
      </Head>
      <Navbar />
      
      <main className="relative min-h-screen bg-Black overflow-hidden">
        <FloatingGeometry />
        
        <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center gap-4 mb-4"
            >
              <div className="h-[2px] w-16 sm:w-24 bg-Orange" />
              <span className="text-WhiteGray text-sm sm:text-lg uppercase tracking-widest font-semibold">
                Hi, I&apos;m
              </span>
              <div className="h-[2px] w-16 sm:w-24 bg-Orange" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-White mb-6"
            >
              Coder<span className="text-Orange">Kay</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-8"
            >
              <p className="text-xl sm:text-2xl md:text-3xl text-WhiteGray uppercase tracking-wide">
                Frontend Developer
              </p>
              <p className="text-sm sm:text-base text-WhiteGray/70 mt-2 max-w-xl mx-auto">
                Crafting beautiful, interactive web experiences with modern technologies
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/portfolio"
                className="px-8 py-4 bg-Orange text-Black font-semibold uppercase tracking-wide rounded-sm hover:bg-Orange/90 transition-all duration-300 hover:scale-105"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border border-White text-White font-semibold uppercase tracking-wide rounded-sm hover:bg-White hover:text-Black transition-all duration-300"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="fixed bottom-12 left-6 hidden md:flex items-center flex-col gap-4"
          >
            <Link href="https://www.github.com" target="_blank">
              <AiFillGithub className={socialClassNames} />
            </Link>
            <Link href="https://www.instagram.com" target="_blank">
              <AiFillInstagram className={socialClassNames} />
            </Link>
            <Link href="https://www.twitter.com" target="_blank">
              <AiFillTwitterCircle className={socialClassNames} />
            </Link>
            <div className="w-[1px] h-20 bg-WhiteGray/50 mt-2" />
          </motion.div>

          {/* Page Number */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="fixed bottom-14 right-6 text-2xl xs:text-3xl text-Orange font-bold"
          >
            01
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-6 h-10 border-2 border-WhiteGray/50 rounded-full flex justify-center pt-2"
            >
              <motion.div className="w-1 h-2 bg-Orange rounded-full" />
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
