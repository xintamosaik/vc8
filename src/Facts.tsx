import React, { useState } from "react";
import Personal from "./Facts/Personal.tsx";
import Contact from "./Facts/Contact.tsx";
import Summary from "./Facts/Summary.tsx";
import Skills from "./Facts/Skills.tsx";
import Work from "./Facts/Work.tsx";
import Education from "./Facts/Education.tsx";
import Languages from "./Facts/Languages.tsx";
import Button from "./components/Button";
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
        
        <Button value="personal"  onClick={handleButtonClick}> 
            Personal
        </Button>
        <Button value="contact" onClick={handleButtonClick}>
          Contact
        </Button>
        <Button value="summary" onClick={handleButtonClick}>
            Summary
        </Button>
        <Button value="work" onClick={handleButtonClick}>
            Work
        </Button>
        <Button value="education" onClick={handleButtonClick}>
            Education
        </Button>
        <Button value="skills" onClick={handleButtonClick}>
            Skills
        </Button>
        <Button value="languages" onClick={handleButtonClick}>
            Languages
        </Button>
      </nav>

      <div className="section">{sections[active]}</div>
    </div>
  );
}

export default Editor;
