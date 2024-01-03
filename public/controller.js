class Controller extends Actor {
  constructor() {
		super();
	  document.addEventListener('keydown', (e) => {
	  		console.log('KeyPress', e);
			//if (e.key === 'Control') {this.control = true; return;}
			if (e.key === 'Shift') {this.shift = true; return;}
			if (e.key === 'Alt') {this.alt = true; return;}
			if (this.shift && this.control && e.code === 'KeyF') {this.emit({metadata: {kind: 'progress-back'}, content: {value: 'alpha'}}); return;}
			if (this.shift && this.control && e.code === 'KeyD') {this.emit({metadata: {kind: 'scroll-back'}, content: {value: 'bravo'}}); return;}
			if (this.shift && this.control && e.code === 'KeyW') {this.emit({metadata: {kind: 'collapse'}, content: {value: 'charlie'}}); return;}
			if (this.shift && this.control && e.code === 'KeyE') {this.emit({metadata: {kind: 'enter'}, content: {value: 'delta'}}); return;}
			if (this.shift && this.control && e.code === 'KeyQ') {this.emit({metadata: {kind: 'climb-up'}, content: {value: 'echo'}}); return;}
			if (this.shift && this.alt && e.code === 'KeyD') {this.emit({metadata: {kind: 'big-scroll-back'}, content: {value: 'foxtrot'}}); return;}
			if (this.control && e.code === 'KeyF') {this.emit({metadata: {kind: 'progress'}, content: {value: 'golf'}}); return;}
			if (this.control && e.code === 'KeyD') {this.emit({metadata: {kind: 'scroll'}, content: {value: 'hotel'}}); return;}
			if (this.control && e.code === 'KeyW') {this.emit({metadata: {kind: 'expand'}, content: {value: 'india'}}); return;}
			if (this.control && e.code === 'KeyQ') {this.emit({metadata: {kind: 'drill-down'}, content: {value: 'kilo'}}); return;}
			if (this.alt && e.code === 'KeyD') {this.emit({metadata: {kind: 'big-scroll'}, content: {value: 'mike'}}); return;}
			
		});
	  document.addEventListener('keyup', (e) => {
			//if (e.key === 'Control') this.control = false;
			if (e.key === 'Shift') this.shift = false;
			if (e.key === 'Alt') this.alt = false;
		});
		this.on('progress-back', (message) => {
		  console.log('Event', message);
			return [];
		});
		this.on('scroll-back', (message) => {
		  console.log('Event', message);
			return [];
		});
		this.on('collapse', (message) => {
		  console.log('Event', message);
			return [];
		});
		this.on('enter', (message) => {
		  console.log('Event', message);
			return [];
		});
		this.on('climb-up', (message) => {
		  console.log('Event', message);
			return [];
		});
		this.on('big-scroll-back', (message) => {
		  console.log('Event', message);
			return [];
		});
		this.on('progress', (message) => {
		  console.log('Event', message);
			return [];
		});
		this.on('scroll', (message) => {
		  console.log('Event', message);
			return [];
		});
		this.on('expand', (message) => {
		  console.log('Event', message);
			return [];
		});
		this.on('drill-down', (message) => {
		  console.log('Event', message);
			return [];
		});
		this.on('big-scroll', (message) => {
		  console.log('Event', message);
			return [];
		});
	}
		alt = false;
		shift = false;
		control = true;
}