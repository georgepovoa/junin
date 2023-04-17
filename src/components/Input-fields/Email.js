import { StyledH1, StyledInput, SubDiv } from "../styled-components/StyledForm"
import { useState } from "react"



const Email = () => {

    function onEmailChange(event){

        setEmail(event)
    }


    const [email, setEmail] = useState("");

    return (
        <SubDiv>
            <StyledH1>Crie alertas para seus destinos</StyledH1>
            <StyledInput placeholder="Insira seu e-mail" onChange={event => {onEmailChange(event.target.value)}} value={email}/>
        </SubDiv>
    )
}

export default Email