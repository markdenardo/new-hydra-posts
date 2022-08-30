// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// rinse/repeat
// by MDN
// IG: markdenardo
const arr=[1,2,3]
const arm=(arr.map(n=>n*Math.random(Math.PI)))
voronoi(arr.ease('sin'),1,1).rotate(arr,arm.fast()).modulate(o0,0.5).color(arr.smooth(),1,10).out(o0)
render(o0)
