import React, { useState } from "react";
import Personal from "./Facts/Personal.tsx";
import Contact from "./Facts/Contact.tsx";
import Summary from "./Facts/Summary.tsx";
import Skills from "./Facts/Skills.tsx";
import Work from "./Facts/Work.tsx";
import Education from "./Facts/Education.tsx";
import Languages from "./Facts/Languages.tsx";

function Editor() {
  const sections = {
    personal: <Personal />,
    contact: <Contact />,
    summary: <Summary />,
    work: <Work />,
    education: <Education />,
    skills: <Skills />,
    languages: <Languages />,
  };
  const [active, setActive] = useState<keyof typeof sections>("personal");
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setActive(event.currentTarget.value as keyof typeof sections);
  };
  return (
    <div id="editor" className="flex flex-col gap-4">
      <nav className="flex space-x-4">
        <button value="personal" onClick={handleButtonClick}>
          Personal
        </button>
        <button value="contact" onClick={handleButtonClick}>
          Contact
        </button>
        <button value="summary" onClick={handleButtonClick}>
          Summary
        </button>
        <button value="work" onClick={handleButtonClick}>
          Work
        </button>
        <button value="education" onClick={handleButtonClick}>
          Education
        </button>
        <button value="skills" onClick={handleButtonClick}>
          Skills
        </button>
        <button value="languages" onClick={handleButtonClick}>
          Languages
        </button>
      </nav>

      <div className="section">{sections[active]}</div>
    </div>
  );
}

export default Editor;
