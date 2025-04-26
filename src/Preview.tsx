import useLocalState from "./hooks/useLocalState"; // adjust path as needed
function Preview() {
  const [first] = useLocalState("personal.first", "[not set]");
  const [last] = useLocalState("personal.last", "[not set]");
  const [location] = useLocalState("personal.location", "[not set]");
  const [email] = useLocalState("contact.email", "[not set]");

  const [linkedin] = useLocalState("contact.linkedin", "[not set]");
  const [github] = useLocalState("contact.github", "[not set]");
  const [title] = useLocalState("summary.title", "[not set]");
  const [summary] = useLocalState("summary.description", "[not set]");

  return (
    <div id="preview">
      <section id="title">
        <h1 className="text-3xl font-bold">
          <span>
            {first.trim()} {last.trim()}
          </span>
          <span className="dash"></span>
          <span>{title}</span>
        </h1>
      </section>

      <section id="contact">
        <span>
          <a href={linkedin} target="_blank">
            LinkedIn
          </a>
        </span>
        <span className="dash"></span>
        <span>
          <a id="email" href={`mailto:${email}`} target="_blank">
            Email
          </a>
        </span>
        <span className="dash"></span>
        <span>
          <a href={github} target="_blank">
            GitHub
          </a>
        </span>
        <span className="dash"></span>
        <span>{location}</span>
      </section>

      <section id="summary">
        <h2 className="text-2xl font-bold">Summary</h2>
        <p>
          
          {summary.trim()}
        </p>
      </section>

      <section id="experience">
        <h2 className="text-2xl font-bold">Experience</h2>

        <div className="job entry">
          <h3>
            <span>Web Developer</span>
            <span className="dash"></span>
            <span>iq digital media marketing gmbh</span>
          </h3>
          <h4>
            <span>Jan 2024 - Present</span>
            <span className="dash"></span>
            <span>Düsseldorf, Germany</span>
          </h4>

          <ul>
            <li>
              Introduced and promoted TypeScript to enhance code quality and
              decrease error occurrences.
            </li>
            <li>
              Created a <strong>template builder</strong>, saving{" "}
              <strong>30%</strong> of development time and optimizing workflow.
            </li>
            <li>
              Implemented the <strong>'skyMover'</strong> system to enhance ad
              placement reliability and remove <strong>4,000 lines</strong> of
              code.
            </li>
            <li>
              Developed an ad controller to facilitate CI/CD processes and
              decrease dependence on third-party systems.
            </li>
            <li>
              Developed a Chrome extension that helps clients and product
              managers to quickly see health metrics of their websites.
            </li>
            <li>
              Technologies:{" "}
              <strong>
                React, TypeScript, Tailwind, Vite, AWS, Github Actions
              </strong>
            </li>
          </ul>
        </div>

        <div className="job entry">
          <h3>
            <span>Full Stack Developer</span>
            <span className="dash"></span>
            <span>Qanuk GmbH</span>
          </h3>
          <h4>
            <span>April 2021 - December 2023</span>
            <span className="dash"></span>
            <span>Osnabrück, Niedersachsen, Germany</span>
          </h4>

          <ul>
            <li>
              Developed a scalable and dynamic search UI that connected 3rd
              party APIs and scraped articles using Elastic.
            </li>
            <li>
              Created a geolocation-based search UI for medical practitioners by
              developing custom WordPress plugins.
            </li>
            <li>
              Oversaw the creation of a WordPress plugin to streamline invoice
              management and event-related tasks.
            </li>
            <li>
              Integrated <strong>AJAX, jQuery, and REST APIs</strong> to enhance
              interactivity and performance.
            </li>
            <li>
              Provided mentorship and fostered collaborative development
              practices, increasing productivity.
            </li>
            <li>
              Technologies:{" "}
              <strong>
                PHP, WordPress, JavaScript, jQuery, AJAX, React, Docker
              </strong>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold">Skills</h2>
        <ul>
          <li>
            <strong>Languages:</strong> TypeScript/Javascript, PHP, Golang,
            Java, CSS, HTML
          </li>
          <li>
            <strong>Frameworks:</strong> React, Tailwind, Next, Vite, Webpack
          </li>
          <li>
            <strong>Tools/Platforms:</strong> Git, Docker, Github (Actions), AWS
          </li>
          <li>
            <strong>Methodologies:</strong> Agile, Pair/Ensemble Programming,
            TDD/BDD
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold">Education</h2>

        <div className="education entry">
          <h3>
            <span>Master of Arts in Sociology</span>
            <span className="dash"></span>
            <span>Universität Bielefeld</span>
          </h3>
          <h4>
            <span>September 2021</span>
            <span className="dash"></span>
            <span>Bielefeld, NRW, Germany</span>
          </h4>
          <p>
            Specialization: Qualitative Studies and Workplace
            Studies/Ethnomethodology
          </p>
        </div>
      </section>
    </div>
  );
}

export default Preview;
