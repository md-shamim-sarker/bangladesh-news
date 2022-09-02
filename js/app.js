// Fetching News Categories Name
const loadCategoriesName = () => {
    const options = {method: 'GET'};
    fetch('https://openapi.programming-hero.com/api/news/categories', options)
        .then(response => response.json())
        .then(response => showCategoriesName(response))
        .catch(err => console.error(err));
};

const showCategoriesName = response => {
    const categoryUl = document.getElementById('category-ul');
    response.data.news_category.forEach(element => {
        const categoryLi = document.createElement('li');
        // categoryLi.setAttribute('onclick', 'categoryClickHandler()');
        categoryLi.innerText = element.category_name;
        categoryUl.appendChild(categoryLi);
    });
};
loadCategoriesName();

// const categoryClickHandler = () => {
//     const options = {method: 'GET'};
//     fetch('https://openapi.programming-hero.com/api/news/categories', options)
//         .then(response => response.json())
//         .then(response => console.log(response.data))
//         .catch(err => console.error(err));
// };

// Fetching Category by Category ID
const loadCategoriesById = (category_id) => {
    const options = {method: 'GET'};
    fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`, options)
        .then(response => response.json())
        .then(response => showCategoriesById(response))
        .catch(err => console.error(err));
};

const showCategoriesById = response => {
    const sortCategoriesArray = response.data.sort((a, b) => {
        return b.total_view - a.total_view;
    });
    const parentMain = document.getElementById('parent-main');
    sortCategoriesArray.forEach(element => {
        const authorName = element.author.name ? element.author.name : 'Author Not Found';
        const totalView = element.total_view ? element.total_view : '0';
        const details = element.details.slice(0, 500) + '...';

        const childDiv = document.createElement('div');
        childDiv.classList.add('grid', 'p-2');
        childDiv.innerHTML = `
            <div>
                <img src="${element.thumbnail_url}" alt="thumbnail image" class="w-100">
            </div>
            <div class="p-2 d-flex flex-column justify-content-between">
                <div>
                    <h2>${element.title}</h2>
                    <p>${details}</p>
                </div>
                <div
                    class="d-flex flex-column flex-md-row flex-lg-row gap-3 gap-md-0 gap-lg-0 justify-content-between align-items-start me-0 me-md-4 me-lg-5">

                    <div class="d-flex gap-2 text-center">
                        <div>
                            <img src="${element.author.img}" alt="author_image" class="author-image">
                        </div>
                        <div>
                            <span>${authorName}</span><br>
                            <span>Date: ${element.author.published_date}</span>
                        </div>
                    </div>
                    <div class="d-flex gap-5">
                        <div>
                            <img src="./images/eye.svg" alt="">
                            ${totalView}
                        </div>
                        <div>
                            <img src="./images/star-fill.svg" alt="">
                            <img src="./images/star-fill.svg" alt="">
                            <img src="./images/star-fill.svg" alt="">
                            <img src="./images/star-fill.svg" alt="">
                            <img src="./images/star-half.svg" alt="">
                        </div>
                        <div>
                            <button class="border-0 bg-transparent">
                                <img src="./images/arrow-right.svg" alt="">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        parentMain.appendChild(childDiv);
    });
    console.log('The number of categories are: ' + sortCategoriesArray.length);
};
loadCategoriesById('01');


// Load News By Id
const loadNewsById = news_id => {
    const options = {method: 'GET'};
    fetch(`https://openapi.programming-hero.com/api/news/${news_id}`, options)
        .then(response => response.json())
        .then(response => showNewsById(response))
        .catch(err => console.error(err));
};

const showNewsById = response => {
    console.log(response.data[0].image_url);
    console.log(response.data[0].title);
    console.log(response.data[0].details);
};

// loadNewsById('2e78e5e0310c2e9adbb6efb1a263e745');