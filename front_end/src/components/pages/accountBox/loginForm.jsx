import React, { useContext } from "react";
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    InputLabel,
    MutedLink,
    SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";


export function LoginForm(props) {
    const { switchToSignup } = useContext(AccountContext);
    function myFunction() {
        alert("The form was submitted");
    }



    return (
        <BoxContainer>
            <FormContainer>
                <Input
                    type="email"
                    placeholder="User name"
                />
                <Input
                    type="password"
                    placeholder="Password"
                />
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <MutedLink href="#">Forgot your password?</MutedLink>
            <Marginer direction="vertical" margin="1.6em" />
            <SubmitButton type="submit" onsubmit="myFunction()">Login</SubmitButton>
            <Marginer direction="vertical" margin="1em" />
            <MutedLink href="#">
                Don't have an account?{" "}
                <BoldLink href="#" onClick={switchToSignup}>
                    Signup
                </BoldLink>
            </MutedLink>
        </BoxContainer>

    );
}