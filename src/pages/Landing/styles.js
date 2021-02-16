import styled from 'styled-components';

export const Container = styled.div`
    background-color: #1D1D1D;
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
        max-width: 120px;
        margin-bottom: 15px;
    }

    h1 {
        font-weight: 500;
        color: #FFF;
        font-size: 27pt;
    }

    form {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 42px;

        input {
            width: 550px;
            padding: 10px;
            font-size: 15pt;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
            background-color: #333333;
            color: #FFF;
        }

        img {
            max-width: 53px;
            background-color: #333333;
            padding: 10px 15px 10px 15px;
            margin: 0;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            cursor: pointer;
            
            &:hover {
                filter: brightness(150%);
            }
        }
    }
`;
