var main = document.getElementById('main'); 
var input = document.querySelector('input');
 var btn = document.querySelector('button');

 



// function putName() {
//     const h2 = document.createElement('h2');

//     h2.innerHTML =  input.value ;
//     main.appendChild(h2);
//     console.log("i");
// }


async function searchProfile(url) {
    //const url =  'https://api.github.com/users/'; 

    fetch(url).then(res => res.json()).then(function (data) {
        console.log(data);

        // creeate the elements image +  login + name + bio  : so we gonna create 4 elements
        
        const login = document.createElement('h1');
        const name = document.createElement('h2');
        const bio = document.createElement('p');
        const profileImage = document.createElement('img');

        // now we gonna append all these elements to the main element
        
        main.appendChild(login);
        main.appendChild(name);
        main.appendChild(bio);
        main.appendChild(profileImage);


        // now we gonna fetch data into these elements from the gitusers api 

        login.innerHTML = ` login : ${data.login}`;
        name.innerHTML = `name : ${data.name}`;
        bio.innerHTML = ` bio : ${data.bio}`; 
        profileImage.src = `${data.avatar_url}`;



        // img.src = `${data.avatar_url}`;
        // // Putting the Api data on the elements.
        // h3.innerHTML = ` Login : <a href="${data.html_url}" target="_blank">${data.login}</a>`;
        // h2.innerHTML = ` Name : ${data.name}`;
        // p.innerHTML = `Bio : ${data.bio}`

    });
}



     const apiurl = 'https://api.github.com/users/';
    



    btn.addEventListener('click', (e) => {
        console.log("hello");
        e.preventDefault();
        main.innerHTML = '';
            const searchText = input.value;

       console.log(apiurl + searchText);
            searchProfile(apiurl + searchText);
            console.log(apiurl + searchText);
        
        // else 
        //  console.log("error");

            
    });



    

    


        /* *******   Let-var-const ********* */ 

/* let variable compilateur yefhmeha w yarafha
ken f wost block eli deja saret fih el déclaration mteha */
{
    let nom = "ahmed";
    const pi = 3.14; 
    var number1 = 14;
    console.log(nom);
    console.log(pi);
}

// el var f ay blasa ndéclariwha el copilateur yarafha
// const = var ama nejmou ken nchoufouha on n'a pas le droit de modifier sa valeur



/*  type de donnée : array */
var tab = new Array(10);
var tab2 = Array(10);
var tab3 = []; 

// les fontions

function esmfonction() {
    console.log("helo");
}

function getName(nom) {
    return "welcome" + nom;
}

// arrow function

var factorielle =
    function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1)
    };

var fact = n => n < 2 ? 1 : n * fact(n - 1); 