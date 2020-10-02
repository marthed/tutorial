class DinnerModel {
  constructor() {
    this.numberOfGuests = 2;
    this.subscribers = [];
  }

  addObserver(callback) {
    this.subscribers = this.subscribers.concat(callback);
  }

  notifyObservers() {
    this.subscribers.forEach((callback) => {
      try {
        callback();
      } catch (error) {
        console.log(error, "\n callback: " + callback);
      }
    });
  }
  setNumberOfGuests(numberOfGuests) {
    if (typeof numberOfGuests !== "number") {
      throw `${numberOfGuests} is not a number`;
    } else if (numberOfGuests <= 0) {
      throw "Number of guests can not be negative or zero";
    }
    this.numberOfGuests = numberOfGuests;
    this.notifyObservers();
  }

  getNumberOfGuests() {
    return this.numberOfGuests;
  }
}
