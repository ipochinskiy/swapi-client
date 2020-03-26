import React, { ReactElement, PropsWithChildren } from 'react';

type PropTypes = PropsWithChildren<{
  type?: 'button' | 'submit' | 'reset';
}>;

export const Button: React.FC<PropTypes> = ({ type = 'button', children }: PropTypes): ReactElement => {
  return <button type={type}>{children}</button>;
};
