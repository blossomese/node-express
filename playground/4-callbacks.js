// setTimeout(() => {
// console.log('2 seconds are up');
// }, 2000)

// const names = ['Andreww', 'Tonye', 'Wendy']
// const shortNames = names.filter((name) => {
//     return name.length <= 5
// })
// console.log(shortNames);

// const geocode = (address, callback) => {
//    setTimeout(() => {
//     const data = {
//         latitude: 0,
//         longitude: 0
//     }
//    callback(data)
//    }, 3000)
// }

//  geocode('Philadelphia', (data)=> {
//     console.log(data);
//  })

const add =
  (1,
  4,
  (sum) => {
    setTimeout(() => {
      const data = 1 + 4;
      sum(data);
    }, 2000);
  });
add((data) => {
  console.log(data);
});
