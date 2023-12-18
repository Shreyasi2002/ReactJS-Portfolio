import styled from 'styled-components';

export const SkillList = styled.div`
    /* margin-left: 4%; */
    display: inline-flex;
    flex-wrap: wrap;

    span {
        margin: 6px;
        margin-left: 0;
        color: black;
        background-color: #91C6D7;
        padding: 4px 14px;
        border-radius: 20px;
        font-size: 15px;
    }
`;

export const Star = styled.div`
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: ${props => (props.active ? '#ffc806' : '#ddd')};
    clip-path: polygon(
        50% 0%,
        61% 35%,
        98% 35%,
        68% 57%,
        79% 91%,
        50% 70%,
        21% 91%,
        32% 57%,
        2% 35%,
        39% 35%
    );
`;