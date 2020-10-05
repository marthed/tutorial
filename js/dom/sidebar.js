const Sidebar = ({ model }) => {
  const root = h("div");
  const guests = model.getNumberOfGuests();

  const setGuests = (guests) => {
    model.setNumberOfGuests(guests);
  };

  root.append(h(SidebarPresentation, { guests, setGuests }));

  model.addObserver(() => {
    root.removeChild(root.childNodes[0]);
    root.append(
      h(SidebarPresentation, {
        guests: model.getNumberOfGuests(),
        setGuests,
      })
    );
  });

  return root;
};
