import "./App.css";
import React from "react";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
function App() {
  return (
    <>
      <div className="App">
        <div className="imgcontainer">
          <Menu url="https://firebasestorage.googleapis.com/v0/b/cursoreact-1605b.appspot.com/o/apple.png?alt=media&token=cc09bcd4-82a2-4825-abd8-4443ef49baf5" />
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
