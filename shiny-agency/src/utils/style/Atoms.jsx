import { Link } from "react-router-dom";
import { keyframes, styled } from "styled-components";
import colors from "./colors";


const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }
`

export const ErrorDisplayer = styled.div`
    text-align: center;
    color: red;
    // background-color: #5a5a5a;
    padding: 25px;
    border-radius: 15px;
    font-weight: 300;
    font-size: 25px;
`
export const Loader = styled.div`
    padding: 10px;
    border: 6px solid ${colors.primary};
    border-bottom-color: transparent;
    border-radius: ${(props)=>props.radius?props.radius:'22px'};
    align-self: center;
    animation: ${rotate} 1s infinite linear;
    width: ${(props)=>props.width?props.width:0};
    height: ${(props)=>props.height?props.height:0};

`
    // ${(props)=>{
    //     props.height ? {"height": props.height} : {"height": 0};
    //     props.width ? {"width": props.width} : {"width": 0};
    // }}
export const StyledLink = styled(Link)`
    padding: 10px 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    text-align: center;
    ${ (props) => props.$isFullLink && `
        color: white;
        border-radius: 30px;
        background-color: ${colors.primary}
    `}
`