// alert('OK')
const button=document.getElementById("btn");
const input=document.getElementById("inputCity")

const cityname=document.getElementById("cityName")
const citytime=document.getElementById("cityTime")
const cityTemp=document.getElementById("city-temp")

async function getData(cityName){
    const promise= await fetch(
    `http://api.weatherapi.com/v1/current.json?key=bc8275c6cffe4272b54191546251607&q=${cityName}&aqi=yes`
);
    return await promise.json();
}
button.addEventListener('click', async ()=>{
    const value=(input.value);
    const result=await getData(value);
    // console.log(result);
    cityname.innerText=`${result.location.name}, ${result.location.region}- ${result.location.country}`
    cityTemp.innerText=`${result.current.temp_c} Celsius or ${result.current.temp_f} Farenheit`
});

