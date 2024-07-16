// const heading = React.createElement("h1", { id: "heading" }, "Hello World");
// console.log(heading); //OBJECT
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//NESTED STRUCTURE
/* <div id="parent">
  <div id="child">
    <h1>I'm H1 tag</h1>
  </div>
</div>; */

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I'm H1 tag")
//   )
// );
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//SIBLING'S STRUCTURE
/* <div id="parent">
  <div id="child">
    <h1>I'm H1 tag</h1>
    <h2>I'm H2 tag</h2>
  </div>
</div>; */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm H1 tag"),
    React.createElement("h2", {}, "I'm H2 tag"),
  ])
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//JSX is used to improve the above code mess
