import "./styles/style.css";

const imageSlider = () => {
    const imageSliderContainer = document.querySelector(".slider");
    const imageSlides = document.querySelectorAll(".slide");

    const nextImageSlide = document.querySelector(".btn-next");
    const prevImageSlide = document.querySelector(".btn-prev");

    const totalSlides = imageSlides.length;
    let currentImageSlide = 0;

    // making its name long so it doesn't casuses naming conflict as user wont see it
    const dotsContainer = document.createElement("div");
    dotsContainer.classList.add("bottom-nav-dots-container");

    const createDot = () => {
        const newDot = document.createElement("div");
        const newDotButton = document.createElement("button");

        newDot.classList.add(".bottom-nav-dots");
        newDotButton.classList.add("btn-nav-dots");

        newDotButton.type = "button";

        newDot.appendChild(newDotButton);
        dotsContainer.appendChild(newDot);

        return newDot;
    };

    const dots = [];
    for (let i = 0; i < Math.min(totalSlides, 5); i += 1) {
        dots.push(createDot());
    }

    imageSliderContainer.appendChild(dotsContainer);

    const updateDotPosition = (position) => {
        dots.forEach((dot) => {
            dot.classList.remove("btn-selected-dot");
        });

        dots[position].classList.add("btn-selected-dot");
    };

    const updateSlidePosition = () => {
        if (totalSlides <= 5) updateDotPosition(currentImageSlide);
        else if (currentImageSlide <= 2) updateDotPosition(currentImageSlide);
        else if (currentImageSlide >= totalSlides - 3)
            updateDotPosition(5 - (totalSlides - currentImageSlide));
        else updateDotPosition(2);

        imageSlides.forEach((slide, index) => {
            // eslint-disable-next-line no-param-reassign
            slide.style.transform = `translateX(${
                (index - currentImageSlide) * 100
            }%)`;
        });
    };

    const changeSlide = () => {
        currentImageSlide = (currentImageSlide + 1) % totalSlides;
        updateSlidePosition();
    };

    // Slideshow time is 5 sec
    const slideShowTimeInterval = 5000;

    const resetTime = (timer) => {
        clearInterval(timer);
        return setInterval(changeSlide, slideShowTimeInterval);
    };

    let timer = setInterval(changeSlide, slideShowTimeInterval);

    if (totalSlides <= 5) {
        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                currentImageSlide = index;
                updateSlidePosition();
                timer = resetTime(timer);
            });
        });
    } else {
        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                if (
                    currentImageSlide >= 2 &&
                    currentImageSlide <= totalSlides - 3
                )
                    currentImageSlide = index - 2 + currentImageSlide;
                else if (currentImageSlide <= 2) currentImageSlide = index;
                else if (currentImageSlide >= totalSlides - 3)
                    currentImageSlide = totalSlides - 5 + index;

                updateSlidePosition();
                timer = resetTime(timer);
            });
        });
    }

    // intialize slide position
    updateSlidePosition();

    nextImageSlide.addEventListener("click", () => {
        currentImageSlide = (currentImageSlide + 1) % totalSlides;
        updateSlidePosition();
        timer = resetTime(timer);
    });

    prevImageSlide.addEventListener("click", () => {
        currentImageSlide = (currentImageSlide - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
        timer = resetTime(timer);
    });
};

export default imageSlider;
