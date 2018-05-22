const initialState = {
    loading:false,
    userInfo:null,
    error:false,
    watch:null
}



export function loginReducer(state = initialState, action) {
    switch (action.type){
        case "user_fetch_login":
            return {
                ...state,
                loading:true
            }

        case "user_login_succes":
            return {
                ...state,
                loading:false,
                userInfo: action.user
            }
        case "user_login_error":
            return {
                ...state,
                loading:false,
                error: action.error
            }
        case "user_login_out":
            return {
                ...state,
                loading:false
            }
        case "user_fetch_update":
            return{
                ...state,
                loading:true
            }
        case "user_update_success":
            return{
                ...state,
                loading:false,
                userInfo:action.user
            }
        case "updateFail":{
            return {
                ...state,
                loading:false,
                error: action.error
            }
        }
        case "signupUpdate":
            return{
                ...state,
                loading:true
            }
        case "signupSuccess":
            return{
                ...state,
                loading:false,
                userInfo:action.user
            }
        case "signupFail":{
            return {
                ...state,
                loading:false,
                error: action.error
            }
        }
        case "setWatch":
            return{
                ...state,
                watch:action.watchId
            }
        default:
            return state
    }

}