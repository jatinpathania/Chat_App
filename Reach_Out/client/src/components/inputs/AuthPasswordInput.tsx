import { FC, useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { IconType } from "react-icons/lib/esm/iconBase";

type Props = {
  label: string;
  placeholder: string;
  error: any;
  refs: any;
  Icon: IconType;
}

const AuthPasswordInput: FC<Props> = ({ label, placeholder, error, refs, Icon }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className={`auth-form-group ${error ? 'text-red-500' : 'text-gray-700'}`}>
      <label className='auth-form-label' htmlFor={label}>
        {label}
      </label>
      <div className={`flex items-center transition-all duration-100 ${error ? 'border-red-500' : 'border-gray-300'}`}>
        <Icon className='text-xl text-gray-600 ml-3' />
        <input
          type={isVisible ? 'text' : 'password'}
          className='auth-input'
          placeholder={placeholder}
          name={label}
          {...refs}
        />
        {
          isVisible
            ?
            <AiFillEye onClick={() => setIsVisible(prev => !prev)} className="text-xl text-gray-600 cursor-pointer mr-3 hover:text-black transition-colors" />
            :
            <AiFillEyeInvisible onClick={() => setIsVisible(prev => !prev)} className="text-xl text-gray-600 cursor-pointer mr-3 hover:text-black transition-colors" />
        }
      </div>
      {
        error &&
        <p className='text-red-500 mt-2 text-xs'>* {error}</p>
      }
    </div>
  )
}

export default AuthPasswordInput;
