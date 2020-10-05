const Sidebar = ({ model }) => {
  const root = h("div");
  const guests = model.getNumberOfGuests();

  const minusOne = () => {
    const guests = model.getNumberOfGuests();
    model.setNumberOfGuests(guests - 1);
  };

  const plusOne = () => {
    const guests = model.getNumberOfGuests();
    model.setNumberOfGuests(guests + 1);
  };

  root.append(h(SidebarPresentation, { guests, minusOne, plusOne }));

  model.addObserver(() => {
    root.removeChild(root.childNodes[0]);
    root.append(
      h(SidebarPresentation, {
        guests: model.getNumberOfGuests(),
        minusOne,
        plusOne,
      })
    );
  });

  return root;
};
