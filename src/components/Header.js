import React from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser,removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptslice';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {
    const dispatch= useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store=>store.user);
    const handleSignOut=()=>{
        signOut(auth).then(() => {
}).catch((error) => {
    navigate("/error");
});
    };

        useEffect(() => {
        const unsubscribe =onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName,photoURL} = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL:photoURL}));
                navigate("/browser");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });
        return ()=> unsubscribe();
    }, [])

    const handleGptSearchClick = ()=>{
        // Toggle my GPT search
        dispatch(toggleGptSearchView());
    }

    const handleLanguageChange=(e)=>{
        dispatch(changeLanguage(e.target.value));
        // console.log(e.target.value);
    }

    return (
        <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
            <img
            className='w-44'
                src={LOGO}
                alt="Logo" />
                {user && <div className='flex p-2'>
                    <select className='p-2 m-2 bg-gray-900 text-white rounded-lg 'onChange={handleLanguageChange}>
                        {SUPPORTED_LANGUAGES.map(lang=> <option key ={lang.identifier}value={lang.identifier}>{lang.name}</option>)}
                    </select>
                <button className='py-2 px-4 m-4 my-2 bg-purple-800 text-white rounded-lg'
                onClick={handleGptSearchClick}
                > GPT Search</button>
                    <img
                    className='w-12 h-12'
                    src={user?.photoURL} alt="user-icon" />
                    <button onClick={handleSignOut}className='font-bold text-white'>Sign out</button>
                </div>
}
        </div>
    )
}

export default Header
