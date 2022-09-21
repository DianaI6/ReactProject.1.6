import { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";


function LoginPage() {
    const navigate = useNavigate();
    const [inputValues, setInputValues] = useState({
        email: '',
        password: '',
    });

    function handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setInputValues({
            ...inputValues,
            [name]: value,
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await fetch(`http://localhost:3000/auth/login`, {
            method:'POST',
            headers: {
                Accept: 'aplication/json',
                "Content-type": 'application/json',
            },
            body: JSON.stringify(inputValues),
        });

        const data = await response.json();
        localStorage.setItem('token'.data.token);
        // console.log(data);
        // navigate('/products');
    }

    return (
        <div>
            <form
                className="flex flex-col gap-5 items-center py-20"
                onSubmit={handleSubmit}    
            >                
                <input
                    className="border border-blue-500 rounded-md px-2 py-3"
                    type={'email'}
                    name={'email'}
                    value={inputValues.email}
                    onChange={handleChange}
                />
                <input
                    className="border border-blue-500 rounded-md px-2 py-3"
                    type={'password'}
                    name={'password'}
                    value={inputValues.password}
                    onChange={handleChange}
                />

                <Button type="submit" >Log In</Button>
            </form>
        </div>
    );
}

export default LoginPage;