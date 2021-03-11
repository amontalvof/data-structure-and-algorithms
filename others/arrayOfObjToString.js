const valor = {
    author: 'Kyle Simpson',
    categories: [{ label: 'Academic' }, { label: 'Fantasy' }],
    description: 'hjhk',
    name: "You don't know JS",
};

const { categories } = valor;

const newCategories = categories.reduce((accumulator, currentValue) => {
    console.log(accumulator);
    return [...accumulator, currentValue.label];
}, []);

const stringCategories = String(newCategories);
const newValue = { ...valor, categories: stringCategories };

console.log(newValue);
