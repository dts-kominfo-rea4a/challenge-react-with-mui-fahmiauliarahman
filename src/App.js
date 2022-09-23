import { Card, CardContent, Stack } from "@mui/material";
import "./App.css";
import ContactForm from "./components/ContactForm";
import Contact from "./components/Contact";
import Header from "./components/Header";
// Uncomment untuk memuat daftar kontak
import contactsJSON from "./data/contacts.json";
import { useState } from "react";
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const [contacts, setContacts] = useState(contactsJSON);

  return (
    <div className="App">
      <Header />

      <Stack
        direction={{ sm: "column", lg: "row" }}
        spacing={{ xs: 2, sm: 3, lg: 4 }}
        justifyContent={{ sm: "center", lg: "space-evenly" }}
        alignItems="center"
        sx={{ padding: 2 }}
      >
        <ContactForm setContacts={setContacts} />

        <Card sx={{ backgroundColor: "#DBF6F0" }}>
          <CardContent>
            {contacts.map((data, i) => (
              <Contact key={i} data={data} />
            ))}
          </CardContent>
        </Card>
      </Stack>
    </div>
  );
};

export default App;
