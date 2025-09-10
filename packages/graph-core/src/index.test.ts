import { describe, expect, it } from '@jest/globals';
import { graphCore } from './index';

describe('graphCore', () => {
  it('should return correct string', () => {
    expect(graphCore()).toBe('graphCore');
  });
});
