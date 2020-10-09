const Details = ({ model }) => {
  const [promise, setPromise] = React.useState();

  const guests = useModelProp(model, "numberOfGuests");
  React.useEffect(() => {
    setPromise(DishSource.getDishDetails(547775));
  }, []);
  const [data, error] = usePromise(promise);
  return (
    promiseNoData(promise, error, data) ||
    h(DetailsPresentation, { dish: data, guests })
  );
};
