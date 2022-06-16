var main = document.getElementById('main'); 
var input = document.querySelector('input');
const searchText = input.value;
 



function putName() {
    const h2 = document.createElement('h2');

    h2.innerHTML =  input.value ;
    main.appendChild(h2);
    console.log("i");
}


const url =  'https://api.github.com/users/'; 
async function searchProfile(url){
    fetch(url).then(res => res.json()).then(function (data) {
        console.log(data);
    });
    
}
    

