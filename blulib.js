// BLUTO LIBRARY //

class Elem {
	constructor(arg) {
		if (typeof arg == "string") {
			this.elem = document.getElementById(arg)
			if (this.elem == null) {
				this.elem = document.createElement(arg)
			}
		} else {
			this.elem = arg
		}

		this.classes = {
			add: arg => {
				this.elem.classList.add(arg)
			},
			remove: arg => {
				this.elem.classList.remove(arg)
			},
		}
	}

	// METHODS //

	delete() {
		// deleting logic
	}

	on(event, callback) {
		this.elem.addEventListener(event, callback)
	}

	clear() {
		this.elem.replaceChildren()
	}

	addChild(child) {
		this.elem.appendChild(child.elem)
	}

	// SPECIAL VALUES //

    set text(val) {
        this.elem.textContent = val;
    }

    get text() {
        return this.elem.textContent;
    }

    set html(val) {
        this.elem.innerHTML = val;
    }

    get html() {
        return this.elem.innerHTML;
    }
}

const InputFields = {
	"text": () => {
		let elem = new Element("input")
		elem.setAttribute("type", "text")
		elem.value = () => {
			return elem.value
		}
		return elem
	},
	"number": (...args) => {
		let elem = new Element("input")
		elem.setAttribute("type", "number")
		elem.setAttribute("min", args[0])
		elem.setAttribute("max", args[1])
		elem.value = () => {
			return elem.value
		}
		return elem
	},
}

class InputPrompt {
	constructor(arg) {
		Object.keys(arg).forEach(key => {
			let info = arg[key]
		})
	}
}

class ConfirmPrompt {
	constructor(args) {
		this.something = null
	}
}

function getClass(arg) {
	let return_arr = []
	 Array.from(document.getElementsByClass(arg)).forEach(elem => {
	 	return_arr.push(new BlutoElement(elem))
	 })
	return
}

function InputLink(elem) {

}

// CONSTANTS //

const print = console.log
const body = new Elem(document.body)

// UTILITIES //

const repeat = (n, func) => {
	for (var i = 0; i < n; i++) {
		func(i)
	}
}