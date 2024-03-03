import styled from 'styled-components';

const Titles = styled.div`
    background: linear-gradient(180deg, #5A84C0 0%, #594ED2 100%);
    border-radius: 8px 8px 0px 0px;
    width: 100%;
    display: flex;
    height: 47px;
    justify-content: center;
    align-items: center;
    padding: 14px, 32px, 14px, 32px;
    @media (max-width: 768px) {
        justify-content: space-between;
    }
`;

const Title = styled.h2`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: white;
    width: 20%;
    @media (max-width: 768px) {
        display:none;
    }
`;

const Photo = styled.h2`
    display: flex;
    align-items: center;
    color: white;
    width: 12%;
    justify-content: center;
    @media (max-width: 768px) {
        width: 20%;
    }
`;

const Name = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    width: 28%;
    @media (max-width: 768px) {
        width: 20%;
    }
`;

const Dot = styled.div`
    display: none;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: white;
    @media (max-width: 768px) {
        display: block;
    }
`;

const DotContainer = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    width: 20%;
    @media (max-width: 768px) {
        display: flex;
    }
`;

export { Titles, Title, Photo, Name, Dot, DotContainer };