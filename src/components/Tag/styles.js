import styled from "styled-components";

export const Container = styled.span`
    font-size: 16px;
    padding: 16px;
    

    font-family: 'Roboto', sans-serif;

    border-radius: 5px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`

