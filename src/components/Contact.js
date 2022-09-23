// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}

const ContactDetail = (props) => {
  const { name, phone, email } = props;
  return (
    <>
      <Typography variant="h6">{name}</Typography>
      <Typography variant="body2">{phone}</Typography>
      <Typography variant="body2">{email}</Typography>
    </>
  );
};

const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <>
      <List sx={{ width: 400 }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar alt={data.name} src={data.photo} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <ContactDetail
                name={data.name}
                phone={data.phone}
                email={data.email}
              />
            }
          />
        </ListItem>
        <Divider />
      </List>
    </>
  );
};

export default Contact;
