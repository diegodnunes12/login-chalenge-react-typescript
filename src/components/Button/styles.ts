import styled from "styled-components";


export const ButtonStyle = styled.button`
    height: 42px;
    border: solid 1px #631f7a;
    background-color: #631f7a;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 18px;

    &:hover {
        cursor: pointer;
        background: #431652;
    }

    &:disabled, &[disabled] {
        opacity: 0.6;

        &:hover {
            cursor: default;
            background: #631f7a;
        }
    }
`;