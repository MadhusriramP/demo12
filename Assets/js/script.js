fetch("./header.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("header").innerHTML = data;
    });

fetch("./footer.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("footer").innerHTML = data;
    });
// const myButton = document.getElementById('dw-arr-ln');
// const darrow1 = document.getElementById('d-arr-ln');
// const d1 = document.getElementById('d-1');
// const myButton2 = document.getElementById('dw-arr-ln2');
// const darrow2 = document.getElementById('d-arr-ln2');
// const d2 = document.getElementById('d-2');
// const mt = document.getElementById('mt');
// const mt2 = document.getElementById('mt2');
// // const chage = document.getElementById('chage');
// // const chage1 = document.getElementById('chage-1');
// myButton.addEventListener('click', () => {
//     darrow1.style.display = darrow1.style.display === 'none' ? 'block' : 'none';
//     d1.style.display = d1.style.display === 'block' ? 'none' : 'block';
//     //   chage1.style.display = chage1.style.display === 'none' ? 'block' : 'none';
//     //   chage.style.display = chage.style.display === 'block' ? 'none' : 'block';
//     mt.classList.add('mtactive');
//     mt2.classList.remove('mtactive');
// });
// myButton2.addEventListener('click', () => {
//     darrow2.style.display = darrow2.style.display === 'none' ? 'block' : 'none';
//     d2.style.display = d2.style.display === 'block' ? 'none' : 'block';
//     mt.classList.remove('mtactive');
//     mt2.classList.add('mtactive');
// });
