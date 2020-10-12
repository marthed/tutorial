function getDishPrice(dish, numberOfGuests) {
  return dish ? Math.round(dish.pricePerServing * numberOfGuests) : 0;
}

function getMenuPrice(dishes, numberOfGuests) {
  return dishes
    ? dishes.reduce(
        (accPrice, dish) => accPrice + getDishPrice(dish, numberOfGuests),
        0
      )
    : 0;
}
