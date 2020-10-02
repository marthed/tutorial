function App({ model }) {
  return h(SummaryPresentation, { guests: model.getNumberOfGuests() });
}
