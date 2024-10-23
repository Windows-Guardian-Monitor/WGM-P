import styled from "styled-components";

export const Container = styled.section`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 30px;
    
    padding: 50px 10%;
    padding-top: 110px;
    padding-bottom: 100px;
    
    @media only screen and (max-width: 1200px){
        padding: 50px 10%;
        padding-top: 80px;
        padding-bottom: 100px;
    }

    h1 {
        font-size: 2.5rem;
    }
    h3 {
        font-size: 1.5rem;

    }
    div span{
        display: block;
        width: 100%;
        height: 1px;
        background: ${props => props.theme.colors.secound};
    }
`
export const DownloadP = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    
    margin-top: 60px;

    a {
        border: 1px ${props => props.theme.colors.blue} solid;
        border-radius: 10px;
        width: 500px;
        height: 250px;
        
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;

        flex-wrap: wrap;

        overflow: hidden;

        transition: all 0.15s;

        &:hover {
            scale: 1.005;
        }

        div {
            height: 75%;
            width: 100%;

            display: flex;
            align-items: center;
            justify-content: space-evenly;


            img {
                height: 70%;
            }
            h3 {
                font-size: 25px;
                margin-bottom: 5px;
            }
            li {
                font-size: 17px;
                margin-left: 10px;
            }
        }

        span{
            width: 100%;
            height: 25%;
            background: ${props => props.theme.colors.blue};
            color: ${props => props.theme.colors.primary};
            padding: 20px;

            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`