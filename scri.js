let cel = document.getElementById('cel');
let fah = document.getElementById('fah');
let kel = document.getElementById('kel');

cel.addEventListener('input', function(){
    if(this.value !="") {
        let c = this.value;
        let f = (c*9/5) + 32;
        let k = c + 273.15;

        fah.value = f;
        kel.value = k;
    }
});


fah.addEventListener('input', function(){
    if(this.value != ""){
    let f = this.value;
    let c = (f - 32) * 5/9;
    let k = c + 273.15;
  
    cel.value = c;
    kel.value = k;
    } 
});

kel.addEventListener('input', function(){
    if(this.value != ""){
    let k = this.value;
    let c = k - 273.15;
    let f = (k - 273.15) * 9/5 + 32;
   
    cel.value = c;
    fah.value = f;
    } 
});
