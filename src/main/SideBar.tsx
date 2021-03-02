import React from 'react';
import { darkmodeSelector } from '../store/darkmode/selectors/darkmodeSelector';
import MainSideBar from './../style/sidebar';
import { useRecoilValue } from 'recoil';
import sidebarSelector from './../store/sidebar/selectors/sidebarSelector';
import { codeState } from '../store/codes/atoms/codeState';

const SideBar = ()=>{
    const isDark = useRecoilValue(darkmodeSelector);
    const isOpen = useRecoilValue(sidebarSelector);
    const codes = useRecoilValue(codeState);
    console.log(MainSideBar);
    return(
            <MainSideBar isDark={isDark} isOpen={isOpen}>                                
                {codes.map(c=> c.code)}
            </MainSideBar>
    )
}

export default SideBar;