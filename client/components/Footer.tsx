import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => (
    <footer className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
            <img
                src="/assets/Footer.png"
                alt="Star field footer background"
                className="h-full w-full object-cover"
            />
        </div>
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto w-full max-w-6xl px-6 lg:py-5 lg:pb-6 py-9 md:py-20">
            <div className="mx-auto mb-10 max-w-3xl text-center">
                <img
                    src="/assets/01-logo.jpg"
                    alt="Spacemancraft"
                    className="mx-auto mb-4 lg:h-16 h-14 w-auto"
                />
                <p className="text-sm leading-relaxed text-white/80">
                    A revolutionary blend of spacecraft and passenger vehicle, powered by
                    cost‑effective solar electric propulsion. It paves the way for human
                    exploration across Earth’s orbit and beyond, making space travel more
                    affordable and accessible than ever before.
                </p>
            </div>

            <div className="grid gap-10 md:grid-cols-3">
                <div>
                    <h3 className="mb-4 text-base font-semibold">Navigate</h3>
                    <ul className="space-y-2 text-sm text-white/85">
                        <li>
                            <a href="/" className="hover:text-white">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/product" className="hover:text-white">
                                Product
                            </a>
                        </li>
                        <li>
                            <a href="/solution" className="hover:text-white">
                                Solution
                            </a>
                        </li>
                        <li>
                            <a href="/mission" className="hover:text-white">
                                Mission
                            </a>
                        </li>
                        <li>
                            <a href="/vission" className="hover:text-white">
                                Vision
                            </a>
                        </li>
                        <li>
                            <a href="/blog" className="hover:text-white">
                                Blog
                            </a>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-white">
                                About us
                            </Link>
                        </li>
                        <li>
                            <a href="/contactus" className="hover:text-white">
                                Contact us
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-4 text-base font-semibold">Reach Out</h3>
                    <ul className="space-y-3 text-sm text-white/85">
                        <li className="flex items-start gap-3">
                            <MapPin className="mt-0.5 h-4 w-4 text-white/70" />
                            <span>Tamil Nadu, India</span>
                        </li>
                        <li className="flex items-start gap-3 break-all">
                            <Mail className="mt-0.5 h-4 w-4 text-white/70" />
                            <a
                                href="mailto:spacemancraftindia@gmail.com"
                                className="hover:text-white"
                            >
                                spacemancraftindia@gmail.com
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Instagram className="h-4 w-4 text-white/70" />
                            <a
                                href="https://www.instagram.com/spacemancraft.in?igsh=cmN5NWJrdzM2Y2hv"
                                className="hover:text-white"
                                target="_blank"
                                rel="noopener noreferrer">
                                Instagram
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Twitter className="h-4 w-4 text-white/70" />
                            <a
                                href="https://www.threads.com/@spacemancraft.in"
                                className="hover:text-white"
                                target="_blank"
                                rel="noopener noreferrer">
                                Twitter
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Linkedin className="h-4 w-4 text-white/70" />
                            <a
                                href="https://www.linkedin.com/company/spaceman-craft/"
                                className="hover:text-white"
                                target="_blank"
                                rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-4 text-base font-semibold">Enquire Now</h3>
                    <button
                        className="rounded-lg bg-gradient-to-b from-[#0BFFD3] via-cyan-400 to-[#316BDE] lg:px-4 lg:py-2 px-3 py-2 lg:text-[15px] font-normal text-white shadow-lg transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(56,189,248,0.45)]"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                        Discover Our Thruster
                    </button>
                </div>
            </div>

            <div className="mt-12 border-t border-white/20 pt-4 text-xs text-white/70 md:flex md:items-center md:justify-between">
                <p>
                    Copyright © 2025 Spacemancraft Made with <span role="img" aria-label="love">❤️</span> by{" "}
                    <a
                        href="https://www.brandmindz.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" hover:text-white"
                    >
                        Brand Mindz
                    </a>{" "}
                    | All rights reserved
                </p>
                <div className="mt-3 flex gap-4 md:mt-0">
                    <a href="#" className="hover:text-white">
                        Terms & Conditions
                    </a>
                    <a href="#" className="hover:text-white">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:text-white">
                        Refund Policy
                    </a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
