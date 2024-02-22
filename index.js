import zim from "https://zimjs.org/cdn/016/zim";
const {
  Frame,
  Circle,
  Button,
  Label,
  Rectangle,
  GlowEffect,
  Pic,
  Slider,
  Line,
  Blob,
} = zim;

new Frame(
  FIT,
  1024,
  768,
  "#d1d5e6",
  "#333",
  ready,
  "assets/",
  new zim.Waiter()
);

function ready() {
    let beaker = new Pic("assets/beaker.png").center();
    let iceCube = new Pic("assets/ice-1.png").center().pos(-100,-10);
    let iceCube2 = new Pic("assets/ice-2.png").center().pos(140,150);
    let iceCube3 = new Pic("assets/ice-3.png").center().pos(110,50);
    let iceCube4 = iceCube.clone().pos(0,20);
    let iceCube5 = iceCube.clone().pos(0,-70);
    let iceCube6 = iceCube.clone().pos(-100,-100);
    let iceCube7 = iceCube.clone().pos(-100,400);
    let iceCube8 = iceCube.clone().pos(100,400);
    let iceCube9 = iceCube.clone().pos(100,0);

  // add a button
  let button = new Button(200, 100, "গলন শুরু \n করুন").center().mov(390,100)
  .tap(function () {
    //scale down
    iceCube.animate({scale:0.5});
    iceCube2.animate({scale:0.5});
    iceCube3.animate({scale:0.5});
    
  });

    

}