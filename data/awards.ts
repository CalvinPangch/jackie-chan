export type Award = {
  year: number;
  title: string;
  org?: string;
};

export const awards: Award[] = [
  { year: 2016, title: "Honorary Academy Award", org: "Academy of Motion Picture Arts and Sciences" },
  { year: 2015, title: "Best Action Choreography — CZ12", org: "Hong Kong Film Awards" },
  { year: 2013, title: "Guinness World Records — Most Stunts by a Living Actor & Most Credits in One Film" },
  { year: 2008, title: "MTV Generation Award", org: "MTV Movie Awards" },
  { year: 2005, title: "Best Action Choreography — New Police Story", org: "Hong Kong Film Awards" },
  { year: 2004, title: "Best Action Choreography — Shanghai Knights", org: "Taurus World Stunt Awards" },
  { year: 2004, title: "Chevalier of the Ordre des Arts et des Lettres", org: "French Ministry of Culture" },
  { year: 2002, title: "Star on the Hollywood Walk of Fame" },
  { year: 1999, title: "Best Action Choreography — Who Am I?", org: "Hong Kong Film Awards" },
  { year: 1996, title: "Lifetime Achievement Award", org: "MTV Movie Awards" },
  { year: 1996, title: "Best Picture & Best Action Choreography — Rumble in the Bronx", org: "Hong Kong Film Awards" },
  { year: 1993, title: "Best Actor — Crime Story", org: "Golden Horse Awards" },
  { year: 1993, title: "Best Action Choreography — Police Story 3: Supercop", org: "Hong Kong Film Awards" },
  { year: 1989, title: "MBE — Member of the Order of the British Empire", org: "United Kingdom" },
  { year: 1986, title: "Best Picture & Best Action Choreography — Police Story", org: "Hong Kong Film Awards" },
  { year: 1985, title: "Best Action Choreography — Project A", org: "Hong Kong Film Awards" },
  { year: 0, title: "Honorary Doctorates", org: "Hong Kong Baptist University, Cambodia Royal Academy, and others" },
  { year: 0, title: "Goodwill Ambassador", org: "UNICEF / UNAIDS" },
];
