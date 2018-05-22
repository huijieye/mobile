import * as Actions from '../actions/User';
import axios from 'axios';

export function loginProcess(dispatch,login) {
    dispatch(Actions.fetchLogin())

    axios.get('https://noodledistress.herokuapp.com/user/login/'+login).then(res => {
        if(res.status === 200){
            dispatch(Actions.loginSucces(res.data))
        }
        else{
            dispatch(Actions.loginFail('erreur'))
        }
    }).catch(error => {
        dispatch(Actions.loginFail(error))
    })
}

export function loginOutProcess(dispatch) {
    dispatch(Actions.loginOut())
}

export function updateProcess(dispatch,user) {
    dispatch(Actions.fetchUpdate())

    axios.put('https://noodledistress.herokuapp.com/user/',user).then(res => {
        dispatch(Actions.updateSuccess(res.data))
    }).catch(error => {
        dispatch(Actions.updateFail(error))
    })
}

export function signupProcess(dispatch,user) {
    dispatch(Actions.signupUpdate())

    axios.post('https://noodledistress.herokuapp.com/user/',user).then(res => {
        dispatch(Actions.signupSuccess(res.data))
    }).catch(error => {
        dispatch(Actions.signupFail(error))
    })
}
