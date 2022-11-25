import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import Button from '../ui/Button';
import EditableField from '../ui/EditableField';
import styles from './profile.module.scss';
const Profile = () => {
  const { user, userInfo } = UserAuth();
  const [name, setName] = useState(userInfo.firstName);
  const [lastName, setLastName] = useState(userInfo.lastName);
  const [role, setRole] = useState();
  const [email, setEmail] = useState(user.email);

  console.log(name, lastName, email);

  return (
    <>
      <EditableField
        fieldName="first name"
        value={name}
        setValue={setName}
      ></EditableField>
      <EditableField
        fieldName="last name"
        value={lastName}
        setValue={setLastName}
      ></EditableField>
      <EditableField
        fieldName="email"
        value={email}
        setValue={setEmail}
      ></EditableField>
      <Button text={'Submit'} />
    </>
  );
};

export default Profile;
