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
      SearchFormPresentation({
        h,
        onText: (t) => {
          this.text = t;
        },
        onType: (ty) => {
          this.type = ty;
        },
        onSearch: () => {
          this.promise = DishSource.searchDishes({
            type: this.type,
            query: this.text,
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
