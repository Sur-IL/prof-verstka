'use strict';

let filterPopup = document.querySelector('.filter__popup');
let filtersLabel = document.querySelector('.filters__label');
let filterBars = document.querySelector('.filter__bars');

filtersLabel.addEventListener('click', function () {
    filterPopup.classList.toggle('filter__popup_hidden');
    filtersLabel.classList.toggle('filters__label_pink');
    filterBars.classList.toggle('filter__bars_pink');

    if (filterBars.getAttribute('src') === 'img/catalog/filter-bars.svg') {
        filterBars.setAttribute('src', 'img/catalog/filter-bars-pink.svg')
    } else {
        filterBars.setAttribute('src', 'img/catalog/filter-bars.svg')
    }
});


let filterCategoryHeading = document.querySelectorAll('.filter__categoryHeading');

filterCategoryHeading.forEach(function (header) {
    header.addEventListener('click', function (event) {
        event.target.nextElementSibling.classList.toggle('hiddenLinks');
    })
});

let filterSizeWrap = document.querySelector('.filterSizeWrap');
let filterSizeBox = document.querySelector('.filterSizeBox');

filterSizeWrap.addEventListener('click', function () {
    filterSizeBox.classList.toggle('hidden');
});