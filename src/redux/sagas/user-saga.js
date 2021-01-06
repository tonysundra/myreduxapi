import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {SET_LOADING, GET_USERS, GET_USERS_REQUESTED,
    ADD_USER, ADD_USER_REQUESTED, GET_USER, GET_USER_REQUESTED,
    DELETE_USER, DELETE_USER_REQUESTED} from '../action/user-action'
import axios from 'axios'

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=cseckler1234';

function* getUsersSaga(){
    yield put({type:SET_LOADING});  
    const uri = `${ROOT_URL}/posts${API_KEY}`;
    const users = yield call(axios.get, uri);    
    yield put({type: GET_USERS, playload: users.data});
}

function* getUserSaga({ id }) {
    try {                  
        yield put({type:SET_LOADING});  
        const uri = `${ROOT_URL}/posts/${id}${API_KEY}`;
        const response = yield call(axios.get, uri);          
        yield put({
            type: GET_USER,
            playload: response.data
        });
    } catch (error) {      
      console.log('Request failed! Could not fetch post.');
    }
}


function* delUsersaga({id, callback}) {
    try {             
        yield put({type:SET_LOADING});  
        const uri = `${ROOT_URL}/posts/${id}${API_KEY}`;
        const response = yield call(axios.delete, uri);     
        callback();     
        yield put({
            type: DELETE_USER,
            payload: response.data
        });
    } catch (error) {
      console.log('Request failed! Could not delete post.');
    }
}

function* addUserSaga({playload, callback}){    
    try {     
        yield put({type:SET_LOADING});  
        const uri = `${ROOT_URL}/posts${API_KEY}`;        
        const response = yield call(axios.post, uri, playload); 
        callback();
        yield put({
          type: ADD_USER,
          playload: response.data
        });
      } catch (error) {
        console.log('Request failed! Could not delete post.');
      }
}

export default function* usersaga() {
    yield takeEvery(GET_USERS_REQUESTED, getUsersSaga);
    yield takeLatest(ADD_USER_REQUESTED, addUserSaga);
    yield takeEvery(GET_USER_REQUESTED, getUserSaga);
    yield takeLatest(DELETE_USER_REQUESTED, delUsersaga);
}