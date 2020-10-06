export function getLocalUser(){
    let user;
    try {
        user = JSON.parse(localStorage.getItem('user'));
    }catch (e) {
        localStorage.removeItem('user');
    }
    if(!user){
        try {
            user = JSON.parse(sessionStorage.getItem('user'));
        }catch (e) {
            sessionStorage.removeItem('user');
        }
    }
    return user ? { loggedIn: true, user } : {};
}
