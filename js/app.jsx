const App = ({ model }) => {
  return (
    <div>
      <Sidebar model={model}></Sidebar>
      <Summary model={model}></Summary>
    </div>
  );
};
