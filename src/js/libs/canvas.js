canvas = document.getElementById("hero-canvas");
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

let mouse = {
	x: undefined,
	y: undefined
}

let maxRadius = 4,
		minRadius = 2;

let colorArray = [
	// '#a1a6b4',
	// '#94C5CC',
	// '#32343F',
	'#0E111D',
	'#F8F8F8',
	'rgba(255, 255, 255, 0.2)'
];

window.addEventListener('mousemove', (e) => {
	mouse.x = e.x;
	mouse.y = e.y;
})

window.addEventListener('resize', () => {
	canvas.width  = window.innerWidth;
	canvas.height = window.innerHeight;

	init();
})

function Circle(x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.minRadius = radius;
	this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

	this.draw = function() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.fillStyle = this.color;
		c.fill();
	}

	this.update = function() {
		if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
			this.dx = -this.dx;
		}

		if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
			this.dy = -this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;

		// ИНТЕРАКТИВНОСТЬ
		
		if (mouse.x - this.x < 30 && mouse.x - this.x > - 30 && mouse.y - this.y < 30 && mouse.y - this.y > - 30) {
			//console.log(elemLeft+' - '+elemTop);

			// if (j == 0) {
				// let alpha = config.mouseSize / dist;
				// a.color   = `rgba(250, 10, 30, ${alpha})`;

				// dist < config.mouseSize ? force = (dist - config.mouseSize) * b.mass : force = a.mass;
			// }
			// this.x += 2
			// this.x += ((Math.random() < 0.3) ? -2 : 2)*Math.random()
			// this.y += ((Math.random() < 0.3) ? -2 : 2)*Math.random()
			// this.dx += 1
			// this.dy += 1
			// console.log(mouse.x);
			// console.log(mouse.y);
			// console.log(this.x);
			// console.log(this.y);
			// console.log(mouse);
			// this.x = (Math.random() - 0.5) / 10000,
			// this.y = (Math.random() - 0.5) / 10000;
			// dx = (Math.random() - 0.5) * .5,
			// dy = (Math.random() - 0.5) * .5; 
			// console.log(this);
			// this.x += 1;
			// this.y += 1;
			// this.xy += 1;
			// this.yx += 1;
			// let dx = this.x - mouse.x; 
			// let dy = this.y - mouse.y;
			// // console.log(dx);
			// // console.log(dy);
			// dx = this.x - this.x1;
			// dy = this.y - this.y1;
      //  if (dx*dx + dy*dy > e.r*e.r) {
			// 		dx = this.x - this.x1;
			// 		dy = this.y - this.y1;
      //  }
      //  e.element.setAttribute('cx', e.x -= dx/33);   
      //  e.element.setAttribute('cy', e.y -= dy/33);
			// let mouse = {clientX:2e9, clientY:2e9};
			// let elements = [...Array(10)].map((_, i) => {
			// 		let x = innerWidth*Math.random();
			// 		let y = innerHeight*Math.random();
			// 		let r = Math.random()*Math.min(innerWidth, innerHeight)/10 + 20;
			// 		return {i, x, y, x1:x, y1:y, r}
			// });

			// let el = e => `<circle id="el_${e.i}" r="${e.r}" 
			// 		cx="${e.x}" cy="${e.y}" fill="#0006"></circle>`

			// document.body.innerHTML = `<svg id="svg" width="${innerWidth}" 
			// 		height="${innerHeight}">${elements.map(el)}</svg>`; 

			// elements.forEach(e => e.element = document.getElementById('el_'+e.i));

			// addEventListener('mousemove', e => mouse = e);

			// requestAnimationFrame(function anim() {
			// 		elements.forEach(e => {
			// 			let dx = e.x - mouse.clientX; 
			// 			let dy = e.y - mouse.clientY;
			// 			if (dx*dx + dy*dy > e.r*e.r) {
			// 					dx = e.x - e.x1;
			// 					dy = e.y - e.y1;
			// 			}
			// 			e.element.setAttribute('cx', e.x -= dx/33);   
			// 			e.element.setAttribute('cy', e.y -= dy/33);
			// 		});
			// 		requestAnimationFrame(anim);
			// })
			// if (this.radius < maxRadius) {
				// this.radius += 1;
				// this.x += 1;
				// this.y += 1;
				// console.log(this);
			// }
		} 
		// else if (this.radius > this.minRadius){
		// 	this.radius -= 1;
		// }

		// console.log(mouse.x - this.x);

		this.draw();
	}
}

let circleArray = [];

for (let i = 0; i < 700; i++) {
	// let radius = Math.random() * 3 + 1,
	let radius = Math.random() * 2 + 1,
			x = Math.random() * (innerWidth - radius * 2) + radius,
			y = Math.random() * (innerHeight - radius * 2) + radius,
			dx = (Math.random() - 0.5) * .5,
			dy = (Math.random() - 0.5) * .5; 
	circleArray.push(new Circle(x, y, dx, dy, radius));
}

function init() {
	circleArray = [];

	for (let i = 0; i < 700; i++) {
		let radius = Math.random() * 5 + 1,
				x = Math.random() * (innerWidth - radius * 2) + radius,
				y = Math.random() * (innerHeight - radius * 2) + radius,
				dx = (Math.random() - 0.5) * .5,
				dy = (Math.random() - 0.5) * .5;
		circleArray.push(new Circle(x, y, dx, dy, radius));
	}    
}

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);
	
	// c.fillStyle = 'transparent';
	// c.fillRect(0, 0, 2000, 5000);

	for (let i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}
}

animate();
