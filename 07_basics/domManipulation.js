/**
 * Window object -> global object, ye hierarchy mei sbse aage hota hai, iske upar aur kuch nhi hota
 * window.open()
 * window.close()
 * console.log()  is also under window object
 * window object is created by browser
 * DOM- Documnet Object Model
 */
/**
 * We have an html file-> index.html(for eg), we convert it into
 * JS object. This Js object is called document.
 * The entire Document Model is called-> Document Object Model(DOM)
 */
/**A website-> inspect tools-> console window-> document(press enter)-> all html code displayed */
/**Anything enclosed within <> is a tag
 * there is a tokenizer that converts these tags in html file
 * into tokens, these tokens are converted into-> Nodes
 * Many such Ndes combine together to form-> DOM
 * 
 * <html> ke andar hoti hai <head> and <body>
 * .: htmls ke 2 child node(head and body) amd <html> is the parent node
    
window ke andar ->DOM
                ->BOM
                ->JS CORE

BOM-> Browser Object Model, all the interactions that
happen with the browser,(leaving the html content)-> like history,
navigation, screen size, etc
*/

//CODE
/**
 * change html
 * -> access
 *      -> id
 *      -> class name
 *      -> tag name
 *      -> in response -> multiple output/single output
 * 
 */

/**
 * document.getElementById("fpara")-> method
 * where we provide an ID, gives a single object matching the particular iD
 * 
 * 
 * document.getElementByClassName()
 * document.getElementByTagName("p"), etc
 * 
 * querySelector-> shortcut for getBy method
 * querySelector(#id_name)
 * querySelector(.class_name)
 * querySelector(tag_name)-> query..('p')
 * 
 * document.querySelector('.textMatter')
<p id=​"fpara" class=​"textMatter">​First Paragraph!​</p>​
sbse pehle jo class milega usi ko return krega, baki sb ignore

so use querySlectorAll(.classname)
() */

/**
 * DOCUMENT 
 * ACCESS ELEMENT-> by Id
 *              -> class
 *              -> tag
 *              -> $0
 * 
 * UPDATE EXISTING ELEMENT
 * -> inner HTML -< get/set
 * -> outer HTMl
 * -> text content-> jitna enters/tabs we pressed, all visible
 * -> inner Text-> text content visible, jiase tum UI pe render krte waise hi dikhai dega
 * 
 * let element=document.querySelector('#fdiv')
 * element
 * element.textContent
 */

/**
let myDiv=document.querySelector('#myDiv')
let newElement= document.querySelector('span')
let newElement= document.createElement('span')
newElement.textContent='HEllo everyone'
myDiv.insertAdjacentHTML('beforebegin',newElement)
myDiv.insertAdjacentHTML('beforebegin',newElement)
 */

/**
 * remove child()-> opposite of apend
 */