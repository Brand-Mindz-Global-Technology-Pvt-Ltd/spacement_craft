
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-black text-white font-inter">
            <Navbar />

            {/* Banner Section */}
            <div className="relative w-full h-[40vh] min-h-[300px] flex items-end justify-start overflow-hidden">
                <img
                    src="/assets/23326.jpg"
                    alt="Privacy Policy Banner"
                    className="absolute inset-0 w-full h-full object-cover object-bottom z-0"
                />

                <div className="relative z-20 px-6 md:px-12 lg:px-20 pb-10 w-full max-w-7xl mx-auto">
                    <h1 className="text-3xl md:text-5xl font-reem text-white mb-2">
                        Privacy Policy
                    </h1>
                    <nav className="flex items-center space-x-2 text-white/60 text-sm">
                        <a href="/" className="hover:text-white transition-colors">Home</a>
                        <span>/</span>
                        <span className="text-white">Privacy Policy</span>
                    </nav>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
                <div className="prose prose-invert max-w-none">
                    <p className="text-white/80 leading-relaxed mb-8">
                        (DPDP ACT 2023 + GDPR-ALIGNED)
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-reem text-white mb-4">Data Fiduciary Details</h2>
                        <p className="text-white/80 leading-relaxed">
                            <strong className="text-white">Legal Name:</strong> Spaceman Craft Private Limited<br />
                            <strong className="text-white">Registered Address:</strong><br />
                            17/60-C, Main Road, Vivekananthapuram North Kundal,<br />
                            Kanyakumari, Tamil Nadu, India – 629702
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-reem text-white mb-4">Personal Data We Collect</h2>
                        <p className="text-white/80 leading-relaxed mb-2">We may collect:</p>
                        <ul className="list-disc pl-5 space-y-2 text-white/80">
                            <li>Name, email address, phone number</li>
                            <li>Resume/CV and professional details (career applications)</li>
                            <li>Messages submitted via contact forms</li>
                            <li>Technical data (IP address, browser type, device info)</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-reem text-white mb-4">Purpose of Data Collection</h2>
                        <p className="text-white/80 leading-relaxed mb-2">Data is collected strictly for:</p>
                        <ul className="list-disc pl-5 space-y-2 text-white/80">
                            <li>Responding to inquiries and collaboration requests</li>
                            <li>Recruitment and talent evaluation</li>
                            <li>Website analytics and performance improvement</li>
                            <li>Legal and compliance obligations</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-reem text-white mb-4">Legal Basis for Processing</h2>
                        <p className="text-white/80 leading-relaxed mb-2">Processing is based on:</p>
                        <ul className="list-disc pl-5 space-y-2 text-white/80">
                            <li>User consent (DPDP Act, GDPR-aligned)</li>
                            <li>Legitimate interests (professional communication)</li>
                            <li>Legal obligations where applicable</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-reem text-white mb-4">Data Minimization & Retention</h2>
                        <p className="text-white/80 leading-relaxed">
                            We collect only necessary data and retain it only for as long as required for the stated purpose or legal compliance.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-reem text-white mb-4">Data Sharing & Disclosure</h2>
                        <p className="text-white/80 leading-relaxed mb-2">We do not sell personal data. Limited sharing may occur with:</p>
                        <ul className="list-disc pl-5 space-y-2 text-white/80">
                            <li>IT service providers (hosting, email, analytics)</li>
                            <li>Legal or regulatory authorities when required by law</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-reem text-white mb-4">Cross-Border Data Transfers</h2>
                        <p className="text-white/80 leading-relaxed">
                            Currently, data is primarily processed in India. If transferred internationally in the future, adequate safeguards consistent with GDPR principles will be applied.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-reem text-white mb-4">User Rights (DPDP Act 2023)</h2>
                        <p className="text-white/80 leading-relaxed mb-2">Users have the right to:</p>
                        <ul className="list-disc pl-5 space-y-2 text-white/80">
                            <li>Access their personal data</li>
                            <li>Request correction or erasure</li>
                            <li>Withdraw consent</li>
                            <li>File a grievance (see Grievance Policy)</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-reem text-white mb-4">Data Security</h2>
                        <p className="text-white/80 leading-relaxed">
                            We implement reasonable administrative and technical safeguards. However, no digital system is completely secure.
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
