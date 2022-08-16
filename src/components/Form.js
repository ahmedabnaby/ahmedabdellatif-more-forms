import React, {useState} from 'react';

const Form = (props) =>{

    const {userList, setUserList} = props;

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const submitHandler = (e) =>{
        e.preventDefault();

        setUserList([...userList, {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }])

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }


    return(
        <div>
            <form onSubmit={submitHandler}>
                
                <p>
                    {firstName.length > 0 && firstName.length < 2 ? (
                        <span>
                            Your first name must be at least 2 characters long!!!
                        </span>
                    ) : null}
                <label>First Name:</label>
                <input onChange={(e) =>{
                    setFirstName(e.target.value);
                }}
                value = {firstName}
                name="name"
                type = "text"
                />
                </p>

                <p>
                    {lastName.length > 0 && lastName.length < 2 ? (
                        <span>
                            Your last name must be at least 2 characters long!!!
                        </span>
                    ) : null}
                <label>Last Name:</label>
                <input onChange={(e) =>{
                    setLastName(e.target.value);
                }}
                value = {lastName}
                name="lastName"
                type = "text"
                />
                </p>

                <p>
                {email.length > 0 && email.length < 5 ? (
                        <span>
                            Your email must be at least 5 characters long!!!
                        </span>
                    ) : null}
                <label>Email:</label>
                <input onChange={(e) =>{
                    setEmail(e.target.value);
                }}
                value = {email}
                name="email"
                type = "text"
                />
                </p>

                <p>
                {password.length > 0 && password.length < 8 ? (
                        <span>
                            Your password must be at least 8 characters long!!!
                        </span>
                    ) : null}
                <label>Password:</label>
                <input onChange={(e) =>{
                    setPassword(e.target.value);
                }}
                value = {password}
                name="password"
                type = "text"
                />
                </p>

                <p>
                {confirmPassword.length > 0 && confirmPassword.length < 8 ? (
                        <span>
                            Your confirmed password must be at least 8 characters long!!!
                        </span>
                    ) : null}
                <label>Confirm Password:</label>
                <input onChange={(e) =>{
                    setConfirmPassword(e.target.value);
                }}
                value = {confirmPassword}
                name="confirmPassword"
                type = "text"
                />
                </p>

                <input className="submitButton" type="submit" value="Add User"/>
            </form>

        </div>
    )
}

export default Form;