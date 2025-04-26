import "./App.css";

import Editor from "./Editor";
import Preview from "./Preview";
function App() {
  return (
    <main className="grid grid-cols-2 gap-8">
      <Editor />
      <Preview />
    </main>
  );
}

export default App;
