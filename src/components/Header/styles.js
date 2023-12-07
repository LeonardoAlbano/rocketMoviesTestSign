import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom-width:1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.SALMON};

    display: flex;
    justify-content: space-evenly;

    padding: 0 80px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    gap: 64px;

    > h2 {
        color: ${({ theme }) => theme.COLORS.SALMON};
        font-size: 24px;
    }


    > img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-right: -56px;
        line-height: 24px;

        align-items: end;

        span {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};

        }

        strong {
            font-size: 18px;
            color: ${({ theme }) => theme.COLORS.WHITE};

        }
    }
`;

export const Input = styled.input`

    width: 630px;
    height: 56px;

    padding: 19px 24px;
    align-items: flex-start;

    border: none;
    border-radius: 10px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};

`;