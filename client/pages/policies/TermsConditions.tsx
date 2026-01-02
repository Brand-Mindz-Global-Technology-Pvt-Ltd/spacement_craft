
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const TermsConditions = () => {
    return (
        <div className="min-h-screen bg-black text-white font-inter">
            <Navbar />

            {/* Banner Section */}
            <div className="relative w-full h-[40vh] min-h-[300px] flex items-end justify-start overflow-hidden">
                <img
                    src="/assets/23326.jpg"
                    alt="Terms & Conditions Banner"
                    className="absolute inset-0 w-full h-full object-cover object-bottom z-0"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" /> */}

                <div className="relative z-20 px-6 md:px-12 lg:px-20 pb-10 w-full max-w-7xl mx-auto">
                    <h1 className="text-3xl md:text-5xl font-reem text-white mb-2">
                        Terms & Conditions
                    </h1>
                    <nav className="flex items-center space-x-2 text-white/60 text-sm">
                        <a href="/" className="hover:text-white transition-colors">Home</a>
                        <span>/</span>
                        <span className="text-white">Terms & Conditions</span>
                    </nav>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
                <div className="prose prose-invert max-w-none">
                    <section className="mb-8">
                        <h2 className="text-2xl font-reem text-white mb-4">Acceptance of Terms</h2>
                        <p className="text-white/80 leading-relaxed">
                            By accessing or using this website, you agree to be bound by these Terms & Conditions, our Privacy Policy, Cookie Policy, and other applicable policies referenced herein. If you do not agree, you must discontinue use immediately.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-reem text-white mb-4">About the Company</h2>
                        <p className="text-white/80 leading-relaxed">
                            Spaceman Craft Private Limited (“Spaceman Craft”, “we”, “us”, “our”) is a private limited company incorporated in India, engaged in aerospace research, space propulsion technology development, and related engineering activities.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-reem text-white mb-4">Purpose of the Website</h2>
                        <p className="text-white/80 leading-relaxed mb-2">This website is intended to:</p>
                        <ul className="list-disc pl-5 space-y-2 text-white/80">
                            <li>Provide information about our research, technology initiatives, and vision</li>
                            <li>Facilitate professional inquiries, collaborations, and career opportunities</li>
                            <li>Share updates related to space technology and innovation</li>
                        </ul>
                        <p className="text-white/80 leading-relaxed mt-2">
                            No content on this website constitutes a binding offer, solicitation, or commercial commitment.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-reem text-white mb-4">Eligibility & User Conduct</h2>
                        <p className="text-white/80 leading-relaxed mb-2">Users must:</p>
                        <ul className="list-disc pl-5 space-y-2 text-white/80">
                            <li>Use the website only for lawful purposes</li>
                            <li>Not attempt unauthorized access, scraping, or reverse engineering</li>
                            <li>Not upload malicious code, misleading information, or confidential third-party data</li>
                        </ul>
                        <p className="text-white/80 leading-relaxed mt-2">
                            We reserve the right to restrict access for violations.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-reem text-white mb-4">Intellectual Property Rights</h2>
                        <p className="text-white/80 leading-relaxed">
                            All content, including text, graphics, logos, designs, research descriptions, and trademarks, is owned by or licensed to Spaceman Craft. No content may be reproduced, modified, or distributed without prior written consent.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-reem text-white mb-4">No Professional or Technical Advice</h2>
                        <p className="text-white/80 leading-relaxed">
                            Information on this website is provided for general informational purposes only and does not constitute engineering, legal, financial, or scientific advice.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-reem text-white mb-4">Limitation of Liability</h2>
                        <p className="text-white/80 leading-relaxed mb-2">To the maximum extent permitted under Indian law:</p>
                        <ul className="list-disc pl-5 space-y-2 text-white/80">
                            <li>We are not liable for indirect, incidental, or consequential damages</li>
                            <li>We do not guarantee uninterrupted or error-free access</li>
                            <li>Use of the website is at your own risk</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-reem text-white mb-4">Indemnity</h2>
                        <p className="text-white/80 leading-relaxed">
                            You agree to indemnify and hold Spaceman Craft harmless from claims arising from your misuse of the website or violation of these Terms.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-reem text-white mb-4">Governing Law & Dispute Resolution</h2>
                        <p className="text-white/80 leading-relaxed">
                            These Terms are governed by the laws of India. Any disputes shall first be resolved through arbitration under the Arbitration and Conciliation Act, 1996, seated in Tamil Nadu, India, failing which courts in Tamil Nadu shall have jurisdiction.
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default TermsConditions;
