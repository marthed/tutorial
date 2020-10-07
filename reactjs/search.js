const Search = () => {
  const [promise, setPromise] = React.useState(DishSource.searchDishes({}));
  const [data, error] = usePromise(promise);

  return (
    promiseNoData(promise, error, data) ||
    h(SearchPresentation, { searchResults: data })
  );
};
