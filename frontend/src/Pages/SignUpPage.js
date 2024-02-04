import React from 'react'
import {
    Typography,
    TextField,
    Checkbox,
    Link,
    Paper,
    Grid,
    Button,
    FormControlLabel,
  } from "@mui/material";

function SignUpPage() {
  
    return (
        <Grid
          container
          component="main"
          sx={{ height: "80vh", justifyContent: "center", width: "100vw", mt: 8 }}
        >
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
            sx={{ display: "flex", flexDirection: "column", p: 5 }}
          >
            <Typography component="h1" variant="h5" sx={{ mt: 4 }}>
              Sign in
            </Typography>
            <form noValidate sx={{ width: "100%", mt: 3 }}>
              <Grid>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="confirm password"
                  type="confirmPassword"
                  id="confirmPassword"
                  autoComplete="current-confirm-password"
                />
              </Grid>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Grid>
                <Button
                  type="submit"
                  width="50%"
                  variant="contained"
                  sx={{
                    backgroundColor: "#ce93d8",
                    color: "white",
                    "&:hover": { backgroundColor: "#ba68c8" },
                  }}
                >
                  Sign In
                </Button>
              </Grid>
              <Grid container>
                
               
              </Grid>
            </form>
          </Grid>
        </Grid>
      );
  
}

export default SignUpPage
