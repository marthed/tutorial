const Search = ({ model, nav, resultChoice }) => {
  const [type, setType] = React.useState("");
  const [query, setQuery] = React.useState("");
  const [promise, setPromise] = React.useState();
  React.useEffect(() => setPromise(DishSource.searchDishes({})), []);

  const [data, error] = usePromise(promise);

  return (
    <React.Fragment>
      <SearchFormPresentation
        onText={(q) => setQuery(q)}
        onType={(t) => setType(t)}
        onSearch={() => setPromise(DishSource.searchDishes({ type, query }))}
        nav={nav}
      />
      {promiseNoData(promise, error, data) || (
        <SearchResultPresentation
          searchResults={data}
          dishChosen={(dish) => {
            model.setCurrentDish(dish.id);
            resultChoice();
          }}
          resultChoice={resultChoice}
        />
      )}
    </React.Fragment>
  );
};
