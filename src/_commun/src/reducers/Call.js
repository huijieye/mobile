const initialState = {
    loading:false,
    call:null,
    list:null,
    error:false,
    answer:null
}

export function callReducer(state = initialState, action) {
    switch (action.type) {
        case "call_fetch_create":
            return {
                ...state,
                loading: true
            }
        case "call_create_succes":
            return {
                ...state,
                loading:false,
                call: action.call
            }
        case "call_create_error":
            return {
                ...state,
                loading:false,
                error: action.error
            }
        case "call_fetch_delete":
            return {
                ...state,
                loading: true
            }
        case "call_delete_succes":
            return {
                ...state,
                loading:false,
                call: null
            }
        case "call_delete_error":
            return {
                ...state,
                loading:false,
                error: action.error
            }
        case "call_fetch_show":
            return {
                ...state,
                loading: true
            }
        case "call_show_succes":
            return {
                ...state,
                loading:false,
                list: action.list
            }
        case "call_show_error":
            return {
                ...state,
                loading:false,
                error: action.error
            }
        case "call_fetch_answers":
            return {
                ...state,
                loading: true
            }
        case "call_answers_succes":
            console.log(action)
            return {
                ...state,
                loading:false,
                answer: action.call.answerer
            }
        case "call_answers_error":
            return {
                ...state,
                loading:false,
                error: action.error
            }
        default:
            return state
    }
}