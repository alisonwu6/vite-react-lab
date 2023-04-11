export const navbarStyles = {
  drawer: {
    width: 180,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: 180,
      boxSizing: 'border-box',
      backgroundColor: '#f3ce88',
      color: '#063970',
    },
    '& .Mui-selected': {
      color: 'red',
    },
  },
  icons: {
    minWidth: '40px',
    color: '#063970!important',
    '& svg': {
      fontSize: '20px',
    },
  },
  text: {
    '& span': {
      marginLeft: '-10px',
      fontWeight: '600',
      fontSize: '14px',
    },
  },
};
