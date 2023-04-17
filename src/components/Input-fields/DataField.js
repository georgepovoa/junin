import { StyledH1, StyledInput, SubDiv } from "../styled-components/StyledForm"
import { useState } from "react"



const InputData = (props) => {

    function onInputDataChange(event) {

        setInputData(event)
    }
    const date = new Date().toISOString().substring(0, 10);
    const [InputData, setInputData] = useState(date);

    return (
        <SubDiv>
            <StyledH1>{props.title}</StyledH1>

            <StyledInput onChange={event => { onInputDataChange(event.target.value) }} value={InputData} type="date" name={props.name} />
        </SubDiv>
    )
}

export default InputData