const sketch = new p5((p5: p5) => {
  p5.setup = () => {
    p5.createCanvas(640, 480);
    console.log(answer);
  };

  p5.draw = () => {
    p5.clear();
  };
});
