import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ onSignIn, prevLocation }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = name && password.length >= 8 && !passwordError;
    setIsFormValid(isValid);
  }, [name, password, passwordError]);

  const handleSignIn = (e) => {
    e.preventDefault();
    if (isFormValid) {
      onSignIn(name);
      navigate(prevLocation || '/');
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
    }
  };

  const handleGoBack = () => {
    navigate(prevLocation || '/');
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-orange-400 via-orange-350 to-orange-300'>
      <div className='flex justify-center items-center flex-col mx-4 mt-12'>
        <div className='bg-[#F5F5F5] w-[500px] h-[400px] p-4 rounded-lg shadow-lg flex flex-col items-center justify-center mt-16 '>
          <div className='flex items-center justify-between w-full mb-5'>
            <h3 className='text-xl font-medium text-black'>
              Sign In
            </h3>
            <button
              onClick={handleGoBack}
              className='text-xl font-bold text-black px-4 py-2 text-center'
            >
              &times;
            </button>
          </div>
          <form className='space-y-5 w-full' onSubmit={handleSignIn}>
            <div>
              <label htmlFor='name' className='block mb-1 text-sm font-medium text-black'>
                Username
              </label>
              <input
                type='text'
                name='name'
                id='name'
                className='bg-gray border border-gray-300 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5'
                required
                placeholder='Enter username'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='password' className='block mb-1 text-sm font-medium text-black'>
                Password
              </label>
              <input
                type='password'
                name='password'
                id='password'
                className={`bg-gray-50 border border-gray text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 ${
                  passwordError ? 'border-red-500' : ''
                }`}
                required
                minLength={8}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (e.target.value.length >= 8){
                    setPasswordError('');
                  } else {
                    setPasswordError('Password must be at least 8 characters long.');
                  }
                }}
                placeholder='Enter password'
              />
              {passwordError && (
                <p className='text-red-500 text-xs mt-1'>{passwordError}</p>
              )}
            </div>
            <button
              type='submit'
              className='w-full text-white bg-[#EA9253] focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
              disabled={!isFormValid}
              onClick={handleGoBack}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
