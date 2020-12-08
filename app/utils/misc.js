import { AsyncStorage } from 'react-native'
export const FIREBASEURL = `react-native-nba-34444.firebaseapp.com`
export const APIKEY = `AIzaSyDG4lQyEG3dnvLsNc6W4XeC8Ack7Euw0Ec`
export const SIGNUP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIKEY}`
export const SIGNIN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKEY}`
export const REFRESH = `https://securetoken.googleapis.com/v1/token?key=${APIKEY}`

export const getTokens = (cb) => {

    AsyncStorage.multiGet([
        '@NBA_App@token',
        '@NBA_App@refreshToken',
        '@NBA_App@expireToken',
        '@NBA_App@uid'
    ]).then( value => {
        
        cb(value);
    });

}

export const setTokens = (values,cb) => {
    const dateNow = new Date();
    const expiration = dateNow.getTime() + (3600 * 1000);
 
    AsyncStorage.multiSet([
        ['@NBA_App@token',values.token],
        ['@NBA_App@refreshToken',values.refToken],
        ['@NBA_App@expireToken',expiration.toString()],
        ['@NBA_App@uid',values.uid]
    ]).then( response => {
        cb();
    });
}

export const convertFirebase = (data) => {
    const newData = [];

    for(let key in data){
        newData.push({
            ...data[key],
            id: key
        })
    }
    return newData;
}

export const findTeamData = (itemId, teams) => {
    const value = teams.find((team)=>{
        return team.id === itemId
    })
    return value;
}