let grade=prompt("Enter the marks:");
if(grade>80 && grade<=100){
    console.log("Grade A");
    
}
else if(grade>70 && grade<=79){
    console.log("Grade B");
    
}
else if(grade>60 && grade<=69){
    console.log("Grade C");
    
}
else if(grade>50 && grade<=59){
    console.log("Grade D");
    
}
else if(grade>0 && grade<=49){
    console.log("FAILED!");
    
}
else{
    console.log("INVALID MARKS!");
}
