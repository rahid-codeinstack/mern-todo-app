import React, { useState } from "react";
import { Box, TextField , FormControl, Button  , Alert } from "@mui/material";
import { postUser } from "../../services/user.service";
import { useNavigate } from "react-router-dom";


function SignUp() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [errors, setErrors] = useState({
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    password:"",
    confirmpassword:"",
    message:"",
  });
const navigate = useNavigate();
  
  const validateForm= (user)=>{
          setErrors({message:""})
          if(!user.firstname)
            {
              setErrors({firstname:'firstname required'});
              return false;
            }
          if(!user.lastname)
            {
              setErrors({lastname:'lastname required'});
              return false;
            }
          if(user.firstname.length < 4){
          setErrors({message:"firstname must be atleast 4 character"});
          return false;
          }
            if (!user.username) {
              setErrors({ username: "username required" });
              return false;
            }
          if(!user.email)
            {
              setErrors({email:'email required'});
              return false;
            }
             if (
               !user.email.includes("@" && "." && ("email" || "gmail") && ".com")
             ) {
               setErrors({ message: "invalid email type" });
               return false;
             }
          if(!user.password)
            {
              setErrors({password:'password required'});
              return false;
            }
          if(!user.confirmpassword)
            {
              setErrors({confirmpassword:'confirmpassword required'});
              return false;
            }
            if(user.password.length < 6 ){
              setErrors({message:"password must be atleast 6 character"})
            }
            if(user.password !== user.confirmpassword){
              setErrors({message:"incorrect confirm password"});
              return false;
            }
         return true;

    }
 
 
 
  const handleSubmit =  async (e) => {
    e.preventDefault();
    if (validateForm(form)) {
    const newUser = form;
      try {
        const data = await postUser(newUser);
        if(!data.success){
          setErrors({message:data.message});
          return ;
        }
        navigate("/sign-in")
        
      } catch (error) {
        setErrors({message:error.message});
      }
    }
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
        <h1 className="form-header">Sign Up</h1>
        {errors.message && (
          <Alert
            fullWidth
            sx={{ width: "90%", marginBlock: "10px" }}
            variant="outlined"
            severity="error"
          >
            {errors.message}
          </Alert>
        )}
        <Box sx={{ width: "100%" }}>
          <Box sx={{ display: "flex", gap: "10px", width: "100%" }}>
            <TextField
              label="First name"
              data-testid="firstname-input"
              fullWidth
              onChange={(e) =>
                setForm({ ...form, [e.target.id]: e.target.value })
              }
              type="text"
              value={form.firstname}
              sx={{ marginBottom: "10px", borderRadius: "10px" }}
              id="firstname"
              error={errors.firstname}
            />
            <TextField
              label="Last name"
              data-testid="lastname-input"
              fullWidth
              type="text"
              sx={{ marginBottom: "10px", borderRadius: "10px" }}
              onChange={(e) =>
                setForm({ ...form, [e.target.id]: e.target.value })
              }
              value={form.lastname}
              id="lastname"
              error={errors.lastname}
            />
          </Box>
          <Box sx={{ display: "flex", gap: "10px", width: "100%" }}>
            <TextField
              label="username"
              type="username"
              data-testid="username-input"
              fullWidth
              sx={{ marginBottom: "10px", borderRadius: "10px" }}
              onChange={(e) =>
                setForm({ ...form, [e.target.id]: e.target.value })
              }
              id="username"
              value={form.username}
              error={errors.username}
            />
            <TextField
              label="email"
              type="email"
              data-testid="email-input"
              fullWidth
              sx={{ marginBottom: "10px", borderRadius: "10px" }}
              onChange={(e) =>
                setForm({ ...form, [e.target.id]: e.target.value })
              }
              id="email"
              value={form.email}
              error={errors.email}
            />
          </Box>
          <Box sx={{ display: "flex", gap: "10px", width: "100%" }}>
            <TextField
              label="password"
              type="password"
              data-testid="password-input"
              fullWidth
              sx={{ marginBottom: "10px", borderRadius: "10px" }}
              onChange={(e) =>
                setForm({ ...form, [e.target.id]: e.target.value })
              }
              value={form.password}
              id="password"
              error={errors.password}
            />
            <TextField
              label="confirm password"
              data-testid="confirmpassword-input"
              type="text"
              fullWidth
              sx={{ marginBottom: "10px", borderRadius: "10px" }}
              onChange={(e) =>
                setForm({ ...form, [e.target.id]: e.target.value })
              }
              id="confirmpassword"
              value={form.confirmpassword}
              error={errors.confirmpassword}
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
              data-testid="submite-button"
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
              Sign up
            </Button>
          </Box>
        </Box>
      </FormControl>
    </>
  );
}

export default SignUp;
