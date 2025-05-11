import { animate, createTimeline, onScroll, Timeline } from "animejs";
import { animationCanvas } from "./Canvas";

const texts = Array.from(document.querySelectorAll(".transform-to-span"));
const section2 = document.querySelector(".section-2");
const textHeader = document.querySelector(".text-header");

const timeline = createTimeline();

console.log(texts);
texts.forEach((text) => {
  if (text.classList.contains("text-header")) {
    transformToSpan(text, "animate-text-header");
  } else if (text.classList.contains("text-secondary")) {
    transformToSpan(text, "animate-text");
  } else if (text.classList.contains("third-text")) {
    transformToSpan(text, "animate-third-text");
  }
});
function transformToSpan(text, className) {
  const innerText = text.textContent;
  text.innerHTML = "";
  for (let letra of innerText) {
    const span = document.createElement("span");
    span.textContent = letra;
    span.classList.add(className);
    text.appendChild(span);
    text.classList.remove("opacity-0");
  }
}

const animateText = animate(".animate-text", {
  opacity: [0, 1],
  duration: 100,
  delay: (_, i) => i * 40,
});
const animateHeader = animate(".animate-text-header", {
  opacity: [0, 1],
  duration: 100,
  delay: (_, i) => i * 160,
});
const animateNav = animate(".nav-animate", {
  opacity: [0, 1],
  duration: 500,
  ease: "inBack",
  onComplete: () => {
    animationCanvas();
  },
});

timeline.sync(animateHeader).sync(animateText).sync(animateNav);

const animateHeaderScroll = animate(".text-header", {
  transform: [
    { from: "translateY(200%)", ease: "inOut", duration: 100 },
    { to: "translateY(0%)", ease: "inOut", duration: 100 },
  ],
  fontSize: "2rem",
  opacity: [1, 1],
  duration: 200,
  autoplay: onScroll({
    container: document.body,
    sync: true,

    enter: "top center",
    leave: "top center+=1000",
    scrub: 1000,
  }),
});

// Aca acaba el header y empiezan animaciones scroll para la segunda seccion


const animateThirdText = animate(".animate-third-text", {
  scaleY: [0, 1],
  opacity: [0, 1],
  easing: "inQuad",
  duration: 230,
  delay: (_, i) => i * 200,
  autoplay: onScroll({
    container: document.body,
    sync: true,
    
    enter: "center center",
    leave: "top+=100 center",
  }),
});

const animateFirstGrid = animate(".cell-grid", {
  opacity: [0, 1],
  duration: 300,
  ease: "in",
  delay: (_, i) => i * 160,
  autoplay: onScroll({
    container: document.body,
    enter: "center center-=100",
    leave: "top+=330 center-=100",
    sync:true,
  }),
});

// Aca empieza la fakin tercera seccion ajja

const animateSection3 = animate('.section-3-text',{
  opacity: [0, 1],
  duration: 300,
  ease: "in",
  delay: (_, i) => i * 160,
  autoplay: onScroll({
    container: document.body,
    enter: "center center-=100",
    leave: "top+=330 center+=100",
    sync:true,
  }),
})

// Aca empieza la cuarta fakin seccion


const animateSection4 = animate('.section-4',{
  opacity: [0, 1],
  duration: 300,
  ease: "in",
  delay: (_, i) => i * 160,
  autoplay: onScroll({
    container: document.body,
    enter: "center center-=100",
    leave: "top+=330 center-=40",
    
    sync:true,
  }),
})

// Aca empieza la quinta shit
const animateSection5 = animate('.section-5',{
  opacity: [0, 1],
  duration: 300,
  ease: "in",
  delay: (_, i) => i * 160,
  autoplay: onScroll({
    container: document.body,
    enter: "center center+=100",
    leave: "top+=330 center+=240",
    sync:true,
  }),
})