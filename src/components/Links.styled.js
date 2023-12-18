import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavLink = styled(Link)`
    color: ${({ theme }) => theme.mainColors.white};
    cursor: pointer;
    text-decoration: none;
    &.active {
        color: ${({ theme }) => theme.mainColors.dark};
        text-decoration: none;
    }
`;

export const StyledLink = styled(Link)`
    cursor: pointer;
    text-decoration: none;
    color: black;
`;

export const NavLink1 = styled(Link)`
    color: ${({ theme }) => theme.mainColors.black};
    cursor: pointer;
    text-decoration: none;
    &.active {
        color: ${({ theme }) => theme.mainColors.dark};
        text-decoration: none;
    }
`;