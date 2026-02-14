import { FC } from 'react';
import { IconType } from 'react-icons';
import { AiOutlineInfoCircle } from 'react-icons/ai';

type Props = {
  label: string;
  placeholder: string;
  error: any;
  informations: string[];
  refs: any;
  Icon: IconType;
}

const AuthTextInput: FC<Props> = ({ label, placeholder, error, informations, refs, Icon }) => {
  return (
    <div className={`auth-form-group ${error ? 'text-red-500' : 'text-gray-700'}`}>
      <label className='auth-form-label' htmlFor={label.toLowerCase()}>
        {label}
      </label>
      <div className={`flex items-center transition-all duration-100 ${error ? 'border-red-500' : 'border-gray-300'}`}>
        <Icon className='text-xl text-gray-600 ml-3' />
        <input
          className='auth-input'
          placeholder={placeholder}
          name={label.toLowerCase()}
          type='text'
          {...refs}
        />
        {
          (error && informations) 
          &&
          <div className='group relative'>
            <AiOutlineInfoCircle className='text-xl text-gray-600 mr-3' />
            <div className='absolute hidden group-hover:block bg-gray-200 p-2 shadow-xl z-10'>
              {
                informations.map((info: string, index: number) => {
                  return <p key={index} className='text-gray-700 text-xs'>* {info}</p>
                })
              }
            </div>
          </div>
        }
      </div>
      {
        error &&
        <p className='text-red-500 mt-2 text-xs'>* {error}</p>
      }
    </div>
  )
}

export default AuthTextInput;
