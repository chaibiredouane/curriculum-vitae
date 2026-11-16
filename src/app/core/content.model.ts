export interface Titled {
  title: string;
  text: string;
}

/** Shape of the `content` tree in public/i18n/*.json (only the parts iterated in templates). */
export interface Content {
  hero: { stats: { value: string; label: string }[] };
  about: { paragraphs: string[]; highlights: Titled[] };
  skills: { architectureItems: string[] };
  mfe: { diagram: { remotes: string[] }; pillars: Titled[] };
  easymat: { features: string[] };
  experience: { items: { title: string; date: string; tasks: string[] }[] };
  education: {
    items: { title: string; date: string; place: string }[];
    languages: { name: string; level: string }[];
    interests: string[];
  };
}
