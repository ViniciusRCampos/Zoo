const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (typeof animal !== 'undefined') {
    const { specie, sex } = animal;
    const element = data.species.find((animalName) => animalName.name === specie);
    if (typeof sex !== 'undefined') {
      const elementSex = element.residents.filter((animalSex) => animalSex.sex === sex);
      return elementSex.length;
    }
    return element.residents.length;
  }
  const animalCount = {};
  data.species.forEach((animalName) => {
    animalCount[animalName.name] = animalName.residents.length;
  });
  return animalCount;
}

// console.log(countAnimals());
// console.log(countAnimals({ specie: 'lions' }));
console.log(countAnimals({ specie: 'elephants' }));

module.exports = countAnimals;
