import styled from '@emotion/styled';

export const HeroWrapper = styled.div`
position: relative;
  height: 350px;
  width: 600px;
  background: #323A49;
  border-radius: 20px;
  padding: 50px 40px;
  text-align: center;

  p {
    margin: 25px 0;
    font-size: 36px;
    color: #CEE3E9;
  }
`;

export const AdviceNumber = styled.div`
  letter-spacing: 2px;
  color: rgba(82, 255, 168, 1);
`;

export const AdviceButton = styled.div`
  position: absolute;
  bottom: -33px;
  left: 45%;
  cursor: pointer;
  background: #49e597;
  padding: 20px;
  border-radius: 50%;
  transition-duration: 0.3s;
  transition-property: box-shadow;
  -webkit-transition-duration: 0.3s;
  -webkit-transition-property: box-shadow;

  &:hover {
    background: #52ffa8;
    box-shadow: 0 0 15px #52ffa8;
  }
`;
