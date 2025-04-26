import InputText from "../components/InputText";
import useLocalState from "../hooks/useLocalState"; // adjust path as needed

function Summary() {
  const [title, setTitle] = useLocalState("summary.title", "");
  const [description, setDescription] = useLocalState(
    "summary.description",
    ""
  );

  const fields = [
    {
      key: "title",
      label: "Title",
      value: title,
      setValue: setTitle,
    },
  ];

  return (
    <div id="summary" className="flex flex-col gap-4">
      {fields.map(({ key, label, value, setValue }) => (
        <div key={key} className="flex flex-col gap-1">
          <label htmlFor={key}>{label}</label>
          <InputText
            name={key}
            id={key}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue(e.target.value)
            }
          />
        </div>
      ))}
      <div key="description" className="flex flex-col gap-1">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          value={description}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setDescription(e.target.value)
          }
          className="bg-transparent border color-white border-gray-300 rounded p-2"
          rows={12}
          placeholder="Write a brief summary about yourself"
        />
      </div>
    </div>
  );
}

export default Summary;
