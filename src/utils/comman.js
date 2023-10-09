export const Storedata = (name, number, email, userName, password, DateOfBirth, gender, address, localStorage) => {
    var userdata = JSON.parse(localStorage.getItem('userdata') || "[]")
    var data = {
        "name": name,
        "number": number,
        "email": email,
        "username": userName,
        "password": password,
        "DateOfBirth": DateOfBirth,
        "gender": gender,
        "address": address,
    }

    userdata.push(data);
    localStorage.setItem('userdata', JSON.stringify(userdata));
}

export const checkSignIn = (userName, password) => {
    var userdata = JSON.parse(localStorage.getItem('userdata') || "[]")
    let data = userdata.filter(function (e) {
        return e.username === userName && e.password === password;
    });
    
    console.log(data);


    if(data.length === 0){
           return false;
    }
    else{
       return true;
    }
    return;
}

