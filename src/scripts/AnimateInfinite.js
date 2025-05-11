import { animate, createTimeline, onScroll, Timeline } from 'animejs';
document.addEventListener('DOMContentLoaded', () => {


    const lettersC = animate('.name-company', {
      scaleY: [0, 1],
      easing: 'inQuad',
      duration: 230,
      delay: (_, i) => i * 200
    });
    const animateLight = animate('.light-bulb', {
      x: [0, 400],
      duration: 2040,
      easing: 'inQuad'
    })
    const startNavAnimation = animate('.start-animation', {
      opacity: [0, 1],
      duration: 400,
      autoplay: false
    })
    const animateTextStartSecondary = animate('.animate-text-start-secondary', {
      opacity: [0, 1],
      easing: 'inQuad',
      duration: 400,
      delay: (_, i) => i * 200
    })
  
    const path = document.querySelector('.infinity path');
    const length = path.getTotalLength();
  
    path.setAttribute('stroke-dasharray', length);
    path.setAttribute('stroke-dashoffset', length);
  
    const animateSvg = animate(path, {
  
      strokeDashoffset: [length, 0],
      duration: 2000,
      easing: 'easeInOutSine',
      direction: 'alternate',
  
    });
  
    const animateScroll = animate('.animate-text-scroll', {
      opacity: [0, 1],
      duration: 100,
  
    })
    const animateScrollSvg = animate('.animate-svg-scroll', {
      translateY: [0, 5],
      duration: 1000,
      loop: true,
    })
  
    const timeline = createTimeline({
      defaults: { duration: 2790 }
    })
  
    timeline.sync(lettersC).sync(animateLight, 0)
      .add('.bolita', {
        y: [0, 400],
        x: 10,
        x: '*=10',
        duration: 800,
      })
      .sync(animateTextStartSecondary)
      .sync(animateSvg, 0)
      .sync(animateScroll, '+=300')
      .sync(animateScrollSvg)
  
  
  
  });
  
  animate('.name-company', {
    translateY: [0, -200],
    duration: 2000,
    delay: (_, i) => i * 200,
    autoplay: onScroll({
      container: document.body,
      target: '.header-container',
      sync: true,
      debug: true,
      enter: "top center-=130"
    })
  })
  animate('.header-container', {
    opacity: [1, 0],
    duration: 2000,
    autoplay: onScroll({
      container: document.body,
      target: '.header-container',
      sync: true,
      debug: true,
      enter: "top center-=230",
      
    })
  
  })
  /*
  <header class="header-container fixed left-0 right-0 z">
			<div
				class="h-40 w-full flex justify-center gap-4 flex-row
			text-6xl
			font-[Montserrat]
			font-bold
			pt-20"
			>
				<div
					class="w-full h-full flex flex-row gap-4 justify-center items-center"
				>
					<span class="name-company origin-bottom">I </span>
					<span class="name-company origin-bottom">N </span>
					<span class="name-company origin-bottom">F </span>
					<span class="name-company origin-bottom">I </span>
					<span class="name-company origin-bottom">N </span>
					<span class="name-company origin-bottom">I </span>
					<span class="name-company origin-bottom">T </span>
					<span class="name-company origin-bottom">O </span>
				</div>

				<div
					class="absolute bg-white/1 rounded-full top-10 left-50 light-bulb z-3"
				>
				</div>
			</div>
			<div
				class="w-full flex justify-center items-center mt-10 flex-col gap-5 p-10 pt-5"
			>
				<div
					class="w-120 flex flex-row justify-between font-thin text-white/50"
				>
					<span class="animate-text-start-secondary"> Es </span>
					<span class="animate-text-start-secondary"> Nuestro </span>
					<span class="animate-text-start-secondary"> Poder </span>
					<span class="animate-text-start-secondary"> De </span>
					<span class="animate-text-start-secondary"> Creacion </span>
				</div>
				<div class="w-full flex justify-center">
					<svg
						viewBox="0 0 100 50"
						class="infinity w-64 h-32"
						fill="none"
						stroke="#d8ceed"
						stroke-width="1"
					>
						<path
							d="M10,25 C10,10 40,10 50,25 C60,40 90,40 90,25 C90,10 60,10 50,25 C40,40 10,40 10,25 Z"
						></path>
					</svg>
				</div>
			</div>
			<div
				class="flex w-full justify-center items-center flex-col gap-1 animate-text-scroll"
			>
				<span class="font-thin text-[Montserrat] text-[#fff8] text-sm">
					Scroll
				</span>
				<svg
					fill="#fff9"
					width="10px"
					version="1.1"
					id="Layer_1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					class="animate-svg-scroll"
					viewBox="0 0 407.437 407.437"
					xml:space="preserve"
					><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
						id="SVGRepo_tracerCarrier"
						stroke-linecap="round"
						stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
						<polygon
							points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 "
						></polygon>
					</g></svg
				>
			</div>
		</header>
  */