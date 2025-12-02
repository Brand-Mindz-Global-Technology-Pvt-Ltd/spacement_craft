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
        description: 'Spaceman Craft envisions building technologies that will take humanity closer to the Moon. Through innovation and sustainable space solutions, we aim to inspire future generations and contribute to the lunar journey of mankind.',
        imageSrc: '/assets/vission/vission1.webp',
        imageAlt: 'Lunar landers on the moon',
        imagePosition: 'left'
    },
    {
        id: 'data-center-space',
        title: 'DATA CENTER IN SPACE',
        subtitle: '"Varsha.AI – Space-Based Data Center"',
        description: 'Varsha.AI is Spaceman Craft\'s AI-powered platform designed for space-based data processing and satellite operations. It ensures efficient, reliable, and sustainable management of data, supporting humanity\'s journey into space and the future of lunar computing.',
        imageSrc: '/assets/vission/vission3.webp',
        imageAlt: 'Space-based data center',
        imagePosition: 'right'
    },
    {
        id: 'space-tourism',
        title: 'SPACE TOURISM',
        subtitle: '"Experience the wonder of space—an unforgettable journey beyond Earth"',
        description: 'Spaceman Craft aims to make space travel an unforgettable experience for civilians, combining advanced spacecraft technology with safety and sustainability. Our goal is to let everyone witness the beauty of Earth from orbit and inspire a new era of space exploration.',
        imageSrc: '/assets/vission/vission2.webp',
        imageAlt: 'Astronaut looking out window at Earth',
        imagePosition: 'left'
    }
];
