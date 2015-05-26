describe('triangle', function() {
  it('is equilateral if it is an equilateral triangle', function() {
    expect(triangle(3,3,3)).to.eq("an equilateral");
  });

  it('is isoceles if it is an isoceles triangle', function() {
    expect(triangle(2, 2, 3)).to.eq("an isoceles");
  });

  it('is scalene if it is a scalene triangle', function() {
    expect(triangle(2, 4, 3)).to.eq("a scalene");
  });

  it('is not a triangle if it is not a valid triangle', function() {
    expect(triangle(2, 7, 3)).to.eq("not a triangle");
  });
});
