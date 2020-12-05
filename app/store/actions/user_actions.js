import axios from 'axios'
import { SIGN_IN, SIGN_UP } from '../types'

export function signIn(){
    return {
        type: SIGN_UP,
        payload: {
            user:'elio@gmail.com',
            token: 'kabcdefghijkl'
        }
    }
}


export function signUp(){
    return {
        type: SIGN_IN,
        payload: {
            user: 'elio@gmail.com',
            token: 'kabcdefghijkl'
        }
    }
}
