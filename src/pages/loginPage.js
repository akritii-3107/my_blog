import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { getAuth , signInWithEmailAndPassword } from 'firebase/auth';
const LoginPage =  () =>  {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');

    const navigate = useNavigate();

    const logIn = async() => {
        try {
        await signInWithEmailAndPassword(getAuth(),email,password);
        navigate('/articles');
        }
        catch(e) {
            setError(e.message);

        }
    }

    return (
        <>
    <h1>Login</h1>
    {error && <p className="error">{error}</p>}
        <input placeholder="Your Email Address" value={email} onChange={e => setEmail(e.target.value)}/>
        <input type='password' placeholder="Your password" value={password} onChange={e => setPassword(e.target.value)}></input>
        <button onClick={logIn}>Log In</button>
        <br></br>
        <Link to='/create-account'>Don't have an account ? Create One Here.</Link>
        </>
);
}
export default LoginPage;