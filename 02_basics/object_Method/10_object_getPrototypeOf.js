const carBluePrint = {
    color: "red",
    wheel: 4,
    door: 5,
    set: 6
}

console.log(carBluePrint);

const scorpioCar = Object.create(carBluePrint);

console.log(carBluePrint === Object.getPrototypeOf(scorpioCar));

console.log(Object.getPrototypeOf(scorpioCar));