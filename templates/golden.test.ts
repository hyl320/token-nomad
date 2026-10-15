import { describe, it, expect, vi, beforeEach } from 'vitest';
import { targetFunction } from '../feature.service';

describe('featureService.targetFunction', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return formatted user data when valid ID is provided', async () => {
    // 1. Arrange
    const mockInput = {
      id: '123',
      rawName: ' alice ',
    };

    // 2. Act
    const result = await targetFunction(mockInput);

    // 3. Assert
    expect(result.error).toBeNull();
    expect(result.data).toEqual({
      id: '123',
      name: 'Alice',
    });
  });
});
