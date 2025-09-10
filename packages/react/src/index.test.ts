import { describe, expect, it } from '@jest/globals';
import { react } from './index';

describe('react', () => {
  it('should return correct string', () => {
    expect(react()).toBe('react');
  });
});
