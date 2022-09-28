import { useContext } from "react";
import {AuthContext} from '../context/auth.context';

const ProfilePage = () => {
    
  const { user } = useContext(AuthContext);
  return (
    <div>
        <h1>ProfilePage</h1>
        <h3>Username</h3>
        <h2>{user.username}</h2>
        <h3>Campus</h3>
        <h2>{user.campus}</h2>
        <h3>Course</h3>
        <h2>{user.course}</h2>
    </div>
  )
}

export default ProfilePage