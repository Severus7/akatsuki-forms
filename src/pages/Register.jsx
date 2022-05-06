import React from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import akatsuki from "../assets/akatsuki2.jpg";

const schema = yup
  .object({
    firstName: yup.string().required("This field is required"),
    surName: yup.string().required("This field is required"),
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

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    alert(
      `Welcome to the Akatsuki, ${data.firstName}! The world shall know pain`
    );
    console.log(data);
  };

  return (
    <Paper
      sx={{
        backgroundImage: `url(${akatsuki})`,
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: 0,
        height: "100%",
      }}
    >
      <Paper sx={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
        <Container>
          <Box
            sx={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "20px",
              marginRigth: "20px",
            }}
          >
            <Card
              sx={{
                maxWidth: "800px",
                width: "40rem",
                padding: "50px",
                zIndex: 100,
                backdropFilter: "blur(19px) saturate(180%)",
                backgroundColor: "rgba(97, 97, 97, 0.42)",
                borderRadius: "15px",
                border: "1px solid rgba(255, 255, 255, 0.125),",
              }}
            >
              <Typography
                variant="h4"
                color="common.white"
                gutterBottom
                sx={{ textAlign: "center" }}
              >
                Join the Akatsuki
              </Typography>
              <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                  <Grid item lg={6} xs={12}>
                    <TextField
                      required
                      label="First Name"
                      fullWidth
                      sx={{
                        marginBottom: "10px",
                        input: { color: "white" },
                        // fieldset: { borderColor: "white" },
                        "& .MuiOutlinedInput-root.Mui-focused": {
                          "& > fieldset": {
                            border: "1px solid white",
                          },
                        },
                      }}
                      InputLabelProps={{
                        style: { color: "white", fontWeight: 100 },
                      }}
                      {...register("firstName")}
                      error={!!errors?.firstName}
                      helperText={errors.firstName?.message}
                    />
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <TextField
                      required
                      label="Last Name"
                      fullWidth
                      sx={{
                        marginBottom: "10px",
                        input: { color: "white" },
                        // fieldset: { borderColor: "white" },
                        "& .MuiOutlinedInput-root.Mui-focused": {
                          "& > fieldset": {
                            border: "1px solid white",
                          },
                        },
                      }}
                      InputLabelProps={{
                        style: { color: "white", fontWeight: 100 },
                      }}
                      {...register("surName")}
                      error={!!errors?.surName}
                      helperText={errors.surName?.message}
                    />
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <TextField
                      required
                      label="Email Address"
                      fullWidth
                      sx={{
                        marginBottom: "10px",
                        input: { color: "white" },
                        // fieldset: { borderColor: "white" },
                        "& .MuiOutlinedInput-root.Mui-focused": {
                          "& > fieldset": {
                            border: "1px solid white",
                          },
                        },
                      }}
                      InputLabelProps={{
                        style: { color: "white", fontWeight: 100 },
                      }}
                      {...register("email")}
                      error={!!errors?.email}
                      helperText={errors.email?.message}
                    />
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <TextField
                      required
                      label="Password"
                      fullWidth
                      sx={{
                        marginBottom: "10px",
                        input: { color: "white" },
                        // fieldset: { borderColor: "white" },
                        "& .MuiOutlinedInput-root.Mui-focused": {
                          "& > fieldset": {
                            border: "1px solid white",
                          },
                        },
                      }}
                      InputLabelProps={{
                        style: { color: "white", fontWeight: 100 },
                      }}
                      {...register("password")}
                      error={!!errors?.password}
                      helperText={errors.password?.message}
                    />
                  </Grid>

                  {/* INSERT OTHER TEXTFIELD HERE AND WRAP THEM AROUND GRID ITEM (check the code above) */}

                  <Grid item lg={12}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Button
                        variant="outlined"
                        sx={{
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                          color: "white",
                          marginBottom: 2,
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
                        Register
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Box>
        </Container>
      </Paper>
    </Paper>
  );
};

export default ForgotPassword;
