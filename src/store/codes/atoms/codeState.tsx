import { atom } from 'recoil';

interface CodeState {
    code : string,
    type : string,
}

const defaultState = {
    code : '',
    type : ''
}

const inputState = atom<CodeState>({
    key : "inputState",
    default : defaultState
})

const codeState = atom<CodeState[]>({
    key : 'codeState',
    default : [defaultState]
})

export {codeState, inputState};