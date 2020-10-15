const Details = {
  props: ["model", "ok", "cancel"],
  data() {
    return {
      promise:
        this.model.currentDish &&
        DishSource.getDishDetails(this.model.currentDish),
      data: null,
      error: null,
    };
  },
  created() {
    this.promise
      .then((result) => (this.data = result))
      .catch((error) => (this.error = error));
  },
  watch: {
    "model.currentDish": function () {
      this.promise = DishSource.getDishDetails(this.model.currentDish);
      this.data = null;
      this.error = null;
      this.promise
        .then((result) => (this.data = result))
        .catch((error) => (this.error = error));
    },
  },
  render(h) {
    console.log("Render details");
    const { data, error, promise, ok, cancel } = this;
    const { guests, dishes } = this.model;
    const [addNav, addLabel] = ok;
    return (
      promiseNoData(promise, error, data, h) ||
      DetailsPresentation({
        h,
        dish: data,
        guests: guests,
        price: getDishPrice(data, guests),
        dishAdded: (dish) => {
          model.addToMenu(dish);
          addNav();
        },
        addLabel,
        isDishInMenu: dishes.find((d) => d.id === data.id),
        cancel,
      })
    );
  },
};
