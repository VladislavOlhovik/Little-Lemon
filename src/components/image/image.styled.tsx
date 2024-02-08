import styled from 'styled-components';

export const ImgContainer = styled.div`
  overflow: hidden;
  display: inline-block;
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  & > img {
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease-in-out;
  }
  & > img:hover {
    transform: scale(1.1);
  }
`;
