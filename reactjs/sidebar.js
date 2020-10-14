const Sidebar = ({ model, resultChoice }) => {
  const guests = useModelProp(model, "numberOfGuests");
  const dishes = useModelProp(model, "dishes");

  return (
    <SidebarPresentation
      guests={guests}
      setGuests={(g) => model.setNumberOfGuests(g)}
      dishes={dishes}
      removeDish={(dish) => model.removeFromMenu(dish)}
      dishChosen={(dish) => {
        model.setCurrentDish(dish.id);
        resultChoice();
      }}
    />
  );
};
