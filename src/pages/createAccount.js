import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
const CreateAccountPage =  () =>  {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [error,setError]=useState('');

    const navigate = useNavigate();

    const createAccount = async () => {
        try {
            if(password != confirmPassword ){
                setError('Password and confirm Password do not match');
                return ;
            }
            await createUserWithEmailAndPassword(getAuth(),email,password);
            navigate('/articles');
        }
        catch (e) {
            setError(e.message);
        }

    }
    return (
        <>
    <h1>Create Account</h1>
    {error && <p className="error">{error}</p>}
        <input placeholder="Your Email Address" value={email} onChange={e => setEmail(e.target.value)}/>
        <input type='password' placeholder="Your password" value={password} onChange={e => setPassword(e.target.value)}></input>
        <input type='password' placeholder="Re- Enter Your password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}></input>
        <button onClick={createAccount}>Create Account</button>
        <br></br>
        <Link to='/login'>Already have an account ? Login from Here.</Link>
        </>
);
}
export default CreateAccountPage;