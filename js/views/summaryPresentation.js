const SummaryPresentation = ({ guests, dishes, nav, h }) => {
  const [navCallback, navLabel] = nav;
  const totalPrice = getMenuPrice(dishes, guests);
  return (
    <div title="summary">
      <button onClick={() => navCallback()}>{navLabel}</button>
      Dinner for: <span title="no. guests">{guests}</span> guests
      {dishes.map((dish) => (
        <div key={dish.id}>{dish.title}</div>
      ))}
      <div>{`Total: ${totalPrice}`}</div>
    </div>
  );
};
