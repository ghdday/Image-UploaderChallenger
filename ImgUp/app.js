const inputFile = document.querySelector('#pic_input');
const picImg = document.querySelector('.picture__img')
const picText = 'Choose an Image';

picImg.innerHTML = picText;

inputFile.addEventListener('change', function(e){
    const inputTarget = e.target;
    const file = inputTarget.files[0];
 
if (file){
        const reader = new FileReader ();

        reader.addEventListener("load", function(e){
            const readerTarget = e.target;

            const imgs = document.createElement("img");
            imgs.src = readerTarget.result;
            imgs.classList.add('picture__img');

        picImg.innerHTML = "";
        picImg.appendChild(imgs);
        });
        reader.readAsDataURL(file);
    } else {
              picImg.innerHTML = picText;
    }
});