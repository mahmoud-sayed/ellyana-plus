const style = (styleName, theme) => {

  const style = {
    'ListBackGround': {
      backgroundColor: theme.darkBackGround.main,
      paddingTop: '0',
      width: '100%'

    }, 'ListItemButton': {
      padding: '0',
      backgroundColor: theme.darkBackGround.main,
      paddingLeft: '5px',
      '&:hover': {
        backgroundColor: theme.darkBackGround.light
      }
    }, 'divider': {
      backgroundColor: '#3a3a3a',
      height: '1px'
    }
  };
  return style[styleName];
};
export default style;