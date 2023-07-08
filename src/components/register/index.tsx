import { useNavigate } from 'react-router-dom';
import { DynamicForm } from '@/shared/components/dynamic-form';
import { routes } from '@/shared/constants/routes';
import httpService from '@/shared/services/http-service';
import styles from './styles.module.scss';
import { useState } from 'react';
import { CustomAlert } from '@/shared/components/alert';

const url = 'register';
const fields = [
  {
    id: 'email',
    label: 'Email',
    type: 'text'
  },
  {
    id: 'username',
    label: 'Username',
    type: 'text'
  },
  {
    id: 'password',
    label: 'Password',
    type: 'password',
    validations: [
      {
        type: 'required',
        params: ['Password is Required']
      }
    ]
  },
  {
    id: 'name',
    label: 'Name',
    type: 'text',
    validations: [
      {
        type: 'required',
        params: ['Name is Required']
      }
    ]
  },
  {
    id: 'PhoneNumber',
    label: 'phoneNumber',
    type: 'text'
  }
];

function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  async function handleSubmit<GUser>(values: GUser) {
    try {
      await httpService.post(`${url}/`, values);
      navigate(routes.LOGIN);
    } catch (error: unknown) {
      setError(error as string);
    }
  }
  return (
    <div className={styles.Register}>
      <h1>Register</h1>
      {error && <CustomAlert type='error' text={error} />}
      <DynamicForm fields={fields} buttonText='Register' submit={handleSubmit} />
    </div>
  );
}

export { Register };
