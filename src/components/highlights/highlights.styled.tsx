import styled from 'styled-components';

export const HighlightsContainer = styled.section`
  margin-top: 8rem;
  padding: 0 ${({ theme }) => theme.styles.blockSidePadding};
  & > .highlights-title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;
  }
  & > .highlights-title > h2 {
    margin: 0;
    font-weight: ${({ theme }) => theme.styles.typography.fontSizeMedium};
    font-size: ${({ theme }) => theme.styles.typography.fontSizeRegular};
  }
  & > .meals-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
