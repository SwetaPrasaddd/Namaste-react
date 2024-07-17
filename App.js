import React from "react";
import ReactDOM from "react-dom";

// const heading=React.createElement("h1",{id:heading},"Namaste React");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);



//using  jsx (react element)
// const jsxHeading=<h1 id="heading" className="head">Namaste React using jsx</h1>
// console.log(jsxHeading)
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);



//React functional component
// const HeadingComponent=()=>{
//     return (<h1 className="heading">
//         Namste react functional component
//     </h1>);
// };

//Component composition
// const Title=()=>(
//     <h1 className="head">Namste react</h1>
//     );

// const HeadingComponent=()=>(
//     <div id="container">
//         <Title/>
//     <h1 className="heading">Namste react functional component</h1>
//     </div>
//     );
//     // console.log(jsxHeading)
//     const root=ReactDOM.createRoot(document.getElementById("root"));
//     root.render(<HeadingComponent/>);


const elem=<span>React element</span>

const number=10000;
const HeadingComponent=()=>(
        <div id="container">
        {number}
        <h2>{number}</h2>
        <h2>{100+23}</h2>
        <h1 className="heading">Namste react functional component</h1>
        <h2>{console.log("sweta")}</h2> 
        {title} //React element inside component
        </div>
        );

    const title=(
            <h1 className="head">
                {elem}react element here
            {/* <HeadingComponent/> */}
            </h1>
            );
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(title);