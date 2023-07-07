import { useNavigate } from 'react-router-dom';
import { DynamicForm } from '@/shared/components/dynamic-form';
import { login } from '@/shared/services/login-service';
import styles from './styles.module.scss';
import { routes } from '@/shared/constants/routes';
import { useState } from 'react';
import { CustomAlert } from '@/shared/components/alert';

const fields = [
  {
    id: 'email',
    label: 'Username',
    type: 'text',
    validations: [
      {
        type: 'required',
        params: ['Email is Required']
      }
    ]
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
  }
];

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  async function handleSubmit<GLogin>(values: GLogin) {
    try {
      await login<GLogin>(values);
      navigate(routes.DASHBOARD);
    } catch (err: any) {
      setError('invalid username or password');
    }
  }
  return (
    <div className={styles.loginContainer}>
      <h1>Login</h1>
      {error && <CustomAlert type='error' text={error} />}
      <div className={styles.formContainer}>
        <DynamicForm fields={fields} buttonText='Login' submit={handleSubmit} />
      </div>
    </div>
  );
}

export { Login };
