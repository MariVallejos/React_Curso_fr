import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';

import { AuthLayout } from '../layout/AuthLayout.jsx';

import { useForm } from '../../hooks/useForm.js';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';

const formData = {//la construccion del useForm va por fuera, ya que sino cada ves q se crea se dispara la primera vez y ese espacio en memoria dispara el efecto varias vaces porque mando el mismo objeto. asi q saco el objeto por fuera
  email: '',
  password: ''
}

export const LoginPage = () => {

  const { status, errorMessage } = useSelector(state => state.auth); //obtengo lo que me interesa del store

  const dispatch = useDispatch()

  const { email, password, onInputChange } = useForm(formData);

  const isAuthenticating = useMemo(() => status === 'checking', [status]); //*1 

  const onSubmit = (event) => {
    event.preventDefault();

    // console.log({ email, password })
    dispatch(startLoginWithEmailPassword({ email, password }));
  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn');
    dispatch(startGoogleSignIn());
  }



  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder='correo@google.com'
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder='Contraseña'
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid
            container
            display={!!errorMessage ? '' : 'none'}
            sx={{ mt: 1 }}>
            <Grid
              item
              xs={12}
            >
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                type='submit'
                variant='contained'
                fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                variant='contained'
                fullWidth
                onClick={onGoogleSignIn}>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>


          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>

        </Grid>


      </form>

    </AuthLayout>
  )
}


//NOTA

// *1
/* Voy a memorizar el resultado del status, si es status es igual a "checking", va a devolver un booleano y
 la dependencias es el status. Asi lo memorizo!!!

Si el status cambia se va a volver a obtener el nuevo valor , 
y si el status nunca cambia no se va a volver a calcular el  isAuthenticating */