const animation = document.querySelectorAll("section>div");
const stopAnimationButton = document.querySelectorAll("nav>div")

console.log(animation);
console.log(animation[0].classList)

    stopAnimationButton.forEach(function (element) {
        element.addEventListener("click", function () {
            animation.forEach(function (element) {
                element.classList.replace('animation', 'inactiveAnimation');
            })
        });
    });


