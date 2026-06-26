import { navLinks } from "../Data/Data";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";
import { AiFillGithub, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [navScroll, setNavScroll] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    function scrollActive() {
      setNavScroll(window.scrollY > 20);
    }
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, []);

  const menuVariants = {
    hidden: {
      clipPath: "circle(0% at calc(100% - 40px) 40px)",
      transition: { duration: 0.5, ease: "easeInOut" }
    },
    visible: {
      clipPath: "circle(150% at calc(100% - 40px) 40px)",
      transition: { duration: 0.7, ease: "easeInOut" }
    }
  };

  const navLinkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + i * 0.1, duration: 0.4 }
    })
  };

  const isActive = (path: string) =>
    pathname === path ? "text-Orange" : "text-WhiteGray hover:text-Orange";

  const socialClassNames = "text-3xl cursor-pointer text-White hover:text-Orange transition-colors";

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        navScroll ? "bg-Black/80 backdrop-blur-lg shadow-lg" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="relative group">
            <span className="text-2xl sm:text-3xl font-bold text-White">
              Kay<span className="text-Orange">ode</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-Orange transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((navLink: { path: string; label: string }) => (
              <Link
                key={navLink.path}
                href={navLink.path}
                className={`relative text-sm uppercase font-medium tracking-wide transition-colors duration-300 ${isActive(
                  navLink.path
                )}`}
              >
                {navLink.label}
                {pathname === navLink.path && (
                  <motion.span
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-Orange"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
            onClick={() => setShowMenu(!showMenu)}
          >
            <AnimatePresence mode="wait">
              {showMenu ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiX className="text-White w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiOutlineMenuAlt4 className="text-White w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 bg-Black/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((navLink: { path: string; label: string }, i: number) => (
                <motion.div
                  key={navLink.label}
                  custom={i}
                  variants={navLinkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={navLink.path}
                    className={`text-4xl sm:text-5xl font-bold uppercase ${
                      pathname === navLink.path ? "text-Orange" : "text-White"
                    }`}
                    onClick={() => setShowMenu(false)}
                  >
                    {navLink.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="flex gap-6 mt-8"
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
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
