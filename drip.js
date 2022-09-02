
const arr = [1, 2, 3];
    const arm = arr.map((n) => n * Math.random(Math.PI));
   /// voronoi(arr.ease("sin"), 1, arm)
noise(1,1,arm)
     // .rotate(0.5, 0.5)
      .modulate(o0, 0.5)
      .color(arr.smooth(), 1, 9)
      .blend(o0, 0.3)
      .out(o0);
    speed = 0.7;
    bpm = 20;
    //
    toggle = 0;
    src(o0)
      .blend(o1, () => (toggle = toggle ^ 1))
      .out(o1);
    render(o1);
