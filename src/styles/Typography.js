import Typography from 'typography';
import lincolnTheme from 'typography-theme-lincoln';

// const TypographyBase = new Typography(lincolnTheme);
const TypographyBase = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Georgia', 'serif'],
});

export default TypographyBase;
