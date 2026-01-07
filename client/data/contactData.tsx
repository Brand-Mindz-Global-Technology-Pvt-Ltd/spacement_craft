import React from 'react';
import ContactInfoSection from '../components/contact/ContactInfoSection';
import { PhoneIcon, SmartphoneIcon, MapPinIcon, ClockIcon, EnvelopeIcon } from '../components/contact/ContactIcons';

export const contactSections = [
    {
        title: 'CONNECT WITH US',
        items: [
            // {
            //     icon: <PhoneIcon />,
            //     content: '+971 54 589 7690'
            // },
            // {
            //     icon: <SmartphoneIcon />,
            //     content: '+971 56 680 1583'
            // },
            {
                icon: <EnvelopeIcon />,
                content: 'spacemancraftindia@gmail.com'
            }
        ]
    },
    {
        title: 'FIND US',
        items: [
            {
                icon: <MapPinIcon />,
                content: (
                    <div>
                       Address: 17/60C, Main Road,<br/> Vivekanandapuram, Kanyakumari - 629702
                    </div>
                )
            },
            // {
            //     icon: <MapPinIcon />,
            //     content: (
            //         <div>
            //             Jafza Shipyard, Shed H42<br />
            //             Dubai, United Arab Emirates
            //         </div>
            //     )
            // }
        ]
    },
    {
        title: 'OPENING HOURS',
        items: [
            {
                icon: <ClockIcon />,
                content: (
                    <div className="flex flex-col">
                        <span>Mon - Fri: 7am – 5pm</span>
                        <span>Saturday: 7am – 2pm</span>
                        <span>Sunday: Close</span>
                    </div>
                )
            }
        ]
    }
];
