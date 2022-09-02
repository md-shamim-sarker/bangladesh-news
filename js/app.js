// Fetching News Categories

const loadCategoriesName = () => {
    const options = {method: 'GET'};
    fetch('https://openapi.programming-hero.com/api/news/categories', options)
        .then(response => response.json())
        .then(response => showCategoriesName(response))
        .catch(err => console.error(err));
};

const showCategoriesName = response => {
    response.data.news_category.forEach(element => {
        console.log(element.category_name);
    });
};

loadCategoriesName();