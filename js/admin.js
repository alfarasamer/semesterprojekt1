checkAccessRights();
function checkAccessRights() {
    let token = sessionStorage.getItem("token");

    let role;
    let tokenContent;
    if (token!=="null") {
    tokenJson = JSON.parse(atob(token));

    role = tokenJson.role;
    tokenContent = tokenJson.token;
    }
    if (role !="ROLE_ADMIN") {
        window.location.replace('/forbidden.html');
    }
    
}
