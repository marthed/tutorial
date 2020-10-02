function App(model) {
  model.addObserver(() => {
    document.body.textContent = model.getNumberOfGuests();
  });
  document.body.textContent = model.getNumberOfGuests();
}
