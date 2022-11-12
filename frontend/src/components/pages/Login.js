import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Input from '@mui/material/Input';
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import { Box } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { signin } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signin(email, password);
      navigate('/');
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <h3>Login</h3>
        </CardContent>
        <CardContent>
          <Input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </CardContent>
        <CardContent>
          <Input
            type={'Password'}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </CardContent>
        <CardContent>
          <button onClick={handleSubmit}>Login</button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
