import styled from 'styled-components';

export const Wrapper = styled.main`
    background: ${props => props.value % 2 !== 0 ? '#e2e2e2' : '#fff'};
`

export const ItemDone = styled.div`
    span {
        color: ${props => props.value ? '#008000' : '#FF0000'};
    }
`