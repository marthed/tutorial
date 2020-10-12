const Summary = ({ model }) => {
  const root = h("div");
  root.append(
    h(SummaryPresentation, {
      guests: model.getNumberOfGuests(),
      dishes: model.dishes,
    })
  );
  model.addObserver(() => {
    root.removeChild(root.childNodes[0]);
    root.append(
      h(SummaryPresentation, {
        guests: model.getNumberOfGuests(),
        dishes: model.dishes,
      })
    );
  });
  return root;
};
