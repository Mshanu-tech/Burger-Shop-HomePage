import React from "react";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import style from "./login.module.css";

export default function Login({ onClose, isOpen }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("A login was submitted:", email, password);
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={style.login}>
        <h1 style={{ color: "white", marginTop:"60px" }}>Login Page</h1>
        <form onSubmit={handleSubmit} className={style.form}>
          <TextField
            sx={{ width: "70%" }}
            id="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            sx={{ width: "70%" }}
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: 16, marginBottom: 30 }}
          >
            Login
          </Button>
        </form>
      </div>
    </Modal>
  );
}
