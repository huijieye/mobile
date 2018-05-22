export function fetchLogin() {
    return {
        type:"user_fetch_login"
    }
}

export function loginSucces(user) {
    return {
        type:"user_login_succes",
        user
    }
}

export function loginFail(error) {
    return {
        type:"user_login_error",
        error
    }
}

export function loginOut() {
    return {
        type:"user_login_out",
    }
}

export function fetchUpdate() {
    return{
        type:"user_fetch_update"
    }
}

export function updateSuccess(user) {
    return{
        type:"user_update_success",
        user
    }
}

export function updateFail(error) {
    return {
        type:"user_update_error",
        error
    }
}

export function signupUpdate() {
    return{
        type:"user_fetch_signup"
    }
}

export function signupSuccess(user) {
    return{
        type:"user_signup_success",
        user
    }
}

export function signupFail(error) {
    return {
        type:"user_signup_error",
        error
    }
}

export function userWatch() {
    return{
        type:"user_fetch_watch"
    }
}

export function watchSuccess(user) {
    return{
        type:"user_watch_success",
        user
    }
}

export function watchFail(error) {
    return {
        type:"user_watch_error",
        error
    }
}

export function setWatch(watchId) {
    return {
        type:"setWatch",
        watchId
    }
}