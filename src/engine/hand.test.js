import { generateHand } from "./hand";

describe("Hand generator", () => {
  it("should generate an array of cards of the right size", () => {
    let size = 5
    let hand = generateHand(size);
    expect(hand.length).toBe(size);
  });
  it("should provide cards with a good shape", () => {
    let hand = generateHand(2);
    let testedCard = hand[0];
    expect(testedCard).toBeDefined();
    expect(testedCard).toHaveProperty("name");
    expect(testedCard).toHaveProperty("cost");
  })
});
