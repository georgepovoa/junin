import hurbLogo from "../img/logo-hurb.png"
import { HeaderDiv, StyledLogo } from "./styled-components/StyledHeader"

const Header = () => {
    return (
            <HeaderDiv>
                <StyledLogo src={hurbLogo}/>
                <input placeholder="Email"></input>
            </HeaderDiv>
    )
}

export default Header
