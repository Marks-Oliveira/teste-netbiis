import React from 'react';

import * as S from './styles';

export default function Todo({ id, description, done }) {

    return (
        <S.Wrapper value={id}>
            <div >
                <div>{id} - {description}</div>
                <div >Feito? {done === true ? 'Sim' : 'Não'}</div>
            </div>
            <div >
                <button type="button" >Ok</button>
            </div>
        </S.Wrapper>
    )
}