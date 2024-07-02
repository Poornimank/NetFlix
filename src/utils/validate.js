

export const checkValidData = (email,password) => {
   // const isNameValid=/^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(name);
    const isEmailValid=/^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid) return "Email is not valid";
    if(!isPasswordValid) return "Password is not valid";
    //if(!isNameValid) return "Name is not valid";

    return null

}

