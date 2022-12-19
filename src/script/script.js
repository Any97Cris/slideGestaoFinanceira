let totalSlides = document.querySelectorAll('.sliderItens').length;

document.querySelector('.sliderWidth').style.width = `calc(100vw * ${totalSlides})`;
document.querySelector('.sliderBtn').style.height = `${document.querySelector('.slider').clientHeight}px`;
