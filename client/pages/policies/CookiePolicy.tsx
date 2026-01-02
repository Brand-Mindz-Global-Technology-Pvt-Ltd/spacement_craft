
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const CookiePolicy = () => {
    return (
        <div className="min-h-screen bg-black text-white font-inter">
            <Navbar />

            {/* Banner Section */}
            <div className="relative w-full h-[40vh] min-h-[300px] flex items-end justify-start overflow-hidden">
                <img
                    src="/assets/23326.jpg"
                    alt="Cookie Policy Banner"
                    className="absolute inset-0 w-full h-full object-cover object-bottom z-0"
                />

                <div className="relative z-20 px-6 md:px-12 lg:px-20 pb-10 w-full max-w-7xl mx-auto">
                    <h1 className="text-3xl md:text-5xl font-reem text-white mb-2">
                        Cookie Policy
                    </h1>
                    <nav className="flex items-center space-x-2 text-white/60 text-sm">
                        <a href="/" className="hover:text-white transition-colors">Home</a>
                        <span>/</span>
                        <span className="text-white">Cookie Policy</span>
                    </nav>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
                <div className="prose prose-invert max-w-none">
                    <section className="mb-8">
                        <h2 className="text-2xl font-reem text-white mb-4">What Are Cookies</h2>
                        <p className="text-white/80 leading-relaxed">
                            Cookies are small text files placed on your device to enhance website functionality and analytics.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-reem text-white mb-4">Types of Cookies Used</h2>
                        <ul className="list-disc pl-5 space-y-2 text-white/80">
                            <li><strong className="text-white">Essential Cookies:</strong> Required for website operation</li>
                            <li><strong className="text-white">Analytics Cookies:</strong> Understand visitor behavior (aggregated, non-intrusive)</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-reem text-white mb-4">Cookie Consent</h2>
                        <p className="text-white/80 leading-relaxed">
                            By continuing to use this website, you consent to the use of cookies as described.
                            Future cookie banners and preference controls may be implemented for enhanced compliance.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-reem text-white mb-4">Managing Cookies</h2>
                        <p className="text-white/80 leading-relaxed">
                            You may disable cookies through your browser settings, though some features may not function correctly.
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default CookiePolicy;
