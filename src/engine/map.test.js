import { generateMap } from './map';

describe('Map generator', () => {
  it('generates map with good dimensions', () => {
    let map = generateMap(2, 2);
    expect(map.length).toBe(2);
  });
});
