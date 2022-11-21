const style = (styleName, theme) => {
  const style = {
    'sectionsCaption': {
      fontSize: theme.typography.FontSizeSectionsTitle,
      color: theme.palette.text.secondary
    },
    'sectionsSecondCaption': {
      color: theme.palette.text.secondary
    }
  };
  return style[styleName];
};
export default style;