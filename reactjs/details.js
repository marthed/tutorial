const Details = ({ model, ok: [addNav, addLabel], cancel }) => {
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
    <React.Fragment>
      {promiseNoData(promise, error, data) || (
        <DetailsPresentation
          dish={data}
          guests={guests}
          price={price}
          dishAdded={(dish) => {
            model.addToMenu(dish);
            addNav();
          }}
          addLabel={addLabel}
          isDishInMenu={menu.find((dish) => dish.id === data.id)}
          cancel={cancel}
        />
      )}
    </React.Fragment>
  );
};
