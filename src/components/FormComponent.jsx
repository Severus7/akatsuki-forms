import React from "react";
import { Box, Button, Card, Grid, Typography, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Invalid email!")
      .required("This field is required"),
    password: yup
      .string()
      .required("This field is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
  })
  .required();

const FormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <Card
      sx={{
        maxWidth: "500px",
        padding: "50px",
        zIndex: 100,
        backdropFilter: "blur(19px) saturate(180%)",
        backgroundColor: "rgba(97, 97, 97, 0.42)",
        borderRadius: "15px",
        border: "1px solid rgba(255, 255, 255, 0.125),",
      }}
    >
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          required
          label="Email address"
          fullWidth
          sx={{
            marginBottom: 3,
            input: { color: "white" },
            // fieldset: { borderColor: "white" },
            "& .MuiOutlinedInput-root.Mui-focused": {
              "& > fieldset": {
                border: "1px solid white",
              },
            },
          }}
          InputLabelProps={{ style: { color: "white", fontWeight: 100 } }}
          {...register("email")}
          error={!!errors?.email}
          helperText={errors.email?.message}
        />
        {/* <Typography>{errors.email?.message}</Typography> */}
        <TextField
          required
          label="Password"
          type="password"
          fullWidth
          sx={{
            marginBottom: 3,
            input: { color: "white", fontWeight: 100 },
            // fieldset: { borderColor: "white" },
            "& .MuiOutlinedInput-root.Mui-focused": {
              "& > fieldset": {
                border: "1px solid white",
              },
            },
          }}
          InputLabelProps={{ style: { color: "white", fontWeight: 100 } }}
          {...register("password")}
          error={!!errors?.password}
          helperText={errors.password?.message}
        />
        {/* // <Typography>{errors.password?.message}</Typography> */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "15px",
            marginBottom: "15px",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              color: "white",

              border: "1px solid rgba(0, 0, 0, 0.2)",
              "&:hover": {
                border: "1px solid black",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
              },
              "&:active": {
                border: "1px solid white",
              },
              textTransform: "none",
              padding: "5px 20px",
              fontWeight: 100,
            }}
            type="submit"
          >
            Login
          </Button>
        </Box>
        <Button
          sx={{
            display: "flex",
            justifyContent: "center",
            fontWeight: 100,

            color: "white",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
          component={Link}
          to="/forgot-password"
          disableRipple
          disableFocusRipple
        >
          Forgot Password?
        </Button>
        <Button
          sx={{
            display: "flex",
            justifyContent: "center",
            fontWeight: 100,

            color: "white",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
          component={Link}
          to="/register"
          disableRipple
          disableFocusRipple
        >
          Create an account
        </Button>
      </Box>
    </Card>
  );
};

export default FormComponent;
