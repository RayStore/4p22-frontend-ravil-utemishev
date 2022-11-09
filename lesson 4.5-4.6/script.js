'use strict';


// const ChelseaSquad = [
//     {
//         firstName: 'Kepa',
//         lastName: 'Arrizabalaga'
//     },
//     {
//         firstName: 'Reece',
//         lastName: 'James'
//     },
//     {
//         firstName: 'Cesar',
//         lastName: 'Azpilicueta'
//     },
// ];

// const filteredArray = ChelseaSquad.filter((item) => {
//     return item.lastName[0] === 'A';
// });

// console.log(filteredArray); - фильтрование значения, например, по начальной букве фамилии

// function deleteFromArray(array = [], index = 0) {
//     return array.filter((item, innerIndex) => {
//         return index !== innerIndex;
//     })
// };

function deleteFromArray(array = [], index = 0) {//         - сокращённый вид стрелочной функции
    return array.filter((item, innerIndex) => index !== innerIndex);
};

const chelseaSquad = [
    {
        firstName: 'Kepa',
        lastName: 'Arrizabalaga'
    },
    {
        firstName: 'Reece',
        lastName: 'James'
    },
    {
        firstName: 'Cesar',
        lastName: 'Azpilicueta'
    },
];

// const changedArray = deleteFromArray(chelseaSquad, 1);

// console.log(changedArray); 

// const changedArray = chelseaSquad.map((item) => {
//     return {
//         name: item.firstName,
//         surname: item.lastName
//     }
// });

// console.log(changedArray); 

const changedArray = chelseaSquad.map((item) => {
    return `${item.firstName} ${item.lastName}`;
});

console.log(changedArray); 