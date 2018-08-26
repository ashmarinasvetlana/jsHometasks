class Options {
	constructor(height, width, bg, fontSize, textAlign){
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}
	
	newBlock(text){
		let div = document.createElement('div');
		div.textContent = text;
		div.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign};`;
		return div;
		
	}
}

let yellowBlock = new Options("900px", "900px", "yellow", "50px", "center");


document.body.appendChild(yellowBlock.newBlock("Привет"));