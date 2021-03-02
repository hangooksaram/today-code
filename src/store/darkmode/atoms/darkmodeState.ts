import { atom } from "recoil";

const darkmodeState = atom({
    key : 'darkmodeState',
    default : "Turn Off" ,
})

export {darkmodeState};