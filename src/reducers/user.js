
const initUserState={
    age : '18',
    name : 'czhs',
    phone : '13545702904',
    isLoading : false
}

export default function user(state=initUserState,action){
    let {payload}=action;
    switch(action.type){
        case 'USER_REQUEST':
            return {...state,isLoading:payload.loading};
        case 'USER_SUCCESS':
            return {
                ...state,
                ...payload.response,
                isLoading:payload.loading
            };
        case 'USER_FAILED':
            return {
                errmsg : payload.errmsg,
                code : payload.code
            }
        default:
            return state;
    }
}