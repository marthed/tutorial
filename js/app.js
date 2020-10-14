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

const App = ({ model, h }) => (
  <div>
    <Sidebar model={model} h={h} resultChoise={dishChoise} />
    <Show hash="#summary">
      <Summary model={model} h={h} nav={backToSearch} />
    </Show>
  </div>
);

// const App = ({ model }) => {
//   React.useEffect(() => {
//     window.addEventListener("hashchange", defaultRoute);
//     return () => window.removeEventListener("hashchange", defaultRoute);
//   }, []);

//   return (
//     <React.Fragment>
//       <div class="sidebar debug">
//         <Sidebar model={model} resultChoice={dishChoise} />
//       </div>
//       <div class="mainContent">
//         <div class="debug">
//           <Show hash="#search">
//             <Search model={model} nav={summaryNav} resultChoice={dishChoise} />
//           </Show>
//         </div>
//         <div class="debug">
//           <Show hash="#details">
//             <Details model={model} cancel={backToSearch} ok={addToMenu} />
//           </Show>
//         </div>
//         <Show hash="#summary">
//           <Summary model={model} nav={backToSearch} />
//         </Show>
//       </div>
//     </React.Fragment>
//   );
// };
