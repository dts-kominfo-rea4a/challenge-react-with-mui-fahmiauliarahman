// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/mate rial-ui/react-card/#basic-card

import { Button, Card, CardActions, CardContent } from "@mui/material";
import { useState } from "react";

import TextInput from "./TextInput";

const ContactForm = (props) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ad

  const { setContacts } = props;

  const [newContact, setNewContact] = useState({
    name: "",
    phone: "",
    email: "",
    photo: "",
  });

  const inputs = [
    {
      label: "Name *",
      name: "name",
    },
    {
      label: "Phone *",
      name: "phone",
    },
    {
      label: "Email *",
      name: "email",
    },
    {
      label: "Photo URL *",
      name: "photo",
    },
  ];

  const onChange = (e) => {
    setNewContact({
      ...newContact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !newContact.name ||
      !newContact.phone ||
      !newContact.email ||
      !newContact.photo
    ) {
      alert("Please fill all the required fields!");
      return false;
    }

    setContacts((prev) => [...prev, newContact]);

    setNewContact({
      name: "",
      phone: "",
      email: "",
      photo: "",
    });

    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));
  };

  return (
    <>
      <Card sx={{ backgroundColor: "#F3F1EB" }}>
        <CardContent>
          {inputs.map((input, i) => (
            <TextInput
              key={i}
              name={input.name}
              label={input.label}
              onChange={onChange}
            />
          ))}
        </CardContent>
        <CardActions>
          <Button size="small" color="success" onClick={handleSubmit}>
            Add New
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ContactForm;
