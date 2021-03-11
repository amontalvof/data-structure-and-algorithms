const categoriesMap = {
    Fantasy: 'option-1',
    Adventure: 'option-2',
    Classics: 'option-3',
    Academic: 'option-4',
};

const value = {
    author: 'Robert C. Martin',
    categories: 'Classics,Academic',
    description: 'fdfdafadfda',
    id: 'gZDRP5wuTg4CrmVywaTV',
    name: 'Clean Code',
};

const categories = value.categories.split(',');

const arrayCategories = categories.reduce((accumulator, currentValue) => {
    return [
        ...accumulator,
        { label: currentValue, name: categoriesMap[currentValue] },
    ];
}, []);

const newValue = { ...value, categories: arrayCategories };

console.log(newValue);
