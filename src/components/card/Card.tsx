import './card.scss';
import { FC } from 'react';

type Props = {
  backgroundColor: string;
  isBorder: boolean;
  children: React.ReactNode;
};

export const Card: FC<Props> = ({ backgroundColor, isBorder, children }) => {
  const border = isBorder ? 'solid 2px rgb(170, 170, 170)' : '';

  const cardStyle = {
    backgroundColor,
    border,
  };

  return (
    <div className='card' style={cardStyle}>
      {children}
    </div>
  );
};
