import { UserAuth } from '../context/AuthContext';
import MenuItem from './MenuItem';
import StraightIcon from '@mui/icons-material/Straight';
import { isPropertySignature } from 'typescript';

const MenuItems = (props) => {
  const { userInfo } = UserAuth();

  if (userInfo.role === 'user') {
    return (
      <MenuItem
        expanded={props.expanded}
        icon={<StraightIcon fontSize="large" />}
        url={'/path'}
        title={'My path'}
      />
    );
  } else if (userInfo === 'creator') {
    return <div>creator</div>;
  } else if (userInfo === 'admin') {
    return <div>admin</div>;
  }
};

export default MenuItems;
