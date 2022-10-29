const style = (styleName, theme) => {
  const style = {
    'toolbarStyle': {
      backgroundColor: '#282828',
      height: '3rem',
    },
    'listItem': {
      height: '100%',
      '&:hover': {
        backgroundColor: '#444444',
        '&:before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          bottom: -10,
          right: '50%',
          width: 10,
          height: 10,
          bgcolor: '#444444',
          transform: 'translateY(-50%) rotate(45deg)',
          zIndex: 0,
        },
      },

    },
    'listItemSearch': {
      height: '100%',
      borderRight: '1px solid #999',
      borderLeft: '1px solid #999',
      borderRadius: '5px',
      width: { sx: '100%', md: '25ch' },
      padding: '0',
      '&:hover': {
        backgroundColor: '#444444'
      }
    },
    'outlinedInput': {
      height: '100%',
      color: '#fff',
      padding: '0 5px',
      width: { sx: '100%', md: 'initial' }
    }

  };
  return style[styleName];
};
export default style;