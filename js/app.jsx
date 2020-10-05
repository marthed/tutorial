const App = ({ model }) => {
  return (
    <div class="flexParent">
      <div class="sidebar debug">
        <Sidebar model={model}></Sidebar>
      </div>
      <div class="mainContent debug">
        <Summary model={model}></Summary>
      </div>
    </div>
  );
};
