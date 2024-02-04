import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import {Link} from 'react-router-dom'

import {
  Typography,
  TextField,
  Checkbox,
  Paper,
  Grid,
  Button,
  FormControlLabel,
} from "@mui/material";

const LoginPage = () => {

  let {loginUser} = useContext(AuthContext)
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
        <form noValidate sx={{ width: "100%", mt: 3 }} onSubmit={loginUser}>
          <Grid>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Email Address"
              name="username"
              autoComplete="username"
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
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
