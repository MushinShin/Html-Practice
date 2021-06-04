// Prototypical Inheritance
function ele() {
    this.click = function () { //METHOD OF A OBJECT 
        console.log('clicked');
    }
}

ele.prototype.focus = function () { //PROTOTYPE OF A OBJECT
    console.log('focused');
}

function HtmlSelectElement(items = []) {
    this.items = items; //Array (empty)

    this.addItem = function (item) { //Method
        this.items.push(item);
    }

    this.removeItem = function (item) { //Method
        this.items.splice(this.items.indexOf(item), 1);
    }

    this.render = function (item) {
        return `
        <select>${this.items.map(item => `
        <option>${item}</option>`).join('')}
        </select>`;
    }
}


HtmlSelectElement.prototype = new ele;
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(source) {
    this.source = source;
    this.renderimg = function () {
        return `<img src="${this.source}"/>"`
    }
}

HtmlImageElement.prototype = new ele;
HtmlImageElement.prototype.constructor = HtmlImageElement;
