const SearchForm = {
  props: ["onSearch", "nav"],
  data() {
    return {
      text: "",
      type: "",
    };
  },
  render(h) {
    const options = ["starter", "main course", "dessert"];
    const [navCallback, navLabel] = this.nav;

    return h("div", {}, [
      h("input", {
        on: {
          change: (event) => {
            this.text = event.target.value;
          },
        },
      }),
      h(
        "select",
        {
          on: {
            change: (event) => {
              this.type = event.target.value;
            },
          },
        },
        [options.map((option) => h("option", {}, option))]
      ),
      h(
        "button",
        {
          on: {
            click: () => {
              this.onSearch(this.text, this.type);
            },
          },
        },
        "Search!"
      ),
      h(
        "button",
        {
          on: {
            click: () => {
              navCallback();
            },
          },
        },
        navLabel
      ),
    ]);
  },
};
