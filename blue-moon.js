voronoi(1,1,1).color(10).modulate(o1,Math.PI).out(o0)
noise(1,2,3).color(1,1,10).scale().modulate(o0,osc(1,1,1)).out(o1)
render(o1)
