const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((specieId) => ids.find((id) => id === specieId.id));
}

module.exports = getSpeciesByIds;
