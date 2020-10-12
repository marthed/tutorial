const Summary = ({ model }) => {
  const guests = useModelProp(model, "numberOfGuests");
  const dishes = useModelProp(model, "dishes");

  return <SummaryPresentation guests={guests} dishes={dishes} />;
};
