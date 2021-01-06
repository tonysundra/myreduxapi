import {spawn} from 'redux-saga/effects'
import usersaga from './user-saga'

export default function* rootSaga() {
    yield spawn(usersaga)
}