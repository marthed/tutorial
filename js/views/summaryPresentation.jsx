const SummaryPresentation = ({ guests, dishes }) => {
  const totalPrice = getMenuPrice(dishes, guests);
  return (
    <div title="summary">
      Dinner for: <span title="no. guests">{guests}</span> guests
      {dishes.map((dish) => (
        <div key={dish.id}>{dish.title}</div>
      ))}
      <div>{`Total: ${totalPrice}`}</div>
    </div>
  );
};
