import { createGlobalStyle } from 'styled-components';

export const styles = {
  colors: {
    light: {
      primary: '#F4CE14', // Yellow
      secondary: '#495E57', // Dark Slate Gray
      highlighted: '#EE9972', // Orange
      background: '#FFFFFF', // White
      text: '#000000', // Black
    },
    dark: {
      primary: '#F4CE14', // Yellow
      secondary: '#495E57', // Dark Slate Gray
      highlighted: '#EE9972', // Orange
      background: '#000000', // Black
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
    fontWeightBold: 'bold', // Bold font weight
    fontWeightMedium: 'medium', // Bold font weight
    lineHeight: '1.5', // Line height for paragraph
  },
  borderRadius: '16px', // Rounded corners for elements
  blockPadding: '0 15rem', // Margin for blocks
};

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.styles.typography.fontFamily};
    margin: 0;
    color: ${({ theme }) => theme.styles.colors[theme.theme].text};
    background: ${({ theme }) => theme.styles.colors[theme.theme].background};
  }
`;
