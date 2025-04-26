import InputText from "../components/InputText";
function Personal() {
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
        />
        <label htmlFor="last">
          Last Name
        </label>
        <InputText
          name="last"
          id="last"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <label htmlFor="location">
            Location
        </label>
        <InputText
          name="location"
          id="location"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        
      </div>
    );
  }
  
  export default Personal;