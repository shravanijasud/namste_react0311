const parent = React.createElement("div",{id: "parent" },[
    React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag"),
    ])

]);

//jsx


console.log(parent);    //object

const root = ReactDOM.createRoot(document.getElementById("header"));

root.render(parent);