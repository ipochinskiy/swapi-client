import React, { ReactElement } from 'react';

type PropTypes = {
  type?: 'button' | 'submit' | 'reset';
  label: string;
};

export const Button: React.FC<PropTypes> = ({ type = 'button', label }: PropTypes): ReactElement => {
  return <button type={type}>{label}</button>;
};
