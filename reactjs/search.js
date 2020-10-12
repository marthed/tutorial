const Search = ({ model }) => {
  const [type, setType] = React.useState("");
  const [query, setQuery] = React.useState("");
  const [promise, setPromise] = React.useState();
  React.useEffect(() => setPromise(DishSource.searchDishes({})), []);

  const [data, error] = usePromise(promise);

  return h(
    React.Fragment,
    {},
    h(SearchFormPresentation, {
      onText: (q) => setQuery(q),
      onType: (t) => setType(t),
      onSearch: () => setPromise(DishSource.searchDishes({ type, query })),
    }),
    promiseNoData(promise, error, data) ||
      h(SearchResultPresentation, {
        searchResults: data,
        dishChosen: (dish) => model.setCurrentDish(dish.id),
      })
  );
};
