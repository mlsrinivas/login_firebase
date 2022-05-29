import firebase from 'firebase/compat/app';
import React, {useState} from 'react';
import {TextField, Grid, Button} from '@mui/material';
import {makeStyles} from '@mui/styles';
import {auth} from './firebase';
import {Formik} from 'formik';
import * as Yup from 'yup';
import GoogleIcon from '@mui/icons-material/Google';

const useStyles = makeStyles(theme => ({
    notchedOutline: {
      borderWidth: "3px",
      borderColor: "#b8c1ec !important",
    }
}));

const LoginPage = () => {

    const classes = useStyles();

    const handleSingUp = () => {
        // auth.createUserWithEmailAndPassword(email, pwd).then(u => console.log(u, 'then')).catch(err => console.log(err))
    }

    const handleGoogleSignIn = async () =>{
        try{
          await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        }
        catch(err){
          console.log(err);
        }
      }

    return(
        <Formik
            initialValues = {{
                email: '',
                password: ''
            }}
            // validate = {(values) => {
            //     let errors = {};
            //     const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            //     if(values.email === ''){
            //         errors.email = "Email is required"
            //     }else if(!emailRegex.test(values.email)){
            //         errors.email = "Invalid email"
            //     }
            //     if(values.password === ''){
            //         errors.password = "Password is required"
            //     }
            //     return errors;
            // }}
            validationSchema = {() => Yup.object({
                email: Yup.string().email('Invalid email').required('Email is required'),
                password: Yup.string().required('Password is required')
            })
            }
            onSubmit = {(values) => {
                auth.signInWithEmailAndPassword(values.email, values.password)
                .then(u => alert(u))
                .catch(err => alert(err.message))
                
            }}
        >
            {({
                handleChange,
                handleSubmit,
                handleBlur,
                values,
                errors,
                touched,
                getFieldProps
            }) => (
                <form onSubmit={handleSubmit}>
                    <Grid style={{display:'flex', justifyContent:'center', alignItems:'center', height: '100vh', width:'100%', flex:1, backgroundColor:'#b8c1ec'}}>
                        <Grid style={{height: 500, width: 300, backgroundColor:'#FFF', borderRadius: 30, padding: 20}}>
                            <TextField 
                                id="outlined-basic" 
                                name="email" 
                                label="Email" 
                                variant="outlined"
                                style={{margin: 10, marginTop: 20, marginBottom: 0}} 
                                {...getFieldProps('email')}
                                InputProps={{
                                    classes: {
                                    notchedOutline: classes.notchedOutline
                                    }
                                }}
                            />
                            <p style={{color:'red', fontSize:12, paddingLeft: 15}}>{touched.email && errors.email ? errors.email : null}</p>
                            <TextField 
                                id="outlined-basic" 
                                name="password" 
                                label="Password" 
                                variant="outlined"
                                style={{margin: 10}} 
                                // value={values.password}
                                // onChange={handleChange}
                                // onBlur={handleBlur}
                                {...getFieldProps('password')}
                                type={'password'}
                                InputProps={{
                                    classes: {
                                    notchedOutline: classes.notchedOutline
                                    }
                                }}
                            />
                            <p style={{color:'red', fontSize:12, paddingLeft: 15}}>{touched.password && errors.password ? errors.password : null}</p>
                            <Grid style={{alignItems:'center', justifyContent:'center', display:'flex', marginTop: 10}}>
                                <Button variant="contained" type="submit" style={{color:'#FFF', backgroundColor:'#b8c1ec', height: 40, width: 230}}>Login</Button>
                            </Grid>
                            <Grid style={{alignItems:'center', justifyContent:'center', display:'flex', marginTop: 10}}>
                                <Button variant="contained" onClick={handleSingUp} style={{color:'#FFF', backgroundColor:'#b8c1ec', height: 40, width: 230}}>Signup</Button>
                            </Grid>
                            <div style={{borderTop:'3px solid #b8c1ec', marginTop: 20}}></div>
                            <GoogleIcon onClick={handleGoogleSignIn} style={{color:'#b8c1ec', cursor: 'pointer', padding: 100,}}/>
                        </Grid>
                    </Grid>
                </form>
            )}
        </Formik>
    )
}

export default LoginPage;