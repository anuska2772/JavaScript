

// function changeText(event){ 
//     console.log(event);
    
//     let fpara=document.getElementById('fpara');
//     fpara.textContent="Hello Babbar"
// }
// let fpara=document.getElementById('fpara');
// fpara.addEventListener('click',changeText)//optimal method
// fpara.removeEventListener('click',changeText)
//function added in addEventListener and remove ,
// should have the same object reference(means function name)

// let anchorElement= document.getElementById('fanchor')
// anchorElement.addEventListener('click', function(event){
//     event.preventDefault();
//     anchorElement.textContent="click done bhai"
// });

// let paras=document.querySelectorAll('p');
// for(let i=0; i<paras.length; i++){
//     let para=paras[i];
//     para.addEventListener('click', function(){
//         alert("You have clicked on para: "+i);
//     })
// }

// let paras=document.querySelectorAll('p')

function alertPara(event){
    // if(event.target.nodeName==='SPAN')
    {alert("You have clicked on para: "+event.target.textContent);}

}

// for(let i=0; i<paras.length; i++){
//     let para=paras[i]
//     para.addEventListener('click',alertPara);
// }


let myDiv=document.getElementById('wrapper');
document.addEventListener('click',alertPara);