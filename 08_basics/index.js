//changing css->
/**
 * external
 * inline(highest priority)
 * internal
 * 
 * .cssstyle-> get-> let paraElement=document.getElementById('spara')
console.log(paraElement.style)
, set-> paraElement.style.backgroundColor='white'
not multiple inline properties

.cssText-> get-> secDiv.style.cssText;, set->secDiv.style.cssText="background-color:black; color: white; padding:1.5rem";
-> multiple inline styles 
 * 

NOW  we might have to add id, or classes
**setAtrribute()-> class name change set,
if old val present, updates it to the latest one 
by entirely truncating the old value

get classname=> fpara.className
set classname=> fpara.className="hehe, hehe"

.classList-> get-> in the form of array/list
-> can .add(), .remove(), .contains(), .toggle()



 */