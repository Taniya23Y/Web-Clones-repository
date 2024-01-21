//Locomotive scrollTrigger codepen
// import LocomotiveScroll from 'locomotive-scroll';

function locoMotiveScroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
locoMotiveScroll();

// cursor
// function cursorEffect(){
//     // DOM for cursor
// var section1Content = document.querySelector(".section-1-content");
// var cursor = document.querySelector(".cursor");

// // Add event listener
// section1Content.addEventListener("mousemove", function(dets){
//     // console.log(dets.x);
//     // cursor.style.left = dets.x+"px";
//     // cursor.style.top = dets.y+"px";

//     // gsap code 
//     gsap.to(cursor,{
//         x: dets.x,
//         y: dets.y,
//     })
// })

// section1Content.addEventListener("mouseenter",function(){
//     // gsap code 
//     gsap.to(cursor,{
//        scale: 1,
//        opacity: 1
//     })
// })

// section1Content.addEventListener("mouseleave",function(){
//     // gsap code 
//     gsap.to(cursor,{
//        scale: 0,
//        opacity: 0
//     })
// })
// }

// cursoreffect call
// cursorEffect();

function cursorEffect(pageId, contentId) {
  const page = document.querySelector(pageId);
  const section1Content = document.querySelector(contentId);
  const cursor = page.querySelector(".cursor");

  section1Content.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
    });
  });

  section1Content.addEventListener("mouseenter", (dets) => {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });

  section1Content.addEventListener("mouseleave", (dets) => {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}

cursorEffect(".section-1", ".section-1-content");
cursorEffect("#page5", "#page5");

/*-----------------------------------*/
// section2
function section2Gsap(){
    gsap.from(".elem h1",{
        y: 120,
        stagger: 0.25,
        duration: 1,
        // scrollTrigger: {
        //     trigger: `.section-2`,
        //     scroller: `.main`,
        //     start: "top 40%",
        //     end: "top 37%",
        //     // markers: true,
        //     scrub: 2
        // }

        scrollTrigger: {
            trigger: `.elem>h1`,
            start: `top 40%`,
            end: `top 37%`,
            scroller: `.main`,
            scrub: 2,
          },
          // stagger: 0.2,
    })
}

section2Gsap();

function cursorEffect2(){
  // DOM for cursor
var section4Content = document.querySelector(".section-4, .section-4 video, .section-4 svg");
var cursor11 = document.querySelector(".cursor1");

// Add event listener
section4Content.addEventListener("mousemove", function(dets){
  // console.log(dets.x);
  // cursor.style.left = dets.x+"px";
  // cursor.style.top = dets.y+"px";

  // gsap code 
  gsap.to(cursor11,{
      x: dets.x,
      y: dets.y,
  })
})

section4Content.addEventListener("mouseenter",function(){
  // gsap code 
  gsap.to(cursor11,{
     scale: 1,
     opacity: 1
  })
})

section4Content.addEventListener("mouseleave",function(){
  // gsap code 
  gsap.to(cursor11,{
     scale: 0,
     opacity: 0
  })
})
}

// cursoreffect call
cursorEffect2();