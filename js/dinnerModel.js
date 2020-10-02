class DinnerModel {
  constructor() {
    this.numberOfGuests = 2;
  }
  setNumberOfGuests(numberOfGuests) {
    if (typeof numberOfGuests !== "number") {
      throw `${numberOfGuests} is not a number`;
    } else if (numberOfGuests <= 0) {
      throw "Number of guests can not be negative or zero";
    }
    this.numberOfGuests = numberOfGuests;
  }

  getNumberOfGuests() {
    return this.numberOfGuests;
  }
}
