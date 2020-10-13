const App = ({ model }) => {
  return (
    <React.Fragment>
      <div class="sidebar debug">
        <Sidebar model={model} />
      </div>
      <div class="mainContent">
        <div class="debug">
          <Search model={model} />
        </div>
        <div class="debug">
          <Details model={model} />
        </div>
        <Show hash="#summary">
          <Summary model={model} />
        </Show>
      </div>
    </React.Fragment>
  );
};
