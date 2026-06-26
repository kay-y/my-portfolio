import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { projects, services, countUpItems } from "../Data/Data";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import MyCountUp from "../components/CountUp";
import { useInView } from "react-intersection-observer";

const WaveGrid = dynamic(() => import("../components/3d/WaveGrid"), {
  ssr: false,
});

export default function Portfolio() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const socialClassNames = "text-3xl cursor-pointer text-White hover:text-Orange transition-colors";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Head>
        <title>Kayode | Portfolio</title>
        <meta name="description" content="Portfolio showcasing my best work" />
      </Head>
      <Navbar />
      
      <main className="relative min-h-screen bg-Black overflow-hidden">
        <WaveGrid />
        
        <section className="relative z-10 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-7xl mx-auto">
            {/* Portfolio Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 pt-12"
            >
              <span className="text-Orange text-sm uppercase tracking-widest font-semibold">
                — Portfolio
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-White mt-4 uppercase">
                My Masterpiece Collections
              </h1>
              <p className="text-WhiteGray mt-6 max-w-2xl mx-auto leading-relaxed">
                I specialize in developing custom web applications that cater to
                diverse business needs, using the latest technologies to deliver
                exceptional user experiences.
              </p>
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-Blur backdrop-blur-sm rounded-xl overflow-hidden border border-WhiteGray/10 hover:border-Orange/50 transition-all duration-300"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.img}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-Black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <Link
                        href="#"
                        className="p-3 bg-Orange rounded-full hover:scale-110 transition-transform"
                      >
                        <AiFillGithub className="text-2xl text-Black" />
                      </Link>
                      <Link
                        href="#"
                        className="p-3 bg-White rounded-full hover:scale-110 transition-transform"
                      >
                        <AiFillEye className="text-2xl text-Black" />
                      </Link>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-White font-semibold text-lg mb-3">
                      {project.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 bg-Orange/10 text-Orange text-xs rounded-full border border-Orange/20"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Services Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-24"
            >
              <div className="text-center mb-12">
                <span className="text-Orange text-sm uppercase tracking-widest font-semibold">
                  — Services
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-White mt-4 uppercase">
                  What I Do
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-Blur backdrop-blur-sm p-6 rounded-xl border border-WhiteGray/10 text-center hover:border-Orange/50 transition-all duration-300 group"
                  >
                    <div className="text-4xl text-Orange mb-4 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="text-White font-semibold mb-2">{service.title}</h3>
                    <p className="text-WhiteGray text-sm">
                      {service.finished}+ Projects Completed
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Count Up Section */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-Blur backdrop-blur-sm rounded-xl p-8 border border-WhiteGray/10"
            >
              {countUpItems.map((item) => (
                <div key={item.id} className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-Orange mb-2">
                    {inView && <MyCountUp start={0} end={item.number} duration={3} />}+
                  </div>
                  <div className="text-WhiteGray text-sm uppercase tracking-wide">
                    {item.text}
                  </div>
                </div>
              ))}
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
            03
          </div>
        </section>
      </main>
    </>
  );
}
