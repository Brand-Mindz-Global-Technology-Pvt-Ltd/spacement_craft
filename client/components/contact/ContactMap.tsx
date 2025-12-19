import React from 'react';

const ContactMap: React.FC = () => {
    return (
        <div className="pb-12 md:px-0">
            <div className="max-w-6xl mx-auto rounded-lg overflow-hidden shadow-lg border border-white/10">
                <div className="w-full h-[320px] md:h-[380px] relative">
                    <iframe
                        title="AUTORE DMCC MAIN OFFICE Map"
                        src="https://maps.app.goo.gl/2KMtKzwjyZQNUHUf6"
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
