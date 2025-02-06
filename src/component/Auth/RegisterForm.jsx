import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

const initialValues = {
    fullName : "",
    email: "",
    password: "",
    role: ""
  };


const RegisterForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    console.log("form values", values)
  };
  return (
    <div>
      <Typography variant="h5" className="text-center">
        Register
      </Typography>

      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field
            as={TextField}
            name="fullName"
            label="fullName"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Field
            as={TextField}
            name="email"
            label="email"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Field
            as={TextField}
            name="password"
            label="password"
            type= "password"
            fullWidth
            variant="outlined"
            margin="normal"
          />
      <FormControl fullWidth margin="normal">
        <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Field
        as={Select}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        //   value={age}
          label="Role"
          name = "role"
        //   onChange={handleChange}
        >
          <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
          <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
        </Field>
      </FormControl>

          <Button
            sx={{ mt: 2, padding: "1rem" }}
            fullWidth
            type="submit"
            vairant
          >
            Register
          </Button>
        </Form>
      </Formik>

      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        If have an account already ?
        <Button size="small" onClick={() => navigate("/account/login")}>
          Login
        </Button>
      </Typography>
    </div>
  );
};

export default RegisterForm;
