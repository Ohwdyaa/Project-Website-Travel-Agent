const login = document.getElementById('login');
const loginm = document.querySelector('.main div.container')
const main = document.querySelector('div.main')

main.addEventListener("click", function(e){
    if (e.target.className=='tombol') {
        loginm.style.display = 'flex'
    } else if (e.target.className=='close'){
        loginm.style.display = 'none'
    } else{

    }
});



// main.addEventListener("click", function(e){
    
// });