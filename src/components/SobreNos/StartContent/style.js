import styled from "styled-components";

export const Container = styled.section`
    padding: 50px 100px;
    padding-top: 110px;
    @media only screen and (max-width: 1200px){
        padding: 50px 10%;
        padding-top: 80px;
    }

    background: linear-gradient(27deg, #5A3CFF, #3385FF);

    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: center;

    @media only screen and (max-width: 1400px){
        gap: 70px;
    }

    & * {
        color: #fff;
    }
`
export const ContentTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    
    width: 70%;
    @media only screen and (max-width: 1400px){
        width: 100%;
    }
`
export const Title = styled.h1`
    font-size: 47px;
`

export const Text = styled.p`
    font-size: 27px;
    `
export const ContentImage = styled.div`
    width: 30%;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 1400px){
        width: 100%;
    }

    & img {
        width: 400px;
        object-fit: contain;

        @media only screen and (max-width: 1700px){
            width: 400px;
        }
        @media only screen and (max-width: 500px){
            width: 300px;
        }
    }

    & img:nth-child(2) {
        position: absolute;
        top: 40%;
        right:60%;
        transform: translate(-50%, -50%) rotate(-45deg);
        transform-origin: top center;


        width: 130px;
        @media only screen and (max-width: 1700px){
            width: 130px;
        }
        @media only screen and (max-width: 500px){
            width: 80px;
        }

        animation: rotation 1.5s infinite ease;

        @keyframes rotation {
            0% {
                transform: translate(-50%, -50%)  rotate(-15deg);
            }
            50% {
                transform: translate(-50%, -50%)  rotate(-70deg);
            }
            100% {
                transform: translate(-50%, -50%)  rotate(-15deg);
            }
        }
    }
`