import React, { useState, ChangeEvent, FormEvent } from 'react';
import './Register1.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
interface User {
  email: string;
  password: string;
  status:false;
}

const Register: React.FC = () => {
  const stateRandom = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState<User>({ email: '', password: '',status:false });

  const handleChange = (element: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = element.target;
    setUser({ ...user, [name]: value });
  };

  const handleRegister = (element: FormEvent<HTMLButtonElement>) => {
    console.log(user);
    element.preventDefault();
    dispatch({
      type: 'SUBMITFORM',
      payload: user,
    });
    navigate('/login', { state: { user } });
  };

  return (
    <form className='form-register'>
      <h2>Đăng ký</h2>
      <div className='input-box'>
        <input
          type="text"
          name='email'
          onChange={handleChange}
          value={user.email}
          placeholder='Nhập email...'
        />
      </div>
      <div className='input-box'>
        <input
          type="text"
          name='password'
          onChange={handleChange}
          value={user.password}
          placeholder='Nhập mật khẩu...'
        />
      </div>
      <button onClick={handleRegister}>Đăng ký</button>
    </form>
  );
};

export default Register;
