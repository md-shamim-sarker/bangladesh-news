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
        categoryLi.innerText = element.category_name;
        categoryUl.appendChild(categoryLi);
    });
};
loadCategoriesName();



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
    sortCategoriesArray.forEach(element => {
        console.log(element.thumbnail_url);
        console.log(element.title);
        console.log(element.details);
        console.log(element.author.name);
        console.log(element.author.published_date);
        console.log(element.author.img);
        console.log(element.total_view);
        console.log(element.rating.number);
    });
    console.log('The number of categories are: ' + sortCategoriesArray.length);
};
// loadCategoriesById('02');


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