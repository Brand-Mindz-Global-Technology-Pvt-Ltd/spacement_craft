export interface EventItem {
  id: string;
  title: string;
  date: string;
  description: string;
}

export const eventsData: EventItem[] = [
  {
    id: "hunters-moon",
    title: "Hunter’s Moon Night Watch",
    date: "October 14, 2025",
    description:
      "The Hunter’s Moon, the first full moon after the harvest moon, will illuminate the night sky with exceptional brightness. Perfect for lunar enthusiasts and sky photographers to capture the Moon’s golden glow.",
  },
  {
    id: "lunar-eclipse",
    title: "Partial Lunar Eclipse & Meteor Shower",
    date: "November 7-8, 2025",
    description:
      "A partial lunar eclipse will occur alongside the Taurid Meteor Shower, offering a double treat for stargazers. Watch the Moon partially darken as meteors streak across the sky in a dazzling show.",
  },
  {
    id: "meteor-shower",
    title: "Supermoon Spectacle",
    date: "February 12, 2026",
    description:
      "A Supermoon will rise — appearing 14% larger and 30% brighter than usual, as the Moon reaches its closest point to Earth. This is the best time to observe lunar craters and maria with the naked eye.",
  },
];
