import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2c2c2c;
  border-radius: 5px;
  box-shadow: 0 1px 3px #1e1e1e;
  padding: 5px 5px;
  width: 30%;
  
  @media (max-width: 750px) {
    width: 20%;
    
    p {
      font-size: 12px;
    }
    
    span {
      font-size: 20px;
    }
    
    svg {
      display: none;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 10px;
  margin: 20px 0;
  
  svg {
     width: 25px;
    height: 25px;
    fill: #f2f2f2;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 20px;
  
`;

export const Total = styled.span`
  font-size: 30px;
  font-weight: bold;
  line-height: 2.75rem;
`;