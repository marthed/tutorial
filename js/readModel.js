function readModel() {
  const modelString = localStorage.getItem("dinnerModel");

  const { guests, dishes, currentDish } = JSON.parse(modelString) || {};
  return new DinnerModel(guests, dishes, currentDish);
}
