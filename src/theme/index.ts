import { createGlobalStyle } from 'styled-components';

export const styles = {
  colors: {
    light: {
      primary: '#F4CE14', // Yellow
      secondary: '#495E57', // Dark Slate Gray
      highlighted: '#EE9972', // Orange
      mealsBackground: '#EDEFEE', // Grey
      background: '#FFFFFF', // White
      text: '#000000', // Black
    },
    dark: {
      primary: '#F4CE14', // Yellow
      secondary: '#495E57', // Dark Slate Gray
      highlighted: '#EE9972', // Orange
      mealsBackground: '#EDEFEE', // Grey
      background: '#0c3122', // Black
      text: '#FFFFFF', // White,
    },
  },
  typography: {
    fontFamily: 'Karla, sans-serif',
    fontSizeRegular: '40pt', // Sub title
    fontSizeSection: '20pt', // Section Title
    fontSizeDisplay: '64pt', // Display Title
    fontSizeMedium: '18pt', // Lead text/CTA
    fontSizeSmall: '16pt', // Card Title and Paragraph
    fontSizeLink: '14pt', // Links
    fontWeightBold: 'bold', // Bold font weight
    fontWeightMedium: 'normal', // Bold font weight
    lineHeight: '1.5', // Line height for paragraph
  },
  borderRadius: '16px', // Rounded corners for elements
  blockSidePadding: '18vw', // Margin sides for blocks
};

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.styles.typography.fontFamily};
    margin: 0;
    color: ${({ theme }) => theme.styles.colors[theme.theme].text};
    background: ${({ theme }) => theme.styles.colors[theme.theme].background};
  }
`;
