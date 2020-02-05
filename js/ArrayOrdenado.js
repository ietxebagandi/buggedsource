class ArrayOrdenado {
	constructor(comparador){
		this.comparador = comparador
		this.contenido = []
	}

	findPos(elt) {
		let x = this.contenido.findIndex(x => this.comparador(elt, x) < 0);
		return x;
	}

	insert(elt) {
		this.contenido.splice(this.findPos(elt), 0, elt)
	}
}

export { ArrayOrdenado };