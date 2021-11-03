
const section = document.querySelector('.section');
const address = document.querySelector('.address');
const city = document.querySelector('.city');
const btn = document.querySelector('button');
const postCode = document.querySelector('.postCode');
const key = 'Agy5Iv0Z2Byk0q00HMGh';


//let url = 'https://api.postit.lt/v2/?city='+city+'&address='+address+'&key='+key

btn.onclick = 'addPost()';
function addPost() {
    address = 'batas';

}


// console.log(url);
//
// async function getData(){
//     let response = await fetch(url);
//     let data = response.json();
//     return data;
// }
// getData()
//     .then(data => console.log(data));

//     if (total = 0){
//         postCode.value = data.data[0].post_code;
//     }else {
//
//     let p = document.createElement('p');
//     p.innerText = 'Netinkamas adresas';
//     section.appendChild(p);
//     console.log("negerai");
// }


