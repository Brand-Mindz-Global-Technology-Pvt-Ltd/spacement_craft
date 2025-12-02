export interface SolutionItem {
    title: string;
    img: string;
    desc: string;
    tags?: string[];
}

export const items: SolutionItem[] = [
    {
        title: "Hyperspectral Vision",
        img: "https://api.builder.io/api/v1/image/assets/TEMP/44d47a5d1658608c03887f3ffd188776125c7cf4?width=1051",
        desc: `Our Hyperspectral Vision technology captures light across hundreds of spectral bands, revealing details invisible to the human eye. It enables precise material identification, advanced imaging, and deeper insights across industries such as agriculture, environmental monitoring, defense, and space exploration. By analyzing every wavelength, we turn complex data into actionable intelligence. Experience a new dimension of vision where every detail matters.`,
    },
    {
        title: "Defence Surveillance",
        img: "https://api.builder.io/api/v1/image/assets/TEMP/3f1e84217d78a591e5fe172b0a9b8d3029537341?width=1009",
        desc: `Advanced surveillance solutions are designed to strengthen national security with precision and reliability. From real-time monitoring to threat detection, we integrate cutting-edge technologies to ensure complete situational awareness. Hyperspectral imaging, AI analytics, and satellite data empower defense forces to identify hidden threats and make faster decisions. We deliver intelligence that protects borders, assets, and lives.`,
    },
    {
        title: "Ocean Net",
        img: "https://api.builder.io/api/v1/image/assets/TEMP/46faf5a2fa5b4c6392659eaf48c4ad8540804c04?width=978",
        desc: `Ocean Net is designed to make oceans smarter and safer by mapping underwater resources with advanced sensing technology. It helps fishermen locate fish more efficiently, identifies rocks and obstacles for safe boating, and monitors marine activity in real time. By combining satellite data and AI, Ocean Net ensures both livelihood support and maritime safety. Together, we move toward a secure and sustainable blue planet.`,
    },
    {
        title: "Farm Scan",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        desc: `Farm Scan brings intelligence to agriculture with advanced imaging and data-driven insights. By analyzing soil, crops, and water conditions, it helps farmers detect issues early and boost productivity. From monitoring plant health to optimizing resources, Farm Scan empowers precision farming with ease. Smarter farms today mean a more sustainable future for tomorrow.`,
    },
    {
        title: "Sky Vision",
        img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
        desc: `Unlocks new possibilities in aerial monitoring and exploration. With advanced imaging and real-time data, it enables precise observation of landscapes, weather patterns, and critical missions.`,
    },
    {
        title: "Traffic Sense 360",
        img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
        desc: `Traffic Sense 360 delivers a complete 360° view of roads with real-time monitoring and smart insights. It helps reduce congestion, prevent accidents, and improve traffic flow. Designed for modern cities, it ensures safer and more efficient mobility for everyone.`,
    }
];
