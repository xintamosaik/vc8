import React, { useState } from "react";
import Resumes from "./Resumes.tsx";
import Facts from "./Facts.tsx";
import Styles from "./Styles.tsx";
import Settings from "./Settings.tsx";

function Editor() {
  const sections = {
    resumes: <Resumes />,
    facts: <Facts />,
    styles: <Styles />,
    settings: <Settings />,
  };
  const [active, setActive] = useState<keyof typeof sections>("resumes");
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setActive(event.currentTarget.value as keyof typeof sections);
  };
  return (
    <div id="editor" className="flex flex-col gap-4">
      <nav className="flex space-x-4">
        <button value="resumes" onClick={handleButtonClick}>
          Resumes
        </button>
        <button value="facts" onClick={handleButtonClick}>
          Facts
        </button>
        <button value="styles" onClick={handleButtonClick}>
          Styles
        </button>
        <button value="settings" onClick={handleButtonClick}>
          Settings
        </button>
      </nav>

      <div className="section">{sections[active]}</div>
    </div>
  );
}

export default Editor;
