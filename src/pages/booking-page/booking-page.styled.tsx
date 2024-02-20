import styled from 'styled-components';

export const BookingPageContainer = styled.section`
  padding: 0 ${({ theme }) => theme.styles.blockSidePadding};
  & > h2 {
    text-align: center;
    font-weight: ${({ theme }) => theme.styles.typography.fontSizeMedium};
    font-size: ${({ theme }) => theme.styles.typography.fontSizeSection};
  }
  .details-container {
    min-height: 6rem;
  }
  .details-container > h3 {
    text-align: center;
    font-weight: ${({ theme }) => theme.styles.typography.fontSizeMedium};
    font-size: ${({ theme }) => theme.styles.typography.fontSizeSection};
  }
  .inputBlock {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
`;
