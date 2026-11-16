/** Year the professional career started. The single source for every "years of experience" figure. */
export const CAREER_START_YEAR = 2010;

/** Full years of experience for the given date: current calendar year minus 2010 (2026 → 16, 2027 → 17…). */
export function yearsOfExperience(now: Date = new Date()): number {
  return now.getFullYear() - CAREER_START_YEAR;
}

/** Replaces every `{years}` placeholder of a translated text with the computed number. */
export function withYears(text: string, years: number = yearsOfExperience()): string {
  return text.replaceAll('{years}', String(years));
}
