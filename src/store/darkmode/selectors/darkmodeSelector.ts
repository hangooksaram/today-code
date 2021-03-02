import { selector, useRecoilState } from "recoil";
import { darkmodeState } from "../atoms/darkmodeState";


const darkmodeSelector = selector({
    key : 'darkmodeSelector',
    get : ({get}) =>{
        const dark = get(darkmodeState);                
        switch (dark) {
            case 'Turn On' : return 'Turn On';
            case 'Turn Off' : return 'Turn Off';
        }
    }
})

export {darkmodeSelector}