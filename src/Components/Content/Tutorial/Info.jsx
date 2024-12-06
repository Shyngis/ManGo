import React from "react";

export default function Info({ title, desc }) {
  return (
    <div>
      <h3>New-York</h3>
      {/*<p>America</p> */}
      <p>{title}</p>
      <p>{desc}</p>
    </div>
  );
}
