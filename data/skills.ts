export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Martial Arts",
    items: [
      "Hapkido (7th-dan black belt)",
      "Hung Ga (Southern Shaolin)",
      "Wing Chun",
      "Taekwondo (black belt)",
      "Judo",
      "Karate",
      "Jeet Kune Do concepts",
    ],
  },
  {
    category: "Stunts & Action",
    items: [
      "Self-performed high-fall, wire, fire, and vehicle stunts",
      "Action choreography and fight direction",
      "Improvised-prop combat (ladders, chairs, bicycles, shopping carts)",
      "Parkour-style chase sequences",
      "Founder of the Jackie Chan Stunt Team (Sing Ka Pan)",
    ],
  },
  {
    category: "Filmmaking",
    items: [
      "Director",
      "Producer",
      "Screenwriter",
      "Editor",
      "Second-unit director",
    ],
  },
  {
    category: "Performing Arts",
    items: [
      "Peking Opera (acrobatics, mime, singing, weapons forms)",
      "Recording artist — 20+ studio albums in Cantonese, Mandarin, Japanese, and English",
      "Voice acting (animation)",
    ],
  },
  {
    category: "Languages",
    items: [
      "Cantonese (native)",
      "Mandarin (fluent)",
      "English (fluent)",
      "Japanese (conversational)",
      "Korean (basic)",
      "American Sign Language (basic)",
    ],
  },
];
