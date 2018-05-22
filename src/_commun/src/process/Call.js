import * as Actions from '../actions/Call';
import axios from 'axios';

export function createProcess(dispatch,user) {
    dispatch(Actions.fetchCreate())

    axios.post('https://noodledistress.herokuapp.com/call/'+user).then(res => {
        dispatch(Actions.createSucces(res.data))
    }).catch(error => {
        dispatch(Actions.createFail(error))
    })
}

export function deleteProcess(dispatch,call) {
    dispatch(Actions.fetchDelete())

    axios.delete('https://noodledistress.herokuapp.com/call/'+call).then(res => {
        if(res.data === true){
            dispatch(Actions.deleteSucces())
        }
        else{
            dispatch(Actions.deleteFail('erreur'))
        }
    }).catch(error => {
        dispatch(Actions.deleteFail(error))
    })
}

export function showProcess(dispatch,user) {
    dispatch(Actions.fetchShow())

    axios.get('https://noodledistress.herokuapp.com/call/filter/'+user).then(res => {
        dispatch(Actions.showSucces(res.data))
    }).catch(error => {
        dispatch(Actions.showFail(error))
    })
}

export function answersProcess(dispatch,userId,callId) {
    dispatch(Actions.fetchAnswers())

    axios.post('https://noodledistress.herokuapp.com/answer/'+userId+'/'+callId).then(res => {
        dispatch(Actions.answersSucces(res.data))
    }).catch(error => {
        dispatch(Actions.answersFail(error))
    })
}
