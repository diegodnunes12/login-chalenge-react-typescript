import styled from "styled-components";


export const InputText = styled.input`
    height: 30px;
    border: solid 1px #631f7a;
    padding: 5px 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    color: #631f7a;
    font-size: 18px;

    &:focus {
        outline: none;
        border: solid 2px #431652;
    }
`;

export const ErrorText = styled.p`
    color: #802525;
    font-size: 14px;
    margin-top: 0;
`;