export type Film = {
  year: number;
  title: string;
  role?: string;
  notes?: string;
};

// Feature filmography of Jackie Chan as an actor/lead, in rough chronological
// order. Includes Hong Kong productions, mainland China co-productions, and
// Hollywood films. TV series, documentaries, and uncredited extras from the
// 1960s are omitted. Where a film is widely known under an alternate English
// title, the best-known title is used.
export const films: Film[] = [
  // 1960s — child actor
  { year: 1962, title: "Big and Little Wong Tin Bar", role: "Child actor" },
  { year: 1963, title: "The Love Eterne", role: "Child actor (uncredited)" },
  { year: 1964, title: "The Story of Qiu Xiang Lin", role: "Child actor" },
  { year: 1966, title: "Come Drink with Me", role: "Extra (uncredited)" },
  { year: 1967, title: "The Eighteen Darts", role: "Bit part" },
  { year: 1971, title: "A Touch of Zen", role: "Stuntman / bit part" },

  // 1970s — stuntman, supporting, then leading roles
  { year: 1971, title: "The Little Tiger of Canton", role: "Lead", notes: "Also released as Master with Cracked Fingers" },
  { year: 1972, title: "Fist of Fury", role: "Stuntman", notes: "Bruce Lee film" },
  { year: 1973, title: "Enter the Dragon", role: "Stuntman / henchman" },
  { year: 1973, title: "Police Woman", role: "Lead", notes: "a.k.a. Rumble in Hong Kong" },
  { year: 1973, title: "Eagle Shadow Fist", role: "Lead", notes: "a.k.a. Not Scared to Die" },
  { year: 1973, title: "Village of Tigers", role: "Supporting" },
  { year: 1974, title: "The Golden Lotus", role: "Supporting" },
  { year: 1974, title: "The Heroine", role: "Supporting" },
  { year: 1974, title: "The Himalayan", role: "Supporting" },
  { year: 1974, title: "Supermen Against the Orient", role: "Stuntman / bit part" },
  { year: 1975, title: "All in the Family", role: "Supporting" },
  { year: 1975, title: "No End of Surprises", role: "Supporting" },
  { year: 1976, title: "Hand of Death", role: "Supporting", notes: "Directed by John Woo" },
  { year: 1976, title: "New Fist of Fury", role: "Lead" },
  { year: 1976, title: "Shaolin Wooden Men", role: "Lead" },
  { year: 1976, title: "Countdown in Kung Fu", role: "Lead" },
  { year: 1977, title: "The Killer Meteors", role: "Lead" },
  { year: 1977, title: "To Kill with Intrigue", role: "Lead" },
  { year: 1977, title: "Snake and Crane Arts of Shaolin", role: "Lead" },
  { year: 1978, title: "Half a Loaf of Kung Fu", role: "Lead" },
  { year: 1978, title: "Magnificent Bodyguards", role: "Lead" },
  { year: 1978, title: "Snake in the Eagle's Shadow", role: "Lead", notes: "Breakthrough role" },
  { year: 1978, title: "Drunken Master", role: "Wong Fei-hung", notes: "Star-making role" },
  { year: 1978, title: "Spiritual Kung Fu", role: "Lead" },
  { year: 1979, title: "Dragon Fist", role: "Lead" },
  { year: 1979, title: "The Fearless Hyena", role: "Lead / director" },

  // 1980s — superstardom, auteur period, first Hollywood attempt
  { year: 1980, title: "The Young Master", role: "Lead / director" },
  { year: 1980, title: "Battle Creek Brawl", role: "Lead", notes: "First US-produced starring role" },
  { year: 1981, title: "The Cannonball Run", role: "Jackie Chan (Subaru driver)" },
  { year: 1982, title: "Dragon Lord", role: "Lead / director" },
  { year: 1983, title: "Fantasy Mission Force", role: "Supporting" },
  { year: 1983, title: "Winners and Sinners", role: "Inspector Ricky Fung", notes: "First Lucky Stars film" },
  { year: 1983, title: "Project A", role: "Sgt. Dragon Ma / director" },
  { year: 1984, title: "The Cannonball Run II", role: "Jackie Chan" },
  { year: 1984, title: "Wheels on Meals", role: "Thomas" },
  { year: 1984, title: "Pom Pom", role: "Cameo" },
  { year: 1984, title: "The Fearless Hyena Part II", role: "Lead" },
  { year: 1985, title: "My Lucky Stars", role: "Muscles" },
  { year: 1985, title: "Twinkle Twinkle Lucky Stars", role: "Muscles" },
  { year: 1985, title: "The Protector", role: "Billy Wong", notes: "Second US-produced starring role" },
  { year: 1985, title: "Heart of the Dragon", role: "Tat Fung", notes: "a.k.a. First Mission" },
  { year: 1985, title: "Police Story", role: "Sgt. Chan Ka-kui / director", notes: "Launched the Police Story franchise" },
  { year: 1986, title: "Naughty Boys", role: "Cameo / producer" },
  { year: 1986, title: "Armour of God", role: "Asian Hawk / director" },
  { year: 1987, title: "Project A Part II", role: "Sgt. Dragon Ma / director" },
  { year: 1988, title: "Police Story 2", role: "Sgt. Chan Ka-kui / director" },
  { year: 1988, title: "Dragons Forever", role: "Jackie Lung", notes: "Final film with Sammo Hung & Yuen Biao trio" },
  { year: 1988, title: "Painted Faces", role: "Cameo", notes: "Sammo Hung as Master Yu" },
  { year: 1989, title: "Miracles", role: "Charlie Yeung / director", notes: "a.k.a. Mr. Canton and Lady Rose" },

  // 1990s — the international breakthrough
  { year: 1991, title: "Island of Fire", role: "Steve / Lung Ching", notes: "a.k.a. The Prisoner" },
  { year: 1991, title: "Armour of God II: Operation Condor", role: "Asian Hawk / director" },
  { year: 1992, title: "Twin Dragons", role: "Boomer & John Ma" },
  { year: 1992, title: "Police Story 3: Supercop", role: "Sgt. Chan Ka-kui" },
  { year: 1993, title: "City Hunter", role: "Ryo Saeba" },
  { year: 1993, title: "Crime Story", role: "Inspector Eddie Chan", notes: "Rare dramatic role" },
  { year: 1993, title: "Project S", role: "Cameo", notes: "Supercop spin-off" },
  { year: 1994, title: "Drunken Master II", role: "Wong Fei-hung", notes: "a.k.a. The Legend of Drunken Master" },
  { year: 1995, title: "Rumble in the Bronx", role: "Ma Hon-keung", notes: "US box-office breakthrough" },
  { year: 1995, title: "Thunderbolt", role: "Chan Foh-to" },
  { year: 1996, title: "Police Story 4: First Strike", role: "Chan Ka-kui" },
  { year: 1997, title: "Mr. Nice Guy", role: "Jackie" },
  { year: 1997, title: "An Alan Smithee Film: Burn Hollywood Burn", role: "Cameo (himself)" },
  { year: 1998, title: "Who Am I?", role: "Jackie / director" },
  { year: 1998, title: "Rush Hour", role: "Det. Insp. Lee", notes: "Hollywood superstar vehicle" },
  { year: 1999, title: "Gorgeous", role: "C.N. Chan" },
  { year: 1999, title: "King of Comedy", role: "Cameo" },

  // 2000s — global star era
  { year: 2000, title: "Shanghai Noon", role: "Chon Wang" },
  { year: 2001, title: "The Accidental Spy", role: "Bei / Buck Yuen" },
  { year: 2001, title: "Rush Hour 2", role: "Det. Insp. Lee" },
  { year: 2002, title: "The Tuxedo", role: "Jimmy Tong" },
  { year: 2003, title: "Shanghai Knights", role: "Chon Wang" },
  { year: 2003, title: "The Medallion", role: "Eddie Yang" },
  { year: 2004, title: "Around the World in 80 Days", role: "Passepartout / Lau Xing" },
  { year: 2004, title: "New Police Story", role: "Insp. Chan Kwok-wing" },
  { year: 2004, title: "Enter the Phoenix", role: "Cameo / producer" },
  { year: 2005, title: "The Myth", role: "Jack / General Meng Yi" },
  { year: 2006, title: "Rob-B-Hood", role: "Thongs" },
  { year: 2007, title: "Rush Hour 3", role: "Det. Insp. Lee" },
  { year: 2008, title: "The Forbidden Kingdom", role: "Lu Yan / Old Hop", notes: "First on-screen pairing with Jet Li" },
  { year: 2008, title: "Kung Fu Panda", role: "Master Monkey (voice)" },
  { year: 2008, title: "Wushu", role: "Producer / cameo" },
  { year: 2009, title: "Shinjuku Incident", role: "Steelhead", notes: "Dramatic role" },

  // 2010s — China-centric leading roles, Hollywood co-productions, voice work
  { year: 2010, title: "The Karate Kid", role: "Mr. Han" },
  { year: 2010, title: "Little Big Soldier", role: "Old Soldier / producer / writer" },
  { year: 2011, title: "Shaolin", role: "Wudao the cook" },
  { year: 2011, title: "1911", role: "Huang Xing / director", notes: "Centennial of Xinhai Revolution" },
  { year: 2011, title: "Kung Fu Panda 2", role: "Master Monkey (voice)" },
  { year: 2012, title: "CZ12", role: "Asian Hawk / director", notes: "a.k.a. Chinese Zodiac" },
  { year: 2013, title: "Police Story 2013", role: "Zhong Wen" },
  { year: 2015, title: "Dragon Blade", role: "Huo An" },
  { year: 2016, title: "Skiptrace", role: "Bennie Chan" },
  { year: 2016, title: "Railroad Tigers", role: "Ma Yuan" },
  { year: 2016, title: "Kung Fu Panda 3", role: "Master Monkey (voice)" },
  { year: 2017, title: "Kung Fu Yoga", role: "Prof. Jack Chan" },
  { year: 2017, title: "The Foreigner", role: "Quan Ngoc Minh", notes: "Dramatic role opposite Pierce Brosnan" },
  { year: 2017, title: "The LEGO Ninjago Movie", role: "Master Wu (voice)" },
  { year: 2017, title: "Bleeding Steel", role: "Lin Dong" },
  { year: 2017, title: "Namiya", role: "Uncle Wang" },
  { year: 2019, title: "The Knight of Shadows: Between Yin and Yang", role: "Pu Songling" },
  { year: 2019, title: "The Iron Mask", role: "Master / Cheng Lan" },

  // 2020s
  { year: 2020, title: "Vanguard", role: "Tang Huating" },
  { year: 2023, title: "Ride On", role: "Lao Luo", notes: "Reflective late-career role" },
  { year: 2023, title: "Hidden Strike", role: "Luo Feng", notes: "With John Cena" },
  { year: 2024, title: "A Legend", role: "Prof. Fang / Zhao Zhan" },
  { year: 2024, title: "Panda Plan", role: "Jackie Chan (himself)" },
  { year: 2025, title: "Karate Kid: Legends", role: "Mr. Han" },
];
