//export const GET_CONTENTBAGS = "GET_CONTENTBAGS";
export const ADD_CONTENTBAGS = "ADD_CONTENTBAGS";
export const CONTENTBAG_AVAILABLE = "CONTENTBAG_AVAILABLE";

export const addContentBag = (contentBag) => ({
    type : ADD_CONTENTBAGS,
    data : {contentBag}
})

export const getContentBags = (contentBags) => ({
    type : CONTENTBAG_AVAILABLE,
    data : {contentBags}
})