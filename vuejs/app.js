const summaryNav = [() => (window.location.hash = "summary"), "Summary"];
const backToSearch = [
  () => (window.location.hash = "search"),
  "Back to search",
];

const addToMenu = [() => (window.location.hash = "#search"), "Add to menu"];

const dishChoise = () => (window.location.hash = "#details");

function defaultRoute() {
  if (
    !["#search", "#summary", "#details"].find(
      (knowRoute) => knowRoute === window.location.hash
    )
  ) {
    window.location.hash = "#search";
  }
}

defaultRoute();

const App = {
  props: ["model"],
  mounted() {
    window.addEventListener("hashchange", defaultRoute);
  },
  destroyed() {
    window.removeEventListener("hashchange", defaultRoute);
  },
  render(h) {
    return h("div", {}, [
      h(Sidebar, {
        attrs: { class: "sidebar" },
        props: { model: this.model, resultChoice: dishChoise },
      }),
      h("div", { attrs: { class: "mainContent" } }, [
        h(Show, { props: { hash: "#search" } }, [
          h(Search, {
            props: {
              model: this.model,
              nav: summaryNav,
              resultChoice: dishChoise,
            },
          }),
        ]),
        h(Show, { props: { hash: "#details" } }, [
          h(Details, {
            props: {
              model: this.model,
              cancel: backToSearch,
              ok: addToMenu,
            },
          }),
        ]),
        h(Show, { props: { hash: "#summary" } }, [
          h(Summary, { props: { model: this.model, nav: backToSearch } }),
        ]),
      ]),
    ]);
  },
};
