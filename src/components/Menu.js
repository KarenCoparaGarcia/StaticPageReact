import React from "react";

export default function Menu({ url }) {
  return (
    <header className="App-header">
      <div className="nav">
        <img className="logo" src={url}></img>
      </div>
    </header>
  );
}
