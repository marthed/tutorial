const App = ({ model }) => {
  return h("div", {}, h(Sidebar, { model }), h(Summary, { model }));
};
