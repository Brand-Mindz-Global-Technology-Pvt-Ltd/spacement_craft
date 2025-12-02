import React from 'react';

const ContactMap: React.FC = () => {
    return (
        <div className="pb-12 md:px-0">
            <div className="max-w-6xl mx-auto rounded-lg overflow-hidden shadow-lg border border-white/10">
                <div className="w-full h-[320px] md:h-[380px] relative">
                    <iframe
                        title="AUTORE DMCC MAIN OFFICE Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.123456789!2d55.123456!3d25.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b123456789%3A0x123456789abcdef!2sJafza%20Shipyard!5e0!3m2!1sen!2sae!4v1680000000000!5m2!1sen!2sae"
                        width="100%"
                        height="100%"
                        style={{ border: 0, minHeight: 220, width: "100%", height: "100%" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactMap;
