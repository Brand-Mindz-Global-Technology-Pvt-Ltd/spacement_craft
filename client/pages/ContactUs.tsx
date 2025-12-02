import React from "react";
import Navbar from "../components/Navbar";
import ContactHero from "../components/contact/ContactHero";
import ContactInfoSection from "../components/contact/ContactInfoSection";
import ContactMap from "../components/contact/ContactMap";
import ContactForm from "../components/contact/ContactForm";
import VisionFooter from "../components/vision/VisionFooter";
import { contactSections } from "../data/contactData";

const ContactUs: React.FC = () => (
    <div className="min-h-screen w-full bg-black text-white">
        <Navbar />

        <ContactHero />

        {/* Contact Info Sections */}
        <div className="w-full bg-black py-12 px-4 md:px-0">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
                {contactSections.map((section, index) => (
                    <ContactInfoSection
                        key={index}
                        title={section.title}
                        items={section.items}
                    />
                ))}
            </div>
        </div>

        <ContactMap />

        <ContactForm />

        <VisionFooter />
    </div>
);

export default ContactUs;
