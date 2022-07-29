const data = require('../data/zoo_data');

const weekDays = Object.keys(data.hours);
const animalList = data.species.map((element) => element.name);
console.log(weekDays, animalList);

const scheduleDay = Object.fromEntries(
  weekDays.map((day) => [
    day,
    {
      officeHour:
        day !== 'Monday'
          ? `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`
          : 'CLOSED',
      exhibition:
        day !== 'Monday'
          ? data.species.filter((animal) =>
            animal.availability.includes(day)).map((element) =>
            element.name)

          : 'The zoo will be closed!',
    },
  ]),
);

function getSchedule(scheduleTarget) {
  if (animalList.includes(scheduleTarget)) {
    return data.species.filter((element) =>
      Object.values(element).includes(scheduleTarget))[0].availability;
  }
  if (weekDays.includes(scheduleTarget)) {
    return Object.fromEntries([[scheduleTarget, scheduleDay[scheduleTarget]]]);
  }
  return scheduleDay;
}
console.log(getSchedule());

module.exports = getSchedule;

// const schedule = () => {
//   const specie = data.species;
//   const scheduleDay = days.forEach((day, index) => {
//     const date = data.hours;
//       return days[index] = {
//       'officeHour': `Open from ${date[day].open}am until ${date[day].close}pm `,
//       'exhibition': specie.some((element) => element.availability.includes(day))
//     }
//   });
//   return scheduleDay
// }
// console.log(schedule())
// const receivedData = (parametro) => {
//   if (days.includes(parametro)){
//     return data.species.some((date) => date.species.includes(param));
//   }
//   if (!parametro || data.species.parametro.length = 0){
//     return schedule;

//   }
// }
// const daySchedule = Object.fromEntries(
//   days.map((element) => [
//     element,
//     {
//       officeHour:
//         element !== 'Monday'
//           ? `Open from ${hours[element].open}am until ${hours[element].close}pm`
//           : 'CLOSED',
//       exhibition:
//         element !== 'Monday'
//           ? species
//             .filter((animal) => animal.availability.includes(element))
//             .map((animal) => animal.name)
//           : 'The zoo will be closed!',
//     },
//   ]),
// );
