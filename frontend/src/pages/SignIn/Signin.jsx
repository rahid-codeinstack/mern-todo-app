import React, { useState } from "react";
import { Box, TextField , formControlClasses , FormControl, Button } from "@mui/material";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Alert from "@mui/material/Alert";
function SignIn() {
  const [form, setForm] = useState({
    email:"",
    password:"",
  });
const [inputError , setInputError ] = useState("");
const navigate = useNavigate(null);
const [errors, setErrors] = useState({
    email:"",
    password:"",
  });

 
  const handleSubmit =  async (e) => {
    e.preventDefault();
    if(!form.email){
      setErrors({email:"email required"});
      return;
    }
    if(!form.password){
    setErrors({password:"password required"});
    return;
    };
    if(!form.email.includes("@" || "." || "com")){
      setInputError("invalid email type ");
    return;
    };
    try {
        const res = await axios.post("/api/auth/login",form);
        const data = res.data;
      if(data.success){
        localStorage.setItem("currentUser",JSON.stringify(data.user));
        navigate("/");
      }
        
    } catch (error) {
     if(error.response){
      setInputError(error.response.data.message);
     }else if(error.request){
      setInputError(error.request)
     }else{
      setErrors(error.message);
     }
    }
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
        {inputError && (
          <Alert  variant="outlined" severity="error" style={{width:"90%"}}>
            {inputError}
          </Alert>
        )}
        <Box sx={{ width: "100%" }}>
          <Box sx={{ display: "flex", gap: "10px", width: "100%" }}>
            <TextField
              label="Email"
              data-testid="email"
              fullWidth
              onChange={(e) =>
                setForm({ ...form, [e.target.id]: e.target.value })
              }
              type="email"
              value={form.email}
              error={errors.email}
              sx={{ marginBottom: "10px", borderRadius: "10px" }}
              id="email"
            />
          </Box>
          <Box>
            <TextField
              label="password"
              data-testid="password"
              fullWidth
              type="password"
              error={errors.password}
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

