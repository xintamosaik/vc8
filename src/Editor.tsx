import React, { useState } from "react";
import Resumes from "./Resumes.tsx";
import Facts from "./Facts.tsx";
import Styles from "./Styles.tsx";
import Settings from "./Settings.tsx";
import Button from "./components/Button";
function Editor() {
  const sections = {
    resumes: <Resumes />,
    facts: <Facts />,
    styles: <Styles />,
    settings: <Settings />,
  };
  const [active, setActive] = useState<keyof typeof sections>("facts");
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setActive(event.currentTarget.value as keyof typeof sections);
  };
  return (
    <div id="editor" className="flex flex-col gap-4">
      <nav className="flex space-x-4">
        <Button value="resumes" onClick={handleButtonClick}>
          Resumes
        </Button>
        <Button value="facts" onClick={handleButtonClick}>
          Facts
        </Button>
        <Button value="styles" onClick={handleButtonClick}>
          Styles
        </Button>
        <Button value="settings" onClick={handleButtonClick}>
          Settings
        </Button>
      </nav>

      <div className="section">{sections[active]}</div>
    </div>
  );
}

export default Editor;
