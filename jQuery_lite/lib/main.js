const DOMNodeCollection = require('./dom_node_collection.js');

window.$l = (arg) => {
  if (arg instanceof HTMLElement){
    return new DOMNodeCollection([arg]);
  }
  let selectors = Array.from(document.querySelectorAll(arg));
  const DNObject = new DOMNodeCollection(selectors);
  return DNObject;
};


//is the function we are viewing for jQuery??? or are those vanilla?
//can we use this function?