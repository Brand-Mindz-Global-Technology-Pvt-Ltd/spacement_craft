import React from 'react';

const ContactForm: React.FC = () => {
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
                    <div className="absolute inset-0 bg-black/40" />

                    {/* Glassmorphism Form */}
                    <div className="relative z-10 flex justify-start h-full">
                        <div className="flex-1 max-w-lg bg-white/10 backdrop-blur-lg p-10 md:p-14 text-white shadow-lg flex flex-col justify-center">
                            <h2 className="text-3xl font-bold mb-4">GET IN TOUCH</h2>
                            <p className="mb-8 text-white/80">
                                Need expert yacht maintenance and services? Fill out the form below, and our team will get back to you promptly
                            </p>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-transparent border-b border-white/40 focus:border-cyan-400 outline-none py-2 text-sm"
                                        placeholder="Your email"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm mb-2">Your message</label>
                                    <textarea
                                        rows={4}
                                        className="w-full bg-transparent border-b border-white/40 focus:border-cyan-400 outline-none py-2 text-sm resize-none"
                                        placeholder="Type your message"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="px-6 py-2 border border-white rounded-md hover:bg-cyan-500 hover:text-black transition"
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
