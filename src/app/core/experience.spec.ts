import { describe, expect, it } from 'vitest';
import { CAREER_START_YEAR, withYears, yearsOfExperience } from './experience';

describe('experience', () => {
  it('starts counting in 2010', () => {
    expect(CAREER_START_YEAR).toBe(2010);
  });

  it('is the current calendar year minus 2010', () => {
    expect(yearsOfExperience(new Date(2026, 0, 1))).toBe(16);
    expect(yearsOfExperience(new Date(2026, 11, 31))).toBe(16);
    expect(yearsOfExperience(new Date(2027, 5, 1))).toBe(17);
    expect(yearsOfExperience(new Date(2028, 5, 1))).toBe(18);
    expect(yearsOfExperience(new Date(2030, 5, 1))).toBe(20);
  });

  it('replaces every {years} placeholder', () => {
    expect(withYears('{years}+ years, {years}+ wins', 16)).toBe('16+ years, 16+ wins');
  });
});
