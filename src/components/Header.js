import React ,{useEffect} from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
import { Empty_Profile } from '../utils/constants';

const Header = () => {
    const dispatch=useDispatch(); 
    const navigate=useNavigate();
    const user=useSelector(store=>store.user);
    

  const handleSignOut=()=>
    {
      signOut(auth).then(() => {
        // Sign-out successful.
      
      }).catch((error) => {
        navigate('/error');
      });
    }


  useEffect(()=>
    {
  
     const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
          
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({
            uid:uid,
            email:email,
            displayName:displayName,
            photoURL:photoURL}));
           navigate('/browse')
        } else {
    
          dispatch(removeUser());
          navigate('/');
          
        }
      });
       
      return ()=>unsubscribe();

    },[])

  return (
    <div className='absolute flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black z-10'>
        <img 
        className='w-44' 
        src={LOGO} 
        alt="logo"/>
        
       { user && (<div className='flex flex-row'>
        <img
        className='w-12 h-12 p-2'
        src={user && user.photoURL ? user.photoURL:Empty_Profile}
        alt="userIcon"
        />
        
        <button className='text-white pb-4' onClick={handleSignOut}>Sign Out</button>
        </div>)}
   </div>
  )
}

export default Header