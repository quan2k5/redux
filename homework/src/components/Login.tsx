import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Login1.css';
export default function Login() {
  const location = useLocation();
  const [user, setUser] = useState(location.state?.user || { email: '', password: '' });
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleLogin = (e:any) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <form className='form-login' onSubmit={handleLogin}>
      <h2>Đăng nhập</h2>
      <div className='input-box'>
        <input type="email" name='email' value={user.email} onChange={handleChange} placeholder='Nhập email...' required />
      </div>
      <div className='input-box'>
        <input type="password" name='password' value={user.password} onChange={handleChange} placeholder='Nhập mật khẩu...' required />
      </div>
      <button type="submit">Đăng nhập</button>
    </form>
  );
}
