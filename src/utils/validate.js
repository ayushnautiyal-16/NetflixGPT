const checkValidData = (name, email, password) => {
    if (name !== null && name.trim() === "") {
        return "Name is not valid";
    }
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

    if (!isEmailValid) return "Email id is not valid";
    if (!isPasswordValid) return "Password is not valid";

    return null;
};

export default checkValidData;