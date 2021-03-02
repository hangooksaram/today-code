import { selector } from 'recoil';
import { sidebarState } from '../atoms/sidebarState';

const sidebarSelector = selector({
    key : 'sidebarSelctor',
    get : ({get})=>{
        const isOpen = get(sidebarState);
        console.log(isOpen);
        if(isOpen){
            return true;
        }
        else return false;
    }
})

export default sidebarSelector;
