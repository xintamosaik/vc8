import InputText from "../components/InputText";
import useLocalState from "../hooks/useLocalState"; // adjust path as needed
function Personal() {
  const [first, setFirst] = useLocalState("personal.first", "");
  const [last, setLast] = useLocalState("personal.last", "");
  const [location, setLocation] = useLocalState("personal.location", "");

    return (
      <div id="personal" className="flex flex-col gap-4">
        
        <h1 className="text-3xl font-bold">Personal</h1>
        <label htmlFor="first">
          First Name
        </label>
        <InputText
          name="first"
          id="first"  
          className="border-2 border-gray-300 rounded-md p-2"
          value={first}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirst(e.target.value)}
        />
        <label htmlFor="last">
          Last Name
        </label>
        <InputText
          name="last"
          id="last"
          className="border-2 border-gray-300 rounded-md p-2"
          value={last}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLast(e.target.value)}

        />
        <label htmlFor="location">
            Location
        </label>
        <InputText
          name="location"
          id="location"
          className="border-2 border-gray-300 rounded-md p-2"
          value={location}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)}
        />
        
      </div>
    );
  }
  
  export default Personal;