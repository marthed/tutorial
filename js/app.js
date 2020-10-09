const App = ({ model }) =>
  h(React.Fragment, {}, h(Sidebar, { model }), h(Details, { model }));
