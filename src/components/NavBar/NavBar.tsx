import { AppBar, Button, IconButton, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ArrowBack, Home } from '@mui/icons-material';

const NavBar = () => {

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleHome = () => {
    navigate('/');
  };

  const handleCat = () => {
    navigate('/cat');
  };

  const handleMachine = () => {
    navigate('/machine');
  };

  return (
    <AppBar position={'fixed'}>
      <Toolbar>
        <IconButton color={'inherit'} onClick={handleBack}>
          <ArrowBack />
        </IconButton>
        <IconButton color={'inherit'} onClick={handleHome}>
          <Home />
        </IconButton>
        <Button color={'inherit'} onClick={handleCat}>Кот</Button>
        <Button color={'inherit'} onClick={handleMachine}>Машина</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;