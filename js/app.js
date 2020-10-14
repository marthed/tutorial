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

const App = ({ model, h }) => {
  // React.useEffect(() => {
  //   window.addEventListener("hashchange", defaultRoute);
  //   return () => window.removeEventListener("hashchange", defaultRoute);
  // }, []);

  return (
    <React.Fragment>
      <div class="sidebar debug">
        <Sidebar model={model} resultChoice={dishChoise} h={h} />
      </div>
      <div class="mainContent">
        <div class="debug">
          <Show hash="#search">
            <Search
              model={model}
              nav={summaryNav}
              resultChoice={dishChoise}
              h={h}
            />
          </Show>
        </div>
        <div class="debug">
          <Show hash="#details">
            <Details model={model} cancel={backToSearch} ok={addToMenu} h={h} />
          </Show>
        </div>
        <Show hash="#summary">
          <Summary model={model} nav={backToSearch} h={h} />
        </Show>
      </div>
    </React.Fragment>
  );
};
