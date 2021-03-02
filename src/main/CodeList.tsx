import React from 'react';
import { ListContainer } from '../style/container';
import Input from './Input';
import { useRecoilValue } from 'recoil';
import { darkmodeSelector } from '../store/darkmode/selectors/darkmodeSelector';

const CodeList = ()=>{
    const isDark = useRecoilValue(darkmodeSelector);
    return(
        <ListContainer>
            <Input/>
        </ListContainer>     
    )
}

export default CodeList;