const Summary = ({ model }) => {
  const root = h("div");
  root.append(h(SummaryPresentation, { guests: model.getNumberOfGuests() }));
  model.addObserver(() => {
    root.removeChild(root.childNodes[0]);
    root.append(h(SummaryPresentation, { guests: model.getNumberOfGuests() }));
  });
  return root;
};
