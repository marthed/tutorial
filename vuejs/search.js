const Search = {
  props: ["model", "nav", "resultChoice"],
  data() {
    return {
      promise: DishSource.searchDishes({}),
      data: null,
      error: null,
      text: "",
      type: "",
    };
  },
  created() {
    this.promise
      .then((data) => (this.data = data))
      .catch((error) => (this.error = error));
  },
  render(h) {
    return h("div", {}, [
      h(SearchForm, {
        props: {
          onSearch: (text, type) => {
            this.promise = DishSource.searchDishes({
              type: type,
              query: text,
            });
            this.promise
              .then((data) => {
                this.data = data;
              })
              .catch((error) => {
                this.error = error;
              });
          },
          nav: this.nav,
        },
      }),
      promiseNoData(this.promise, this.error, this.data, h) ||
        SearchResultPresentation({
          h,
          searchResults: this.data,
          dishChosen: (dish) => {
            this.model.setCurrentDish(dish.id);
            this.resultChoice();
          },
        }),
    ]);
  },
};
