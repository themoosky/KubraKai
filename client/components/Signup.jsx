import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'; 
import Account from './Account.jsx'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        width: '50ch',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "1px solid black",
        borderRadius: '5px',
        backgroundColor: "white",
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      }
  }));


export default function Signup(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const classes = useStyles();
    return(
      <Router>
      <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Switch>
              <Route path="/signup">
                  <h2>CREATE AN ACCOUNT</h2>
                    <TextField id="outlined-basic" 
                            label = "name" 
                            classname = {classes.textField}
                            onChange={event => setName(event.target.value)} 
                            variant="outlined" />
                    <TextField id="outlined-basic" 
                            label = "email" 
                            classname = {classes.textField}
                            onChange={event => setEmail(event.target.value)} 
                            variant="outlined" />
                    <TextField id="outlined-basic" 
                            label = "password" 
                            classname = {classes.textField}
                            onChange={event => setPassword(event.target.value)} 
                            variant="outlined" />
                    <Button><Link to="/account"
                          onClick={() => {
                            console.log('name:', name)
                            console.log('email:', email)
                            console.log('password:', password)}}
                            >SIGN UP</Link></Button>
                  </Route>
                  <Route path="/account">
                    <Account />
                  </Route>

          </Switch>
      </section>

      </Router>
    )
};