const summaryNav = [() => (window.location.hash = "summary"), "Summary"];
const backToSearch = [
  () => (window.location.hash = "search"),
  "Back to search",
];

const addToMenu = [() => (window.location.hash = "#search"), "Add to menu"];

const App = ({ model }) => {
  return (
    <React.Fragment>
      <div class="sidebar debug">
        <Sidebar model={model} />
      </div>
      <div class="mainContent">
        <div class="debug">
          <Show hash="#search">
            <Search
              model={model}
              nav={summaryNav}
              resultChoice={() => (window.location.hash = "#details")}
            />
          </Show>
        </div>
        <div class="debug">
          <Show hash="#details">
            <Details model={model} cancel={backToSearch} ok={addToMenu} />
          </Show>
        </div>
        <Show hash="#summary">
          <Summary model={model} nav={backToSearch} />
        </Show>
      </div>
    </React.Fragment>
  );
};
