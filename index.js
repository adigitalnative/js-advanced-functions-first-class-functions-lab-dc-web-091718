const returnFirstTwoDrivers = function (drivers) {
  return [drivers[0], drivers[1]];
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplier) {
  return function (number) {
    return number * multiplier;
  }
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = function (drivers, whichDrivers) {
    return whichDrivers(drivers);
};