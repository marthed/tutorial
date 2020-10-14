const DetailsPresentation = ({
  dish,
  guests,
  price,
  dishAdded,
  isDishInMenu,
  cancel,
  addLabel,
}) => {
  const [navCallback, navLabel] = cancel;
  const dishPrice = React.useMemo(() => getDishPrice(dish, guests), [
    dish,
    guests,
  ]);

  return (
    <div class="detailsPresentation">
      <button onClick={() => navCallback()}>{navLabel}</button>
      <button disabled={isDishInMenu} onClick={() => dishAdded(dish)}>
        {addLabel}
      </button>
      <h1 class="detailsPresentation_title">{dish.title}</h1>
      <img src={dish.image} />
      <div class="detailsPresentation_price">
        <div>{`Price per serving: ${Math.round(dish.pricePerServing)}`} </div>
        <div>
          {`Total price for ${guests} guests: `}
          {dishPrice}
        </div>
      </div>
      <ul>
        {dish.extendedIngredients.map((ing) => (
          <li key={ing.id}>{ing.originalString}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <span>{dish.instructions}</span>
      <div>
        <a href={dish.sourceUrl}>More information</a>
      </div>
    </div>
  );
};
