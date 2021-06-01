import Typography from 'typography';

// const TypographyBase = new Typography(lincolnTheme);
const TypographyBase = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Libre Baskerville', 'serif'],
  bodyFontFamily: ['Open Sans', 'san-serif'],
  googleFonts: [
    {
      name: 'Libre Baskerville',
      styles: ['400,700'],
    },
    {
      name: 'Open Sans',
      styles: ['200, 400, 600, 700'],
    },
  ],
});

export default TypographyBase;
