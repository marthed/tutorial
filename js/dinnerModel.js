class DinnerModel {
  constructor(guests = 2, dishes = [], currentDish = null) {
    this.numberOfGuests = guests;
    this.subscribers = [];
    this.dishes = dishes;
    this.currentDish = currentDish;

    this.addObserver(() => {
      localStorage.setItem(
        "dinnerModel",
        JSON.stringify({
          guests: this.numberOfGuests,
          dishes: this.dishes,
          currentDish: this.currentDish,
        })
      );
    });
  }

  removeObserver(observer) {
    this.subscribers = this.subscribers.filter((o) => o === observer);
  }

  addObserver(observer) {
    this.subscribers = this.subscribers.concat(observer);
    return () => this.removeObserver(observer);
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

  getDishDetails(id) {
    return DishSource.getDishDetails(id);
  }

  getMenu() {
    return [...this.dishes];
  }

  addToMenu(dish) {
    if (this.dishes.some((d) => d.id === dish.id)) {
      throw new Error(
        `Can't add dish with id ${dish.id}. Aldready added in menu`
      );
      return;
    }
    this.dishes = [...this.dishes, dish];
    this.notifyObservers();
  }

  removeFromMenu(dish) {
    this.dishes = this.dishes.filter((d) => d.id !== dish.id);
    this.notifyObservers();
  }

  setCurrentDish(id) {
    this.currentDish = id;
    this.notifyObservers();
  }

  myExampleFunction(example) {
    console.log("some new code")
    this.example = example;
  }

}
