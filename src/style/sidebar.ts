import styled, {keyframes} from 'styled-components';


const fadein = keyframes`
    from {
        transform : translateX(-400px);
    }
    to { 
        transform : translateX(0px);
    }
`

const fadeout = keyframes`
    from {
        transform : translateX(0px);
    }
    to { 
        transform : translateX(-400px);
    }
`

const MainSideBar = styled.div`
    width : 30%;    
    background-color : black;
    background-color : ${props=> props.isDark === 'Turn On' ? 'white' : 'black'};
    color : ${props=> props.isDark === 'Turn On' ? 'black' : 'white'};       
    animation : ${props=> props.isOpen ? fadein : fadeout} forwards 1s; 
`


export default MainSideBar;