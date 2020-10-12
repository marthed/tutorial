const types = ["starter", "main course", "dessert"];
function dishType(dish) {
  const tp = dish.dishTypes.filter((type) => types.includes(type));
  if (tp.length) {
    return tp[0];
  }
  return "";
}

function compareDishes(a, b) {
  let ai = types.indexOf(dishType(a));
  let bi = types.indexOf(dishType(b));
  if (ai < bi) {
    return -1;
  } else if (ai > bi) {
    return 1;
  }
  return 0;
}

const SidebarPresentation = ({ guests, setGuests, dishes, removeDish }) => {
  const sortedDishes = dishes.sort(compareDishes);

  const totalPrice = getMenuPrice(dishes, guests);

  return (
    <div>
      <button onClick={() => setGuests(guests - 1)} disabled={guests < 2}>
        -
      </button>
      {` ${guests} `}
      <button onClick={() => setGuests(guests + 1)}>+</button>
      {sortedDishes.map((dish) => (
        <div key={dish.id} class="sidebarPresentation_dish">
          <div class="sidebarPresentation_dish_buttonContainer">
            <button onClick={() => removeDish(dish)}>X</button>
          </div>
          <table class="sidebarPresentation_dish_infoContainer">
            <tbody>
              <tr>
                <td>{dish.title}</td>
                <td>{dish.dishTypes[0]}</td>
                <td>{getDishPrice(dish, guests)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
      <div style={{ fontWeight: "bold" }}>{`Total: ${totalPrice}`}</div>
    </div>
  );
};
