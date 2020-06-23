'use strict';

let text = prompt('введите текст');

function DomElement(selector,height,width,bg,fontSize) {
    this.selector = selector; 
    this.height = height; 
    this.width = width; 
    this.bg = bg; 
    this.fontSize = fontSize;
}

DomElement.prototype.createElem = function(){
    if (this.selector.startsWith('.')){
        let div = document.createElement('div');
        div.classList.add = this.selector;
        document.body.append(div);
        div.style.cssText=`height: ${this.height}px;
        background-color: ${this.bg};
        width: ${this.width}px;
        font-size: ${this.fontSize}px;
        `;
        div.textContent = text;
    }
    if (this.selector.startsWith('#')){
        let p = document.createElement('p');
        p.setAttribute('id',this.selector);
        document.body.append(p);
        p.style.cssText=`height: ${this.height} px;
        background-color: ${this.bg};
        width: ${this.width}px;
        font-size: ${this.fontSize}px;
        `;
        p.textContent = text;
    }
}

let element = new DomElement('.b', '250', '250', 'yellow', '24');

element.createElem();