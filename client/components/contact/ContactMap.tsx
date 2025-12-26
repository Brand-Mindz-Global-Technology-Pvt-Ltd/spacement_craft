import React from 'react';

const ContactMap: React.FC = () => {
    return (
        <div className="pb-12 md:px-0">
            <div className="max-w-6xl mx-auto rounded-lg overflow-hidden shadow-lg border border-white/10">
                <div className="w-full h-[320px] md:h-[380px] relative">
                    <iframe
                        title="SpaceMan Craft Private Limited Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.084648203912!2d77.54637307449093!3d8.092850202940816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04eddc97765b91%3A0xcaafe72deb8d3e6b!2sSpaceMan%20Craft%20Private%20Limited!5e0!3m2!1sen!2sin!4v1766748991385!5m2!1sen!2sin"
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
