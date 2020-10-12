import React from 'react';
import * as S from './styled';

type CustomButton = {
  onClick: (e: any) => void;
};

export const Button: React.FunctionComponent<CustomButton> = ({
  children,
  onClick,
}): JSX.Element => {
  return <S.Button onClick={onClick}>{children}</S.Button>;
};
