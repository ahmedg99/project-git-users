var main = document.getElementById('main'); 
var input = document.querySelector('input');

// const nom = input.value;



function putName() {
    const h2 = document.createElement('h2');

    h2.innerHTML =  input.value ;
    main.appendChild(h2);
    console.log("i");

}

