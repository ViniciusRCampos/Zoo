const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) { return 0; }
  const getminor = entrants.filter((element) => element.age < 18).length;
  const getadult = entrants.filter((element) => element.age >= 18 && element.age < 50).length;
  const getsenior = entrants.filter((element) => element.age >= 50).length;
  return { child: getminor, adult: getadult, senior: getsenior };
}

function calculateEntry(entrants) {
  const array = countEntrants(entrants);
  if (array === 0) { return 0; }
  const price = data.prices;
  return (array.child * price.child + array.adult * price.adult + array.senior * price.senior);
}

module.exports = { calculateEntry, countEntrants };
