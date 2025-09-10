import { describe, expect, it } from '@jest/globals';
import { graph } from './index';

describe('graph', () => {
  it('should return correct string', () => {
    expect(graph()).toBe('graph');
  });
});
