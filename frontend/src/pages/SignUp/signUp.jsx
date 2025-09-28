import React, { useState } from "react";
import { Box, TextField , formControlClasses , FormControl, Button } from "@mui/material";


function SignUp() {
  const [form, setForm] = useState({
  });

  const [errors, setErrors] = useState({
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    password:"",
    confirmpassword:"",
  });

 
  const handleSubmit = (e) => {
    e.preventDefault();
   console.log(form);
  };

  return (
    <>
      <FormControl
      
        className="userForm"
        sx={{
          paddingBlock: "30px",
          borderRadius: "10px",
          paddingInline: "10px",
        }}
      >
       <h1 className="form-header">
       Sign Up 
       </h1>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ display: "flex", gap: "10px", width: "100%" }}>
            <TextField
              label="First name"
              fullWidth
              onChange={(e) =>
                setForm({ ...form, [e.target.id]: e.target.value })
              }
              type="text"
              value={form.firstname}
              sx={{ marginBottom: "10px", borderRadius: "10px" }}
              id="firstname"
            
            />
            <TextField
              label="Last name"
              fullWidth
              type="text"
              sx={{ marginBottom: "10px", borderRadius: "10px" }}
              onChange={(e) =>
                setForm({ ...form, [e.target.id]: e.target.value })
              }
              value={form.lastname}
              id="lastname"
             
            />
          </Box>
          <Box sx={{ display: "flex", gap: "10px", width: "100%" }}>
            <TextField
              label="username"
              type="username"
              fullWidth
              sx={{ marginBottom: "10px", borderRadius: "10px" }}
              onChange={(e) =>
                setForm({ ...form, [e.target.id]: e.target.value })
              }
              id="username"
              value={form.username}
            
            />
            <TextField
              label="email"
              type="email"
              fullWidth
              sx={{ marginBottom: "10px", borderRadius: "10px" }}
              onChange={(e) =>
                setForm({ ...form, [e.target.id]: e.target.value })
              }
              id="email"
              value={form.email}
            
            />
          </Box>
          <Box sx={{ display: "flex", gap: "10px", width: "100%" }}>
            <TextField
              label="password"
              type="password"
              fullWidth
              sx={{ marginBottom: "10px", borderRadius: "10px" }}
              onChange={(e) =>
                setForm({ ...form, [e.target.id]: e.target.value })
              }
              value={form.password}
              id="password"
         
            />
            <TextField
              label="confirm password"
              type="text"
              fullWidth
              sx={{ marginBottom: "10px", borderRadius: "10px" }}
              onChange={(e) =>
                setForm({ ...form, [e.target.id]: e.target.value })
              }
              id="conformpassword"
              value={form.confirmpassword}
           
            />
          </Box>
          <Box fullWidth sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Button
              onClick={(e)=>handleSubmit(e)}
              variant="outlined"
              sx={{
                background: "blue",
                padding: "15px",
                color: "white",
                marginTop: "10px",
                fontSize:"17px",
                width:"80%"

              }}
            >
              Sign up
            </Button>
          </Box>
        </Box>
      </FormControl>
    </>
  );
}

export default SignUp;
