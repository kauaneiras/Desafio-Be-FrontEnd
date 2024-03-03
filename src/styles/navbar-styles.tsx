import styled from 'styled-components';

const Nav = styled.nav`
    top: 0;
    position: fixed;
    height: 60px;
    width: 100vw;
    background-color: #fff;
    box-shadow: 0px 2px 8px 0px #00000033;
    display: flex;
    align-items: center;
`;

const Logo = styled.img`
    width: 44px;
    height: 35px; 
    margin-left: 32px;
    padding: 10px;
    gap: 10px;
`;

export { Nav, Logo };