import axios from "axios";
import React, { useState } from "react";
import "./App.scss";
import { Avatar, Box, Button, makeStyles, TextField } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import LockIcon from "@material-ui/icons/Lock";
import { baseURL } from "./settings/config";

const useStyles = makeStyles((theme) => ({
  hover: {
    "&:hover": {
      backgroundColor: "white !important",
    },
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  main: {
    height: "1px",
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    flexDirection: "column",
    backgroundSize: "cover",
    justifyContent: "flex-start",
    backgroundImage:
      "radial-gradient(circle at 50% 14em, #313264 0%, #00023b 60%, #00023b 100%)",
    backgroundRepeat: "no-repeat",
  },
  card: {
    width: "300px",
    marginTop: "6em",
    overflow: "hidden",
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
    borderRadius: "4px",
    color: "rgba(0, 0, 0, 0.87)",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    backgroundColor: " #fff",
  },
  form: {
    display: "block",
    marginTop: "0em",
    padding: "0 1em 1em 1em",
  },
  button: {
    width: "100%",
    borderRadius: "100px",
    border: "none",
    padding: "16px 32px",
    textDecoration: "none",
    margin: "4px 2px",
    cursor: "pointer",
  },
  input: {
    width: "100%",
    margin: "8px 0",
    borderColor: "rgb(49,50,100)",
  },
  label: {
    color: "#3f51b5",
    fontSize: "20px",
  },
  white: {
    color: "#fff",
  },
}));

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const register = () => {
    if (name !== "" && password !== "" && email !== "") {
      const data = {
        name: name,
        password: password,
        email: email,
        type: "User",
      };
      axios.post(baseURL + "customer/register", data).then((response) => {
        if (response.data !== 0) {
          setRedirect(true);
        }
      });
    }
  };
  let temp;
  const classes = useStyles();
  if (redirect === false) {
    temp = (
      <Card className={classes.main}>
        <CardContent className={classes.card}>
          <form className={classes.form}>
            <Box margin="1em" display="flex" justifyContent="center">
              <Avatar>
                <LockIcon />
              </Avatar>
            </Box>
            <TextField
              className={classes.input}
              type="text"
              name="name"
              onChange={nameHandler}
              label="Name"
            />
            <TextField
              className={classes.input}
              type="email"
              name="email"
              onChange={emailHandler}
              label="Email"
            />
            <TextField
              className={classes.input}
              type="password"
              name="password"
              onChange={passwordHandler}
              label="Password"
            />
          </form>
          <Button
            onClick={register}
            fullWidth
            variant="contained"
            color="primary"
            value="Verify"
          >
            Register
          </Button>
        </CardContent>
      </Card>
    );
  } else {
    temp = (
      <Card className={classes.main}>
        <CardContent>
          <center>
            <h1 className={classes.white}> Thank You!</h1>
          </center>
        </CardContent>
      </Card>
    );
  }
  return <div>{temp}</div>;
};
export default Register;
