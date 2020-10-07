const Sidebar = ({ model }) => {
  const guests = useModelProp(model, "numberOfGuests");

  return h(SidebarPresentation, {
    guests,
    setGuests: (g) => model.setNumberOfGuests(g),
  });
};
