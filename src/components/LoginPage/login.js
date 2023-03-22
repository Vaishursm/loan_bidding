import React, { useEffect, useState } from "react";
import { Container, TextField, Button, Typography, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const styles = {
  loginContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15rem",
  },
};
const Login = () => {
  const navigate = useNavigate();
  const [username, setUserName] =  useState("")
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      const token = process.env.API_AUTHKEY;
        http.defaults.headers.common["Authorization"] = token;
      const URL = process.env.BASE_URL;
      const response = await axios.get(`${URL}user`);
      if (response.status === 200) {
        if (response.data.length !== 0) {
          const chkUser = response.data.email;
          const name = response.data.name;
          localStorage.setItem("email", chkUser);
          localStorage.setItem("name", name);
          if (chkUser === email && name === username) {
            navigate("/loandetails");
          } else {
            navigate("/");
          }
        }
      }
    }
  };
  useEffect(() => {
    let email = localStorage.getItem("email");
    if (email) {
      navigate("/loandetails");
    }
  }, [navigate]);
  return (
    <Container maxWidth="xs" sx={styles.loginContainer}>
      <Card variant="outlined">
      <Typography
        component="h1"
        variant="h5"
        sx={{ fontSize: "16px", color: "#555" }}
      >
        Loan Application Login Page
      </Typography>
      <form onSubmit={(e) => handleSubmit(e)}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          placeholder="John Doe"
          name="name"
          autoFocus
          value={username}
          onChange={(e) => handleNameChange(e)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          placeholder="j.doe@example.com"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => handleEmailChange(e)}
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Login
        </Button>
      </form>
      </Card>
    </Container>
  );
};

export default Login;
