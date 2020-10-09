const DetailsPresentation = ({ dish, guests }) => {
  return (
    <div class="detailsPresentation">
      <h1 class="detailsPresentation_title">{dish.title}</h1>
      <img src={dish.image} />
      <div class="detailsPresentation_price">
        <div>{`Price per serving: ${Math.round(dish.pricePerServing)}`} </div>
        <div>
          {`Total price for ${guests} guests: `}
          {Math.round(dish.pricePerServing * guests)}{" "}
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
