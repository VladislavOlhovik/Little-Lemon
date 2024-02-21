import styled from 'styled-components';

export const ConfirmedBookingContainer = styled.section`
  padding: 0 ${({ theme }) => theme.styles.blockSidePadding};
  text-align: center;
  .table {
    display: inline-block;
    color: ${({ theme }) => theme.styles.colors.light.text};
    background: ${({ theme }) => theme.styles.colors[theme.theme].primary};
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 10px;
    font-size: 1.2rem;
  }
  & > form {
    padding: 2rem 15vw;
  }
`;

export const PreloaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
