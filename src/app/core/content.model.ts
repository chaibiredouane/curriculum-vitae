export interface Titled {
  title: string;
  text: string;
}

/** Shape of the `content` tree in public/i18n/*.json (only the parts read through the signal, not the translate pipe). */
export interface Content {
  hero: {
    role: string;
    headline: string;
    summary: string;
    expertise: string[];
    stats: { value: string; label: string }[];
  };
  about: { paragraphs: string[]; values: Titled[] };
  skills: {
    architectureItems: string[];
    leadershipItems: string[];
    data: { title: string; text: string; items: string[] };
  };
  mfe: { diagram: { remotes: string[] }; pillars: Titled[] };
  easymat: { features: string[]; evidence: Titled[] };
  experience: {
    intro: string;
    evolution: { period: string; title: string; text: string }[];
    items: { title: string; date: string; summary: string; tasks: string[] }[];
  };
  education: {
    items: { title: string; date: string; place: string }[];
    languages: { name: string; level: string }[];
    interests: string[];
  };
}
