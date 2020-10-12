const Sidebar = ({ model }) => {
  const root = h("div");
  root.append(
    h(SidebarPresentation, {
      guests: model.getNumberOfGuests(),
      setGuests: (g) => model.setNumberOfGuests(g),
      dishes: model.dishes,
      removeDish: (dish) => model.removeFromMenu(dish),
    })
  );

  model.addObserver(() => {
    root.removeChild(root.childNodes[0]);
    root.append(
      h(SidebarPresentation, {
        guests: model.getNumberOfGuests(),
        setGuests: (g) => model.setNumberOfGuests(g),
        dishes: model.dishes,
        removeDish: (dish) => model.removeFromMenu(dish),
      })
    );
  });

  return root;
};
