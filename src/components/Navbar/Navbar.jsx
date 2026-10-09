
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import Container from "../Layout/Container";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [navScroll, setNavScroll] = useState(false);

  useEffect(() => {
    const scrollFunction = () => {
      setNavScroll(window.scrollY > 200);
    };

    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  // Mobile menu open thakle background scroll off
  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  const closeMenu = () => setShow(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Service", href: "#service" },
    { name: "Pages", href: "#pages" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <>
      <header
        className={`${
          navScroll
            ? "fixed bg-secondary shadow-lg"
            : "absolute bg-transparent"
        } top-0 left-0 w-full py-4 md:py-6 z-[9999] transition-all duration-300`}
      >
        <Container>
          {/* Navbar: Logo left, Menu right */}
          <div className="flex w-full items-center justify-between gap-4">
            {/* Logo */}
            <a href="#home" className="shrink-0" aria-label="Innovate Home">
              <img
                className="h-8 sm:h-9 md:h-10 w-auto"
                src={logo}
                alt="Innovate logo"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center">
              <ul className="flex items-center font-primary font-medium text-white text-base lg:text-lg gap-x-5 lg:gap-x-8">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              <a
                href="#login"
                className="font-medium text-white hover:text-primary transition-colors"
              >
                Login
              </a>

              <a
                href="#register"
                className="bg-primary py-3 px-5 lg:px-8 font-medium rounded-md text-secondary hover:opacity-90 transition-opacity"
              >
                Register
              </a>
            </div>

            {/* Mobile Menu Button - RIGHT SIDE */}
            <button
              type="button"
              onClick={() => setShow(true)}
              aria-label="Open navigation menu"
              aria-expanded={show}
              className="md:hidden ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-white text-2xl hover:bg-white/10 transition-colors"
            >
              <FaBars />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Full-Screen Menu */}
      {show && (
        <div className="fixed inset-0 z-[10000] flex min-h-screen flex-col items-center justify-center bg-secondary px-6 text-center">
          {/* Close Button */}
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-md text-3xl text-white hover:bg-white/10 transition-colors"
          >
            <RxCross2 />
          </button>

          {/* Mobile Links */}
          <nav>
            <ul className="flex flex-col items-center gap-6 font-primary font-medium text-lg text-white">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Actions */}
          <div className="mt-8 flex flex-col items-center gap-5">
            <a
              href="#login"
              onClick={closeMenu}
              className="font-medium text-lg text-white hover:text-primary"
            >
              Login
            </a>

            <a
              href="#register"
              onClick={closeMenu}
              className="rounded-md bg-primary px-8 py-3 font-medium text-secondary hover:opacity-90"
            >
              Register
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

