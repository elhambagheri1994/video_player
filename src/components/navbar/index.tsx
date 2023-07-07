import AppBar from '@mui/material/AppBar';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { routes } from '@/shared/constants/routes';
import { isAuth } from '@/shared/utils/is-auth';
import { logout } from '@/shared/services/login-service';
import styles from './styles.module.scss';

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Grid container direction='row' gap={3} justifyContent='space-between'>
            <Typography variant='h6' color='common.white'>
              <Link to={routes.DASHBOARD}>Dashboard</Link>
            </Typography>

            <div className={styles.navbar}>
              {!isAuth() && (
                <Typography variant='h6' color='common.white'>
                  <Link to={routes.LOGIN}>Login</Link>
                </Typography>
              )}
              {isAuth() && (
                <>
                  <Typography variant='h6' color='common.white'>
                    <Link to={routes.USER}>
                      <PersonIcon />
                    </Link>
                  </Typography>
                  <Typography onClick={logout} variant='h6' color='common.white'>
                    <Link to={routes.LOGIN}>
                      <LogoutIcon />
                    </Link>
                  </Typography>
                </>
              )}
            </div>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export { Navbar };
