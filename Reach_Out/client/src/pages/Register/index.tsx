import { useState } from 'react';
import { Link } from 'react-router-dom';

import FormSuccess from '../../components/loading/FormSuccess';
import RegisterForm from './components/RegisterForm';

const Register = () => {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(true);

  if (!isFormOpen) {
    return <FormSuccess message='Account created' redirectTo='login' />;
  }

  return (
    <div className='w-full h-[100vh] flex'>
      {/* Left Side - Branding */}
      <div className='hidden lg:flex lg:w-1/2 bg-gradient-to-br from-black via-gray-900 to-black flex-col items-center justify-center px-12'>
        <div className='text-center'>
          <h1 className='text-7xl font-black text-white mb-4 tracking-tighter'>
            Reach-Out
          </h1>
          <p className='text-2xl text-gray-400 font-light mb-12'>Start connecting</p>
          <div className='w-full h-1 bg-gradient-to-r from-white via-gray-400 to-black mb-12'></div>
          <p className='text-lg text-gray-300 max-w-md leading-relaxed'>
            Join thousands of users sharing conversations in real-time. 
            Create your account and begin your journey today.
          </p>
          <div className='flex gap-2 mt-8 justify-center'>
            <div className='w-2 h-2 bg-white rounded-full'></div>
            <div className='w-2 h-2 bg-gray-500 rounded-full'></div>
            <div className='w-2 h-2 bg-gray-500 rounded-full'></div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className='w-full lg:w-1/2 bg-white flex flex-col items-center justify-center px-6 sm:px-12 py-12'>
        <div className='w-full max-w-md'>
          <h2 className='text-4xl font-bold text-black mb-2'>Create Account</h2>
          <p className='text-gray-600 text-lg mb-8'>Join us today</p>

          <RegisterForm setIsFormOpen={setIsFormOpen} />

          <div className='mt-8 text-center'>
            <p className='text-gray-600'>Already have an account?{' '}
              <Link to='/login' className='font-bold text-black hover:text-gray-700 transition-colors'>
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
