function SummaryPresentation({ guests }) {
  return h(
    "div",
    {
      title: "Summary",
    },
    "Dinner for ",
    h("span", { title: "no. guests" }, guests),
    " guests"
  );
}

// function SummaryPresentation({ guests }) {
//   const div = document.createElement("div");
//   div.setAttribute("title", "summary");
//   div.append("Dinner for ");
//   const span = document.createElement("span");
//   span.setAttribute("title", "nr. guests");
//   span.append(guests);
//   div.append(span);
//   div.append(" guests");
//   return div;
// }
