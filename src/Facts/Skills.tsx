import { useState } from "react";
import useLocalListState from "../hooks/useLocalListState";
import Button from "../components/Button";

type Skill = {
  id: number;
  name: string;
  score: number;      // 0-100
  category: string;   // e.g. "Programming", "Languages", etc.
};
function Skills() {
  const { list: skills, add, update, remove } = useLocalListState<Skill>("skills");
  const [input, setInput] = useState({ name: "", score: 50, category: "" });

  const handleAdd = () => {
    if (input.name.trim() && input.category.trim()) {
      add({ name: input.name.trim(), score: input.score, category: input.category.trim() });
      setInput({ name: "", score: 50, category: "" });
    }
  };
  return (
    <section className="skills flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Skills</h2>
      <div className="flex gap-2">
        <input
          className="border rounded p-2 flex-1"
          value={input.name}
          onChange={e => setInput(i => ({ ...i, name: e.target.value }))}
          placeholder="Skill name"
        />
        <input
          type="number"
          min={0}
          max={100}
          className="border rounded p-2 w-20"
          value={input.score}
          onChange={e => setInput(i => ({ ...i, score: Number(e.target.value) }))}
          placeholder="Score"
        />
        <input
          className="border rounded p-2 flex-1"
          value={input.category}
          onChange={e => setInput(i => ({ ...i, category: e.target.value }))}
          placeholder="Category"
        />
        <Button onClick={handleAdd}>Add</Button>
      </div>
      <ul>
        {skills.map(skill => (
          <li key={skill.id} className="flex items-center gap-2">
            <span className="font-semibold">{skill.name}</span>
            <span className="text-gray-500">({skill.category})</span>
            <span className="text-blue-600">{skill.score}/100</span>
            <Button onClick={() => remove(skill.id)} className="ml-2 px-2 py-1 text-xs">Delete</Button>
            {/* Add edit functionality as needed */}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;