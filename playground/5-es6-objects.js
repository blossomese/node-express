//object property shorthand

const name = 'Otonye'
const userAge = 27

const user = {
    name, userAge,
    location: 'Lagos'
}

console.log(user);

//object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 200,
    salesPrice: undefined
}


// const {label, stock, rating = 5} = product
// console.log(label, stock, rating);

const transaction = (type, { label, stock }) => {
    console.log(type,label, stock);
}

transaction('order', product)