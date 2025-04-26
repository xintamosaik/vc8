function Personal() {
    return (
      <div id="personal" className="flex flex-col gap-4">
        
        <h1 className="text-3xl font-bold">Personal</h1>
        <label htmlFor="first">
          First Name
        </label>
        <input
          type="text"
          name="first"
          id="first" 
        />
      </div>
    );
  }
  
  export default Personal;