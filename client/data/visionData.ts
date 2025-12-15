export interface VisionSection {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    imagePosition: 'left' | 'right';
}

export const visionSections: VisionSection[] = [
    {
        id: 'going-to-moon',
        title: 'GOING TO THE MOON',
        subtitle: '"Shaping the future of humanity\'s journey to the Moon"',
        // description: 'Spaceman Craft envisions building technologies that will take humanity closer to the Moon. Through innovation and sustainable space solutions, we aim to inspire future generations and contribute to the lunar journey of mankind.',
        description: 'Spaceman Craft envisions developing advanced technologies that will move humanity closer to the Moon. We are driven by a strong commitment to innovation and progress in space exploration. Our focus is on creating sustainable and reliable space solutions that support future lunar missions. Through continuous research, experimentation, and technological growth, we aim to build systems that strengthen mankind’s lunar journey. We believe that every innovation we create brings us one step nearer to expanding human presence beyond Earth. Our mission is to contribute meaningfully to upcoming lunar projects and long-term space initiatives. By developing efficient tools and solutions, we hope to support global efforts in reaching the Moon. We aim to inspire young minds to explore space and think beyond conventional boundaries. Spaceman Craft works with a clear vision of shaping a brighter future for space exploration. Our goal is to make lunar access more achievable, practical, and sustainable. With dedication and futuristic thinking, we continue striving toward transforming humanity’s lunar dreams into reality. Through our efforts, we hope to uplift and empower the next generation of explorers who will carry mankind further into the cosmos.',
        imageSrc: '/assets/vission/vission1.webp',
        imageAlt: 'Lunar landers on the moon',
        imagePosition: 'left'
    },
    {
        id: 'data-center-space',
        title: 'DATA CENTER IN SPACE',
        subtitle: '"Varsha.AI – Space-Based Data Center"',
        // description: 'Varsha.AI is Spaceman Craft\'s AI-powered platform designed for space-based data processing and satellite operations. It ensures efficient, reliable, and sustainable management of data, supporting humanity\'s journey into space and the future of lunar computing.',
        description: 'Varsha.AI is Spaceman Craft’s advanced AI-powered platform created to enhance space-based data processing. It is designed to handle complex satellite operations with precision and reliability. The platform focuses on delivering efficient and accurate data management for various space missions. Through intelligent automation, Varsha.AI ensures smooth functioning of satellite systems in orbit. Its technology supports sustainable and scalable operations for long-term space exploration. By improving data flow and system coordination, it strengthens mission stability and performance. Varsha.AI plays a crucial role in organizing and analyzing large volumes of space data. It also helps simplify operational challenges faced during satellite communication. The platform contributes to the evolution of smarter tools for future space technologies. With its robust features, it aids humanity’s progress toward deeper space exploration. Varsha.AI is built to support upcoming advancements in lunar computing and beyond. Through its capabilities, it empowers Spaceman Craft’s vision of guiding humanity further into space.',
        imageSrc: '/assets/vission/vission3.webp',
        imageAlt: 'Space-based data center',
        imagePosition: 'right'
    },
    {
        id: 'space-tourism',
        title: 'SPACE TOURISM',
        subtitle: '"Experience the wonder of space—an unforgettable journey beyond Earth"',
        // description: 'Spaceman Craft aims to make space travel an unforgettable experience for civilians, combining advanced spacecraft technology with safety and sustainability. Our goal is to let everyone witness the beauty of Earth from orbit and inspire a new era of space exploration.',
        description:'Spaceman Craft aims to make space travel an unforgettable and meaningful experience for civilians. Our mission focuses on creating opportunities for ordinary people to explore beyond Earth. We combine advanced spacecraft technology with the highest standards of safety and sustainability. Every system we design is built to ensure comfort, protection, and reliability for travelers. We envision a future where space is accessible to everyone, not just trained astronauts. Through innovative engineering, we want civilians to witness the beauty of Earth from orbit. Seeing our planet from space has the power to inspire new perspectives and deeper appreciation. This experience can spark curiosity and encourage future generations to explore the universe. Our goal is to open the doors to a new era of civilian space exploration and discovery. We believe that safe and sustainable travel is essential for long-term space tourism. By advancing spacecraft design, we move closer to making these dreams a reality. Spaceman Craft is dedicated to shaping the future of human space travel and inspiring the world.',
        imageSrc: '/assets/vission/vission2.webp',
        imageAlt: 'Astronaut looking out window at Earth',
        imagePosition: 'left'
    }
];
