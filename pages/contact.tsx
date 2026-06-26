import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { contacts } from "../Data/Data";
import { useForm, ValidationError } from "@formspree/react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillMail,
  AiFillPhone,
  AiFillEnvironment,
} from "react-icons/ai";

const OrbitingCubes = dynamic(() => import("../components/3d/OrbitingCubes"), {
  ssr: false,
});

const iconMap: { [key: string]: JSX.Element } = {
  Address: <AiFillEnvironment className="text-2xl" />,
  Phone: <AiFillPhone className="text-2xl" />,
  Email: <AiFillMail className="text-2xl" />,
};

export default function Contact() {
  const [state, handleSubmit] = useForm("xvzaenwg");
  const socialClassNames = "text-3xl cursor-pointer text-White hover:text-Orange transition-colors";

  return (
    <>
      <Head>
        <title>Kayode | Contact</title>
        <meta name="description" content="Get in touch with Kayode" />
      </Head>
      <Navbar />
      
      <main className="relative min-h-screen bg-Black overflow-hidden">
        <OrbitingCubes />
        
        <section className="relative z-10 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 pt-12"
            >
              <span className="text-Orange text-sm uppercase tracking-widest font-semibold">
                — Get In Touch
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-White mt-4 uppercase">
                Contact Me
              </h1>
              <p className="text-WhiteGray mt-6 max-w-2xl mx-auto leading-relaxed">
                If you&apos;re looking for a skilled frontend developer to help bring
                your web application ideas to life, feel free to contact me. Let&apos;s
                discuss how I can contribute to your team.
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-12 items-stretch justify-center">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:w-1/2 max-w-md"
              >
                <h2 className="text-2xl font-bold text-White mb-8 uppercase">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  {contacts.map((contact, index) => (
                    <motion.div
                      key={contact.id}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-Blur backdrop-blur-sm rounded-lg border border-WhiteGray/10 hover:border-Orange/50 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-Orange/10 rounded-full flex items-center justify-center text-Orange">
                        {iconMap[contact.title]}
                      </div>
                      <div>
                        <h3 className="text-White font-semibold">{contact.title}</h3>
                        <p className="text-WhiteGray text-sm">{contact.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links in Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-8"
                >
                  <h3 className="text-White font-semibold mb-4">Follow Me</h3>
                  <div className="flex gap-4">
                    <Link
                      href="https://www.github.com"
                      target="_blank"
                      className="w-12 h-12 bg-Blur backdrop-blur-sm rounded-full flex items-center justify-center text-White hover:bg-Orange hover:text-Black transition-all duration-300 border border-WhiteGray/10"
                    >
                      <AiFillGithub className="text-xl" />
                    </Link>
                    <Link
                      href="https://www.instagram.com"
                      target="_blank"
                      className="w-12 h-12 bg-Blur backdrop-blur-sm rounded-full flex items-center justify-center text-White hover:bg-Orange hover:text-Black transition-all duration-300 border border-WhiteGray/10"
                    >
                      <AiFillInstagram className="text-xl" />
                    </Link>
                    <Link
                      href="https://www.twitter.com"
                      target="_blank"
                      className="w-12 h-12 bg-Blur backdrop-blur-sm rounded-full flex items-center justify-center text-White hover:bg-Orange hover:text-Black transition-all duration-300 border border-WhiteGray/10"
                    >
                      <AiFillTwitterCircle className="text-xl" />
                    </Link>
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:w-1/2 max-w-md w-full"
              >
                <div className="bg-Blur backdrop-blur-sm p-8 rounded-xl border border-WhiteGray/10">
                  <h2 className="text-2xl font-bold text-White mb-8 uppercase text-center">
                    Send a Message
                  </h2>

                  {state.succeeded ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 bg-Orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <AiFillMail className="text-3xl text-Orange" />
                      </div>
                      <h3 className="text-xl font-bold text-White mb-2">Thank You!</h3>
                      <p className="text-WhiteGray">
                        I&apos;ll get back to you within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Your Name"
                          className="w-full bg-transparent border-b-2 border-WhiteGray/30 text-White py-3 px-2 focus:outline-none focus:border-Orange transition-colors placeholder:text-WhiteGray/50"
                        />
                      </div>

                      <div>
                        <input
                          type="text"
                          name="phone"
                          placeholder="Your Phone"
                          className="w-full bg-transparent border-b-2 border-WhiteGray/30 text-White py-3 px-2 focus:outline-none focus:border-Orange transition-colors placeholder:text-WhiteGray/50"
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="Your Email"
                          className="w-full bg-transparent border-b-2 border-WhiteGray/30 text-White py-3 px-2 focus:outline-none focus:border-Orange transition-colors placeholder:text-WhiteGray/50"
                        />
                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      <div>
                        <textarea
                          name="message"
                          required
                          placeholder="Your Message"
                          rows={4}
                          className="w-full bg-transparent border-b-2 border-WhiteGray/30 text-White py-3 px-2 focus:outline-none focus:border-Orange transition-colors placeholder:text-WhiteGray/50 resize-none"
                        />
                        <ValidationError
                          prefix="Message"
                          field="message"
                          errors={state.errors}
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={state.submitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 bg-Orange text-Black font-bold uppercase tracking-wide hover:bg-Orange/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {state.submitting ? "Sending..." : "Send Message"}
                      </motion.button>

                      <p className="text-center text-WhiteGray text-xs">
                        I usually respond within 24 hours.
                      </p>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Social Links - Sidebar */}
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
            04
          </div>
        </section>
      </main>
    </>
  );
}
