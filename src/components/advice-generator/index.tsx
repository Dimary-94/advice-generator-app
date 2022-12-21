import { FC, useState } from "react";
import * as S from "./styled";
import divider from "../../images/pattern-divider-desktop.svg";
import dice from "../../images/icon-dice.svg";

export const AdviceGenerator: FC = () => {
  const [advice, setAdvice] = useState('if you want advice click on the green button');
  const [number, setNumber] = useState(0);

  // const advice = 'https://api.adviceslip.com/advice';

  async function fetchAdvice() {
    const url = 'https://api.adviceslip.com/advice';
    const response = await fetch(url);
    const { slip } = await response.json();

    return slip;
  }

  const handleClick = () => {
    fetchAdvice()
      .then((slip) => {
        setAdvice(slip.advice);
        setNumber(slip.id);
      })
      .catch(err => new Error(err))
  }

  return (
    <S.HeroWrapper>
      <S.AdviceNumber>{`Advice #${number}`}</S.AdviceNumber>
      <p>&#8220;{advice}&#8221;</p>
      <img src={divider} className="divider" alt="divider" />
      <S.AdviceButton onClick={handleClick} >
        <img src={dice} className="dice" alt="dice" />
      </S.AdviceButton>
    </S.HeroWrapper >
  );
};
