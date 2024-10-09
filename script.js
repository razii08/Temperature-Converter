const celsius=document.getElementById("celsius");
const fahrenheit=document.getElementById("fahrenheit");
const result=document.getElementById("result");
const label=document.getElementById("label");

let temp;

function convert() {
    if (celsius.checked) {
        temp=Number(label.value);
        temp=temp*9/5+32;
        result.textContent=temp.toFixed(1)+"C"


    }else if(fahrenheit.checked){
        temp=Number(label.value);
        temp=(temp-32)*(5/9);
        result.textContent=temp.toFixed(1)+"F"

    }else{
        result.textContent="Please Select one"
    }
}