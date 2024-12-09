import { useState } from "react";
import { Box, Typography, TextField, Button, Grid, Link } from "@mui/material";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS Configuration
    const serviceID = "service_ciyx5ck";
    const templateID = "template_etc5k5s";
    const userID = "vBYh9qIvDlhj17Y-K";

    emailjs
      .send(
        serviceID,
        templateID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        userID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message was sent!");
          setLoading(false);
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("FAILED...", error);
          toast.error("Failed to send message. Please try again later.");
          setLoading(false);
        }
      );
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        // width: 300,
        height: "50% ",
        margin: "auto",
        mt: "5%",
        mb: "5%",
        p: 2,
        pt: 4,
        pb: 4,
        boxShadow: 3,
      }}
    >
      <Typography variant="h5" gutterBottom textAlign="center">
        Contact Us
      </Typography>

      <Box sx={{ mb: 1 }}>
        <WhatsAppIcon sx={{ color: "#4BC758", fontSize: 30 }} />
        <Link
          href="https://wa.me/03451330835"
          target="_blank"
          style={{
            textDecoration: "none",
            marginLeft: 6,
            fontSize: "small",
            color: "black",
          }}
        >
          0345-1330835
        </Link>
      </Box>

      <Box sx={{ mb: 1 }}>
        <FacebookIcon sx={{ color: "rgb(8,102,255)", fontSize: 30 }} />
        <Link
          href="https://www.facebook.com/Ameer Hamza"
          target="_blank"
          style={{
            textDecoration: "none",
            fontSize: "small",
            color: "black",
            marginLeft: 6,
          }}
        >
          City library
        </Link>
      </Box>

      <Box sx={{ mb: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center", // Centers horizontally
            height: "5vh",
            marginTop: "4%",
          }}
        >
          <Typography
            variant="h7"
            sx={{
              width: "98%",
              margin: "auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Email Us:
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TextField
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                sx={{ width: "90%" }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TextField
                fullWidth
                label="Your Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                sx={{ width: "90%" }}
              />
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TextField
                fullWidth
                label="Your Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                sx={{ width: "90%" }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loading}
                style={{ width: "50%" }}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default ContactUs;
