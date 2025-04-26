import InputText from "../components/InputText";
import useLocalState from "../hooks/useLocalState"; // adjust path as needed

function Contact() {
  const [email, setEmail] = useLocalState("contact.email", "");
  const [phone, setPhone] = useLocalState("contact.phone", "");
  const [linkedin, setLinkedin] = useLocalState("contact.linkedin", "");
  const [github, setGithub] = useLocalState("contact.github", "");
  const [website, setWebsite] = useLocalState("contact.website", "");
  const fields = [
    {
      key: "email",
      label: "Email",
      value: email,
      setValue: setEmail,
    },
    {
      key: "phone",
      label: "Phone",
      value: phone,
      setValue: setPhone,
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      value: linkedin,
      setValue: setLinkedin,
    },
    {
      key: "github",
      label: "GitHub",
      value: github,
      setValue: setGithub,
    },
    {
      key: "website",
      label: "Website",
      value: website,
      setValue: setWebsite,
    },
  ];

  return (
    <div id="contact" className="flex flex-col gap-4">
    
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

export default Contact;