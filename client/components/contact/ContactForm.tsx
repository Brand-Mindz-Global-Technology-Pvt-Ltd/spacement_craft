import React, { useState } from 'react';
import { toast } from 'sonner';

const ContactForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !message) {
            toast.error("Please fill in all fields");
            return;
        }

        const subject = "New Contact Form Submission";
        const body = `From: ${email}\n\nMessage:\n${message}`;
        const mailtoLink = `mailto:spacemancraftindia@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;

        toast.success("Message shared successfully!");

        // Reset form
        setEmail('');
        setMessage('');
    };

    return (
        <div className="relative flex">
            <div className="absolute inset-0 " />

            <div className="relative w-full flex">
                <div className="relative w-full max-w-9xl mx-auto h-[500px] md:h-[600px]">
                    {/* Background image */}
                    <img
                        src="/assets/messagebg.png"
                        alt="Rocket launch"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Dark overlay for readability */}
                    <div className="absolute inset-0 bg-black/0" />

                    {/* Glassmorphism Form */}
                    <div className="relative z-10 flex justify-start h-full">
                        <div className="flex-1 max-w-2xl bg-black/50 backdrop-blur-lg p-10 md:p-14 text-white shadow-lg flex flex-col justify-center">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-reem font-light  tracking-wide mb-4">GET IN TOUCH</h2>
                            <p className="mb-8 text-sm md:text-base lg:text-sm text-white/80">
                                Need expert yacht maintenance and services? Fill out the form below, and our team will get back to you promptly
                            </p>
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block text-xs md:text-sm mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-transparent border-b border-white/40 focus:border-cyan-400 outline-none py-2 text-xs md:text-sm"
                                        placeholder="Your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs md:text-sm mb-2">Your message</label>
                                    <textarea
                                        rows={4}
                                        className="w-full bg-transparent border-b border-white/40 focus:border-cyan-400 outline-none py-2 text-xs md:text-sm resize-none"
                                        placeholder="Type your message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="px-6 py-2 border border-white rounded-md hover:bg-cyan-500 hover:text-black transition text-sm md:text-base"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
