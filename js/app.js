$(document).ready(function () {
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function () {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});

//   navbar
const hamburgerMenu = document.querySelector('.line');
const navList = document.querySelector('.nav-list');
hamburgerMenu.addEventListener('click', () => {
    navList.classList.toggle('add-nav-list');
})
//   end of navbar