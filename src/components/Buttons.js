import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1rem;
  font-weight: bold;
  background: transparent;
  color: ${props => (props.cart ? "var(--mainYellow)" : "var(--mainOrange)")};
  border: 0.06rem solid var(--mainOrange);
  border-color: ${props =>
    props.cart ? "var(--mainYellow)" : "var(--mainOrange)"};
  border-radius: 0.5rem;
  padding: 0, 2rem 0.3rem;
  cursor: pointer;
  transition: all 0.7s ease-in-out;
  &:hover {
    background: ${props =>
      props.cart ? "var(--mainYellow)" : "var(--mainOrange)"};
    color: var(--mainWhite);
  }
`;

export const NavWraper = styled.nav`
  background: var(--lightOrange);
  .main-title {
    font-size: 1.4rem;
  }
`;
