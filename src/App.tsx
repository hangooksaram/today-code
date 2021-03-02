import React from 'react';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

import Main from './main/Main';

const App = () => {    
    return(
        <RecoilRoot>                               
            <Main/>
        </RecoilRoot>
    )  
};

export default App;