import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0 10px;
  min-width: 50px;
  height: 50px;
  background-color: #fff;
  color: #ffac27;
  font-weight: bold;
  border-radius: 4px;
  border: 2px solid #ffac27;
  cursor: pointer;
  transition: 0.2s opacity;

  &:hover {
    opacity: 0.8;
  }
`;

export default function MainContent06Button() {
  return <StyledButton>Hi</StyledButton>;
}
