import styled from 'styled-components';

export const TablesMapContainer = styled.div`
  & {
    margin: 0 auto;
    width: 627px;
    height: 660px;
    position: relative;
    overflow: auto;
    overflow-y: hidden;
    text-align: center;
  }
  .table-container {
    bottom: 0;
    left: 0;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0;
  }
  .table {
    cursor: pointer;
    color: ${({ theme }) => theme.styles.colors.light.text};
    text-decoration: none;
    position: absolute;
    background: #e0e0e0;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 10px;
    font-size: 1.2rem;
  }
  .table:hover {
    background: ${({ theme }) => theme.styles.colors[theme.theme].primary};
  }
  .id1 {
    left: 39px;
    top: 119px;
  }
  .id2 {
    left: 39px;
    top: 219px;
  }
  .id3 {
    left: 39px;
    top: 325px;
  }
  .id4 {
    left: 39px;
    top: 425px;
  }
  .id5 {
    left: 139px;
    top: 169px;
  }
  .id6 {
    left: 139px;
    top: 276px;
  }
  .id7 {
    left: 139px;
    top: 375px;
  }
  .id8 {
    left: 235px;
    top: 219px;
  }
  .id9 {
    left: 235px;
    top: 319px;
  }
  .id10 {
    left: 333px;
    top: 270px;
  }
  .id11 {
    left: 78px;
    bottom: 65px;
  }
  .id12 {
    right: 44px;
    top: 65px;
  }
  .id13 {
    right: 159px;
    top: 136px;
  }
  .id14 {
    right: 44px;
    top: 191px;
  }
  .id15 {
    right: 77px;
    bottom: 273px;
  }
  .id16 {
    right: 77px;
    bottom: 153px;
  }
  .id17 {
    right: 77px;
    bottom: 36px;
  }
  .id18 {
    left: 0;
    top: 36px;
  }
  .id19 {
    left: 27px;
    top: 40px;
  }
  .id20 {
    left: 52px;
    top: 45px;
  }
  .id21 {
    left: 76px;
    top: 52px;
  }
  .id22 {
    left: 99px;
    top: 62px;
  }
  .id23 {
    left: 126px;
    top: 67px;
  }
`;
