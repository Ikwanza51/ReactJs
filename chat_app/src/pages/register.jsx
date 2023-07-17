import React, { useState } from 'react'
import avatar from '../img/avatar.jpg'
import falcon from '../img/falcon.png'
import { NavLink } from 'react-router-dom'
import { auth, storage,db } from '../firebase'
import { createUserWithEmailAndPassword , updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from 'firebase/firestore'

export const Register = () => {
  const [err,setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    // console.log(file.name);

    try{
      const response = await createUserWithEmailAndPassword(auth, email, password);
      // console.log(response.user);

      const metadata = {
        contentType: 'image/jpeg'
      };

      const storageRef = ref(storage,email);
      // console.log(storageRef.name);
      // console.log(storageRef.fullPath);

      const uploadTask = uploadBytesResumable(storageRef, file, metadata);

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on('state_changed',(snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload progress: ' + progress + '%');
        },(error) => {
          setError(true);
          console.log("Error Occured While File Upload",error);
        },() => {
          console.log('File uploaded successfully');
          getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
            await updateProfile(response.user,{
              displayName: name,
              photoURL: downloadURL,
            });

            const userRef = doc(db,'users',response.user.uid);
            await setDoc(userRef,{
              displayName: response.user.displayName,
              email: response.user.email,
              photoURL: response.user.photoURL,
              uid: response.user.uid
            });
          });      
        console.log(auth.currentUser);
        console.log("Account Created");
      });
    }
    catch(error){
      setError(true);
      console.log("Error Occured While Registering",error);
    }
  };

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <img src={falcon} alt='logo'></img>
            <h2 className='register'>Register</h2>

            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Name'/>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='Password'/>
                <input style={{display:'none'}} type='file' id='file'/>
                <label htmlFor="file">
                  <img src={avatar} alt='icon'></img>
                  <span>Add Avatar</span>
                </label>
                <button type='submit'>Register</button>
            </form>
            <p>Already have an Account? <i><NavLink to='/login'>Login</NavLink></i></p>
            {err && <span className='errorMessage'>Error Occured</span>}
        </div>
    </div>
  )
}
