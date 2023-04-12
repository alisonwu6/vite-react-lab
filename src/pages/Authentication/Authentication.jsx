import React from 'react';
import Grid from '@mui/material/Grid';
import CommonButton from '../../components/common/CommonButton/CommonButton';

const Authentication = () => {
  const buttonStyles = {
    // fontSize: '0.875rem',
    fontWeight: 600,
    textTransform: 'capitalize',
    borderRadius: 2.5,
    '&.MuiButton-contained': {
      color: '#fff',
      backgroundColor: '#009be5',
      '&:hover': {
        backgroundColor: '#006db3',
      },
    },
    '&.MuiButton-outlined': {
      color: '#3C486B',
      borderColor: '#3C486B',
      '&:hover': {
        color: '#fff',
        backgroundColor: '#3C486B',
      },
    },
  };

  return (
    <Grid
      item
      xs={8}
    >
      This is authentication page.
      <CommonButton
        color='secondary'
        sx={buttonStyles}
        variant='contained'
      >
        Add user
      </CommonButton>
      <CommonButton
        sx={buttonStyles}
        variant='outlined'
      >
        Add user
      </CommonButton>
    </Grid>
  );
};

export default Authentication;
