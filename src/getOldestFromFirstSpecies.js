const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = data.employees.find((element) => element.id === id);
  const animalId = employee.responsibleFor[0];
  const animal = data.species.filter((element) => element.id === animalId);
  const oldestAnimal = animal[0].residents.reduce(
    ((acc, curr) => ((acc.age > curr.age) ? acc : curr)),
  );
  const { age, name, sex } = oldestAnimal;
  return [name, sex, age];
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
