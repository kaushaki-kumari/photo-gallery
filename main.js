const photoContainer = document.querySelector('.photo-container');
const modal = document.querySelector('#imageModal');
const slider = document.querySelector('.slider');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const closeModalButton = document.querySelector('.icon'); 
const frameWidth = 600;
let sliderNumber = 1;

const imagesArray = [
    'photos/photo-01.jpg',
    'photos/photos-02.png',
    'photos/photo-03.png',
    'photos/photo-04.png',
    'photos/photo-05.jpg',
    'photos/photo-06.jpg',
    'photos/photo-07.png',
    'photos/photo-08.avif',
    'photos/photo-09.jpeg',
    'photos/photo-10.jpg',
    'photos/photo-11.webp',
    'photos/photo-12.png',
    'photos/photo-13.jpg',
    'photos/photo-14.png',
    'photos/photo-15.jpg',
    'photos/photo-16.jpg',
    'photos/photo-17.jpg',
    'photos/photo-18.jpg',
    'photos/photo-19.jpg',
    'photos/photo-20.jpg'
];

imagesArray.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Image ${index + 1}`;
    img.classList.add('thumbnail');
    img.addEventListener('click', () => openModal(index)); 
    photoContainer.appendChild(img);

    const slideImg = document.createElement('img');
    slideImg.src = src;
    slideImg.alt = `Image ${index + 1}`;
    slideImg.classList.add('images');
    slider.appendChild(slideImg);
});

/*  dots slide  */
const dots = document.querySelector('.dots');

for(let i = 0 ; i<imagesArray.length; i++){
    const div = document.createElement('div');
    div.className = 'button'
    dots.appendChild(div);
};

const buttons = document.querySelectorAll('.button');


const resetBg = () =>{
    buttons.forEach((button)=>{
        button.style.backgroundColor = 'transparent' ;
    });
};

const updateDots = () => {
    resetBg();
    buttons[sliderNumber - 1].style.backgroundColor = 'white';
};

buttons.forEach((button,i) =>{
     button.addEventListener('click' , ()=>{
        slider.style.transform = `translateX(-${i*frameWidth}px)`;
        sliderNumber= i+1;
        updateDots();
    })
})

const openModal = (index) => {
    sliderNumber = index + 1; 
    updateSliderPosition();
    updateArrows();
    modal.style.display = 'flex';
};

const closeModal = () => {
    modal.style.display = 'none'; 
};

closeModalButton.addEventListener('click', () => {
    closeModal();
});

const updateSliderPosition = () => {
    slider.style.transform = `translateX(-${(sliderNumber - 1) * frameWidth}px)`;
    updateDots();
};

const updateArrows = () => {
    prev.style.display = sliderNumber === 1 ? 'none' : 'block';
    next.style.display = sliderNumber === imagesArray.length ? 'none' : 'block';
};

/*arrow */
next.addEventListener('click', () => {
    if (sliderNumber < imagesArray.length) {
        sliderNumber++;
        updateSliderPosition();
        updateArrows();
    }
});

prev.addEventListener('click', () => {
    if (sliderNumber > 1) {
        sliderNumber--;
        updateSliderPosition();
        updateArrows();
    }
});

updateArrows();
