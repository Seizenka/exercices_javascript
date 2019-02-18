let img = document.querySelectorAll('img');

for (let i = 0; i < img.length; i++) {

    img[i].addEventListener('mouseover', changeImages); 
    console.log(img[i]);
    function changeImages() {

        img[i].setAttribute("src", `images/image${i+1}_2.jpg`);

    }

    img[i].addEventListener('mouseout', reverse); 
    console.log(img[i]);
    function reverse() {

        img[i].setAttribute("src", `images/image${i+1}.jpg`);

    }

}