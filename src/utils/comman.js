export const Storedata = (name,number,email,userName,password,DOB,gender,address,localStorage) => {
    var userdata=JSON.parse(localStorage.getItem('userdata') || "[]")
    var data={
        "name": name,
        "number": number,
        "email": email,
        "username": userName,
        "password": password,
        "DOB": DOB,
        "gender": gender,
        "address": address,
    }

    userdata.push(data);
    localStorage.setItem('userdata' ,JSON.stringify(userdata));
}

