import styled from 'styled-components';

export const NavbarStyle = styled.nav`
  font-size: 2rem;
  background-color: #f1f1f1;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    li {
      cursor: pointer;
      padding: 0.5rem;
      flex: auto;
      text-align: center;

      &:hover {
        background-color: #555;
        color: white;
      }
    }
  }

  @media screen and (min-width: 480px) {
    ul {
      flex-direction: row;

      li:first-child {
        text-align: left;
      }
    }
  }
`;
