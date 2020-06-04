import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// DESTRUCTURING

const date = new Date();
const currentTime = date.getHours();

let greeting;

const customStyle = {
  color: "",
};

if (currentTime < 12) {
  greeting = "Please, edit the status files and send them to the managers";
  customStyle.color = "yellow";
} else if (currentTime < 14) {
  greeting = "Please, send the status files to our customers";
  customStyle.color = "orange";
} else {
  greeting = "Relax, You have already sent all the status files today";
  customStyle.color = "green";
}

function People() {
  const friends = [
    {
      company: "Contructors",
      cathegory: "customer",
      email: "contructors@gmail.com",
    },
    {
      company: "PT specialists",
      cathegory: "customer",
      email: "ptspecialists@gmail.com",
    },
    {
      company: "Landscaping experts",
      cathegory: "customer",
      email: "landscaping@mail.bg",
    },
  ];

  return (
    <section>
      <Person person={friends[0]} />
      <Person person={friends[1]} />
      <Person person={friends[2]} />
    </section>
  );
}

const Person = ({ person: { company, cathegory, email } }) => {
  return (
    <article>
      <h1>{company}</h1>
      <p>{company}</p>
      <p>{cathegory}</p>
      <p>{email}</p>
      <hr />
    </article>
  );
};

ReactDom.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {greeting}
      {" "}
    </h1>
    <People />
  </div>,

  document.getElementById("root")
);
