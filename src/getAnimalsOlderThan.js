const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const speciesName = data.species.find((animalName) => animal === animalName.name);
  const residentsAge = speciesName.residents.every((residents) => residents.age >= age);
  return residentsAge;
}
console.log(getAnimalsOlderThan('lions', 3));
module.exports = getAnimalsOlderThan;
