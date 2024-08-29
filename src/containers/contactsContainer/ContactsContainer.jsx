import { useEffect, useState } from "react";
import Contacts from "../../components/contacts/Contacts";

const ContactsContainer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [commit, setCommit] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Contacts
      name={name}
      email={email}
      telephone={telephone}
      commit={commit}
      setName={setName}
      setEmail={setEmail}
      setTelephone={setTelephone}
      setCommit={setCommit}
    />
  );
};

export default ContactsContainer;
