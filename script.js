function calculate(v, v1, v2){
    let res;
    if(v =="triangle"){
        res = 0.5 * v1.value * v2.value;
    }
    else if(v== "rectangle" || v == "Parallelogram"){
        res = v1.value * v2.value;
    }
    document.getElementById('output').innerHTML += `${v} ${res} <br>`;
}

function randomColor() {
    let color = [];
    for (let i = 0; i < 4; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 
  
function colorchange(val){
    let x = document.getElementById(val);
    console.log(x);
    x.style.backgroundColor = randomColor() ;
}