import {useState, useEffect} from 'react';
import {getAuth,onAuthStateChanged} from 'firebase/auth';
const useUser = () => {
    const [user,setUser]=useState(null);
    const [inLoading, setIsLoading]=useState(true);

    useEffect(() => {
     const unsubscribe = onAuthStateChanged(getAuth(),user => {
        setUser(user);
        setIsLoading(false);

     });
     return unsubscribe;
    },[]);

}