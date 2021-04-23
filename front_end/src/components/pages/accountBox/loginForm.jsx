import React, { useContext } from "react";
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { useHistory } from "react-router";
 export function LoginForm(props) {

     const emailRef = React.useRef();
     const passwordRef = React.useRef();
     const { switchToSignup } = useContext(AccountContext);
     const history = useHistory();

    function onSubmit() {
        alert("The form was submitted");
        // console.log(emailRef.current.value)
        // console.log(passwordRef.current.value)

        let empInfo={
            username:emailRef.current.value,
            password:passwordRef.current.value
        };
        console.log(empInfo);
        const getdata= JSON.stringify(empInfo);
        console.log(getdata);


        const fetch = require('node-fetch');

        fetch('http://localhost:3000/signin',{
            method: 'POST',
            body: JSON.stringify(empInfo),
            headers:{'Content-type':'application/json'}
        }).then(res => res.json() )
            .then( json => {
                        // this.props.setUserData(json.accessToken, json.username);
                if(json.token!=="" ) {
                    localStorage.setItem('token', json.token);
                    localStorage.setItem('username', empInfo.username);
                    history.push({
                        pathname:  "/home"
                    });
                }
                // localStorage.setItem('token', json.token);
                const tok = localStorage.getItem('token');
                console.log("here")
                console.log(tok);
                // localStorage.setItem('username', json.username);
                const tokf = localStorage.getItem('username');
                console.log("here")
                console.log(tokf);

                // console.log(json.token)
                }
            )
            .catch(err => console.log(err));
    }


        return (

            // <Navbar/>
            <BoxContainer>
                <FormContainer>
                        <Input
                            name="email"
                            ref={emailRef}
                            type="email"
                            placeholder="User name"
                        />
                        <Input
                            name="password"
                            ref={passwordRef}
                            type="password"
                            placeholder="Password"
                        />
                    </FormContainer>
                    <Marginer direction="vertical" margin={10}/>
                    <MutedLink href="#">Forgot your password?</MutedLink>
                    <Marginer direction="vertical" margin="1.6em"/>
                    <SubmitButton type="submit" onClick={onSubmit}>Login</SubmitButton>
                    <Marginer direction="vertical" margin="1em"/>
                    <MutedLink href="#">
                        Don't have an account?{" "}
                        <BoldLink href="#" onClick={switchToSignup}>
                        Signup
                    </BoldLink>
                </MutedLink>
            </BoxContainer>

        );

}


