import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { skills } from "../Data/Data";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

const ParticleField = dynamic(() => import("../components/3d/ParticleField"), {
  ssr: false,
});

export default function About() {
  const socialClassNames = "text-3xl cursor-pointer text-White hover:text-Orange transition-colors";

  return (
    <>
      <Head>
        <title>Kayode | About</title>
        <meta name="description" content="Learn more about Kayode - Frontend Developer" />
      </Head>
      <Navbar />
      
      <main className="relative min-h-screen bg-Black overflow-hidden">
        <ParticleField />
        
        <section className="relative z-10 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-20 pt-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-Orange/20 to-transparent rounded-xl blur-xl" />
                <Image
                  src="/kay.png"
                  width={300}
                  height={300}
                  alt="Kayode"
                  className="relative rounded-xl shadow-2xl border border-WhiteGray/20"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:w-1/2 max-w-xl text-center lg:text-left"
              >
                <span className="text-Orange text-sm uppercase tracking-widest font-semibold">
                  — Introduction
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-White mt-4 uppercase leading-tight">
                  Hi, I&apos;m Kay,<br />
                  <span className="text-Orange">A Passionate</span> Frontend Developer
                </h1>
                <p className="text-WhiteGray mt-6 leading-relaxed">
                  I am a passionate frontend developer with a creative eye for
                  design and a strong focus on delivering elegant and intuitive
                  interfaces. I specialize in creating modern, responsive web
                  applications using React, Next.js, and TypeScript. Excited to
                  collaborate on new projects!
                </p>
                <div className="flex gap-6 mt-8 justify-center lg:justify-start">
                  <Link
                    href="/contact"
                    className="px-6 py-3 bg-Orange text-Black font-semibold uppercase text-sm tracking-wide hover:bg-Orange/90 transition-all duration-300 hover:scale-105"
                  >
                    Contact Me
                  </Link>
                  <a
                    href="/pdf/frontend-resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-Orange text-Orange font-semibold uppercase text-sm tracking-wide hover:bg-Orange hover:text-Black transition-all duration-300"
                  >
                    Resume
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <span className="text-Orange text-sm uppercase tracking-widest font-semibold">
                  — My Expertise
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-White mt-4 uppercase">
                  Technical Skills
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="bg-Blur backdrop-blur-sm p-6 rounded-lg border border-WhiteGray/10"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-White font-semibold">{skill.name}</span>
                      <span className="text-Orange font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-WhiteGray/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                        className="h-full bg-gradient-to-r from-Orange to-Orange/70 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="fixed bottom-12 left-6 hidden md:flex items-center flex-col gap-4">
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
          </div>

          {/* Page Number */}
          <div className="fixed bottom-14 right-6 text-2xl xs:text-3xl text-Orange font-bold">
            02
          </div>
        </section>
      </main>
    </>
  );
}
