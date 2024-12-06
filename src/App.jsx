import { useState } from "react";
import "./App.css";

import { TutorialMain } from "./Components/Content/Tutorial/TutorialMain";

import { Pages } from "./Components/Pages/Pages";
import "./i18n";

function App() {
  return (
    <>
      <div className="container">
        <Pages />
        {/*<TutorialMain /> */}
      </div>
    </>
  );
}
export default App;
