import InputText from "../components/InputText";
import useLocalState from "../hooks/useLocalState"; // adjust path as needed

function Personal() {
  const [first, setFirst] = useLocalState("personal.first", "");
  const [last, setLast] = useLocalState("personal.last", "");
  const [location, setLocation] = useLocalState("personal.location", "");

  const fields = [
    {
      key: "first",
      label: "First Name",
      value: first,
      setValue: setFirst,
    },
    {
      key: "last",
      label: "Last Name",
      value: last,
      setValue: setLast,
    },
    {
      key: "location",
      label: "Location",
      value: location,
      setValue: setLocation,
    },
  ];

  return (
    <div id="personal" className="flex flex-col gap-4">
    
      {fields.map(({ key, label, value, setValue }) => (
        <div key={key} className="flex flex-col gap-1">
          <label htmlFor={key}>{label}</label>
          <InputText
            name={key}
            id={key}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
          />
        </div>
      ))}
    </div>
  );
}

export default Personal;