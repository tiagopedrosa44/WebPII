import API_URL from './config.js'

function authHeader(){
    let user = JSON.parse(localStorage.getItem('user'));

    if(user && user.accessToken){
        return {
            'Conetent-Type': 'application/json',
            'x-access-token': user.accessToken
        }
    }else{
        return {'content-type': 'application/json'};
    }
}

