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
