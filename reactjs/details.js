const Details = ({ model }) => {
  const currentDish = useModelProp(model, "currentDish");
  const [promise, setPromise] = React.useState();
  const guests = useModelProp(model, "numberOfGuests");
  const menu = useModelProp(model, "dishes");

  React.useEffect(() => {
    currentDish && setPromise(DishSource.getDishDetails(currentDish));
  }, [currentDish]);

  const [data, error] = usePromise(promise);
  const price = React.useMemo(() => getDishPrice(data, guests), [data, guests]);

  return (
    promiseNoData(promise, error, data) ||
    h(DetailsPresentation, {
      dish: data,
      guests,
      price,
      dishAdded: (dish) => model.addToMenu(dish),
      isDishInMenu: menu.find((dish) => dish.id === data.id),
    })
  );
};
