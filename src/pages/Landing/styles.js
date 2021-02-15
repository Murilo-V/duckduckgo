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
`;
