import { useEffect } from "react";
import Contacts from "../../components/contacts/Contacts";
import "./ContactsContainer.css";

const ContactsContainer = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return <Contacts />;
};

export default ContactsContainer;
