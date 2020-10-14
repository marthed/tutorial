const Sidebar = {
  props: ["model", "dishChoice"],
  render(h) {
    const { model, dishChoice } = this;
    return SidebarPresentation({
      h,
      guests: model.getNumberOfGuests(),
      dishes: model.getMenu(),
      setGuests: (x) => model.setNumberOfGuests(x),
      removeDish: (dish) => model.removeFromMenu(dish),
      dishChosen: (dish) => {
        model.setCurrentDish(dish.id);
        dishChoice();
      },
    });
  },
};
