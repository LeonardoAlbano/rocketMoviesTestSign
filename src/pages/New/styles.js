import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    > main{
        grid-area: content;
        overflow-y: auto;
        padding: 64px 0;

        Section .TagMarcadores{
            background: ${({ theme }) => theme.COLORS.BLACK};
            height: 88px;
            border-radius: 8px;

            display: flex;
            align-items: center;
            padding: 16px;
            
            gap: 24px;


        }

        Section:nth-child(3) {
            display: flex;
            justify-content: center;
            gap: 24px;
        }

        .buttonDelete{
            color: ${({ theme }) => theme.COLORS.SALMON};
            background: ${({ theme }) => theme.COLORS.BLACK};
        }


    }


`;

export const Form = styled.form`

    > header {
        display: flex;
        flex-direction: column;
        align-items: start;
        
        gap: 15px;

        margin-bottom: 36px;

    }

    > section {
        display: flex;
        gap: 40px;

        margin-bottom: 40px;
    }

    
`;

export const Content = styled.div`
    max-width: 1137px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;


`


