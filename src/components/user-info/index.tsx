import { useNavigate } from 'react-router-dom';
import { DynamicForm } from '@/shared/components/dynamic-form';
import { routes } from '@/shared/constants/routes';
import { Navbar } from '../navbar';
import httpService from '@/shared/services/http-service';
import { getStorageData } from '@/shared/services/storage-service';
import { constantsData } from '@/shared/constants/constants';
import styles from './styles.module.scss';

const url = 'users';
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
    id: 'PhoneNumber',
    label: 'phoneNumber',
    type: 'text'
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
  }
];

function UserInfo() {
  const navigate = useNavigate();
  const userInfo = getStorageData(constantsData.user);
  async function handleSubmit<GLogin>(values: GLogin) {
    await httpService.patch(`${url}/${userInfo?.id}`, values);
    navigate(routes.LOGIN);
  }
  return (
    <>
      <Navbar />
      <div className={styles.User}>
        <h1>User Info</h1>
        <DynamicForm
          values={userInfo}
          fields={fields}
          buttonText='Edit User'
          submit={handleSubmit}
        />
      </div>
    </>
  );
}

export { UserInfo };
