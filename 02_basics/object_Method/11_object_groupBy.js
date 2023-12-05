const drinkByPerson = [
    {
        name: "A",
        drinkType: "Chai",
        isEmpty: true
    },
    {
        name: "B",
        drinkType: "Coffe",
        isEmpty: true
    },
    {
        name: "C",
        drinkType: "Chai",
        isEmpty: false
    },
    {
        name: "D",
        drinkType: "Chai",
        isEmpty: true
    },
];

// Solution

console.log(Object.groupBy(drinkByPerson.filter(items => items.isEmpty).map(items => ({name : items.name, Type : items.drinkType})), ({Type}) => Type));
