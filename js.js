const images = [{
    url: "'img/Rostov-on-Don, Admiral.png'",
    title: "Rostov-on-Don, Admiral",
    city: "Rostov-on-Don<br> LCD admiral",
    area: "81 m2",
    time: "3.5 months"
}, {
    url: "'img/Sochi_Thieves.png'",
    title: "Sochi Thieves",
    city: "Sochi<br> Thieves",
    area: "105 m2",
    time: "4 months"
}, {
    url: "'img/Rostov-on-Don_Patriotic.png'",
    title: "Rostov-on-Don Patriotic",
    city: "Rostov-on-Don<br> Patriotic",
    area: "93 m2",
    time: "3 months"
}];

function initSlider() {
    if (!images || !images.length) return;

    let sliderImages = document.querySelector(".slider__images");
    let sliderArrows = document.querySelector(".slider__navig");
    let sliderDots = document.querySelector(".slider__dots");
    let sliderTitle = document.querySelector(".slider__titles");
    let infoCity = document.querySelector(".info__city");
    let infoArea = document.querySelector(".info__area");
    let infoTime = document.querySelector(".info__time");

    sliderActive();


    sliderArrow();

    function sliderActive() {
        images.forEach((image, index) => {
            let imageDiv = `<div class="image n${index} ${index === 0 ? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
            sliderImages.innerHTML += imageDiv;

            let dotsDiv = `<div class="dot_item n${index} ${index === 0 ? "dot__active" : ""}" data-index="${index}"></div>`;
            sliderDots.innerHTML += dotsDiv;

            sliderDots.querySelectorAll(".dot_item").forEach(dot => {
                dot.addEventListener("click", function() {
                  moveSlider(this.dataset.index);
                })
              })

            let titlesDiv = `<div class="slider__title n${index} ${index === 0 ? "title__active" : ""}" data-index="${index}">${images[index].title}</div>`;
            sliderTitle.innerHTML += titlesDiv;

            sliderTitle.querySelectorAll(".slider__title").forEach(title => {
                title.addEventListener("click", function() {
                    moveSlider(this.dataset.index);
                })
            })

            let cityDiv = `<p class="cards__text n${index} ${index === 0 ? "cards__active" : ""}" data-index="${index}">${images[index].city}</p>`;
            infoCity.innerHTML += cityDiv;

            let areaDiv = `<p class="cards__text n${index} ${index === 0 ? "cards__active" : ""}" data-index="${index}">${images[index].area}</p>`;
            infoArea.innerHTML += areaDiv;

            let timeDiv = `<p class="cards__text n${index} ${index === 0 ? "cards__active" : ""}" data-index="${index}">${images[index].time}</p>`;
            infoTime.innerHTML += timeDiv;
        })


    }

    

    function sliderArrow() {
        sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
            arrow.addEventListener("click", function () {
                let curNumber = +sliderImages.querySelector(".active").dataset.index;
                let nextNumber;
                if (arrow.classList.contains("left")) {
                    nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
                } else {
                    nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
                }
                moveSlider(nextNumber);
            })
        })
    }


    function moveSlider(num) {
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(".n" + num).classList.add("active");
        sliderDots.querySelector(".dot__active").classList.remove("dot__active");
        sliderDots.querySelector(".n" + num).classList.add("dot__active");
        sliderTitle.querySelector(".title__active").classList.remove("title__active");
        sliderTitle.querySelector(".n" + num).classList.add("title__active");
        infoCity.querySelector(".cards__active").classList.remove("cards__active");
        infoCity.querySelector(".n" + num).classList.add("cards__active");
        infoArea.querySelector(".cards__active").classList.remove("cards__active");
        infoArea.querySelector(".n" + num).classList.add("cards__active");
        infoTime.querySelector(".cards__active").classList.remove("cards__active");
        infoTime.querySelector(".n" + num).classList.add("cards__active");
    }
}

document.addEventListener("DOMContentLoaded", initSlider);