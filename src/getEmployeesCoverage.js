const data = require('../data/zoo_data');

const getSpecies = (id) =>
  data.species.find((element) => element.id === id);

const allEmployees = data.employees.map((element) => (
  {
    id: element.id,
    fullName: `${element.firstName} ${element.lastName}`,
    species: element.responsibleFor.map((animalId) => getSpecies(animalId).name),
    locations: element.responsibleFor.map((animalId) => getSpecies(animalId).location),
  }));

function getEmployeesCoverage(object) {
  if (!object) return allEmployees;

  const find = allEmployees.find((element) =>
    element.fullName.includes(Object.values(object)[0])
    || element.id.includes(Object.values(object)[0]));

  if (!find) {
    throw new Error('Informações inválidas');
  }
  return find;
}
console.log(getEmployeesCoverage({ name: 'Nelson' }));

module.exports = getEmployeesCoverage;
