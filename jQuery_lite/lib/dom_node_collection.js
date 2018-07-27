class DOMNodeCollection{
  constructor(array_of_html_elements_from_user){
    this.nodeElements = array_of_html_elements_from_user;
  }
  
  html(string){
    if (!string){
      return this.nodeElements[0].innerText;
    } else {
      this.nodeElements.forEach( (el) => {
        el.innerText = string;
      });
    }
  }
  
  empty(){
    this.nodeElements.forEach( (el) => {
      el.innerText = "";
    });
  }
  
  append(string){
    this.nodeElements.forEach( (el) => {
      let myExpression = new RegExp('<([a-zA-Z0-9]+)>(.*)<');
      // debugger;
      let htmlType = myExpression.exec(string)[1];
      let body = myExpression.exec(string)[2];
      let newHTML = document.createElement(htmlType);
      newHTML.innerText = body;
      el.appendChild(newHTML);
      
    });
  }
  
  attr(attribute,value) {
    let arrayAttributes = [];
    this.nodeElements.forEach( (el) => {
      //what are doing with the getAttribu
      if (!value){
        arrayAttributes.push(el.getAttribute(attribute));
      } else{
        el.setAttribute(attribute,value); //but value is ""
      }
    });
    if (arrayAttributes.length) {
      return arrayAttributes;
    } 
  }
  
  addClass(input){
    this.attr('class',input);
  }
  
  removeClass(){
    this.nodeElements.forEach( (el) => {

      el.removeAttribute('class'); //but value is ""

    });
  }
  
  children(){
    let childNodes = [];
    this.each((node) => {
      const childNodeList = node.children;
      childNodes = childNodes.concat(Array.from(childNodeList));
    });
    return new DOMNodeCollection(childNodes);
  }
  
  each(callback){
    for (var i = 0; i < this.nodeElements.length; i++) {
      callback(this.nodeElements[i]);
    }
  }
  
}

module.exports = DOMNodeCollection;

//my bracelet is speaking to me
//I am siddhartha in the flesh
//I am

//so we need all children so we need to check all nodeELEMEnts???
//i dont think it will work based off the way we designed this
//ask how far stephen and Ti are?