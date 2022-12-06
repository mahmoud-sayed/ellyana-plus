const style = (styleName, theme) => {
  const style = {
    'cardStyle': {
      maxWidth: 345,
      height: '500px',
      '&:hover .MuiCardContent-root': {

        height: '400px',
        backgroundColor: 'red'
      }
    }

  };
  return style[styleName];
};

export default style;