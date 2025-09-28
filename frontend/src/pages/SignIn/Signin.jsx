import React, { useState } from "react";
import { Box, TextField , formControlClasses , FormControl, Button } from "@mui/material";


function SignIn() {
  const [form, setForm] = useState({
    email:"",
    password:"",
  });

  const [errors, setErrors] = useState({
    email:"",
    password:"",
  });

 
  const handleSubmit = (e) => {
    e.preventDefault();
   console.log(form);
  };

  return (
    <>
      <FormControl
        className="userForm user-signin"
        sx={{
          paddingBlock: "30px",
          borderRadius: "10px",
          paddingInline: "10px",
        }}
      >
        <h1 className="form-header">Sign Up</h1>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ display: "flex", gap: "10px", width: "100%" }}>
            <TextField
              label="Email"
              fullWidth
              onChange={(e) =>
                setForm({ ...form, [e.target.id]: e.target.value })
              }
              type="text"
              value={form.email}
              sx={{ marginBottom: "10px", borderRadius: "10px" }}
              id="email"
            />
          </Box>
          <Box>
            <TextField
              label="password"
              fullWidth
              type="password"
              required
              sx={{ marginBottom: "10px", borderRadius: "10px" }}
              onChange={(e) =>
                setForm({ ...form, [e.target.id]: e.target.value })
              }
              value={form.password}
              id="password"
            />
          </Box>

          <Box
            fullWidth
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              onClick={(e) => handleSubmit(e)}
              variant="outlined"
              sx={{
                background: "blue",
                padding: "15px",
                color: "white",
                marginTop: "10px",
                fontSize: "17px",
                width: "80%",
              }}
            >
             Sign In
            </Button>
          </Box>
        </Box>
      </FormControl>
    </>
  );
}

export default SignIn;

