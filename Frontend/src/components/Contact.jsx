import { Container } from "@mui/material";
import ContactUs from "./Email/Email";
const Contact = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "20vh",
        height: "100%",
        p: 3,
        border: "1px solid black",
        borderRadius: 4,
        overflow: "hidden",
      }}
    >
      <ContactUs />
    </Container>
  );
};

export default Contact;
