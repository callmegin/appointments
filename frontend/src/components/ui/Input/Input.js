import React from 'react';

import * as s from './styles';

const Input = ({
  width,
  noMargin,
  center,
  placeholder,
  type,
  required,
  autocomplete,
  value,
  changed,
  error,
}) => {
  return (
    <s.Container width={width} noMargin={noMargin}>
      <s.Input
        center={center}
        placeholder={placeholder}
        type={type}
        required={required}
        autoComplete={autocomplete}
        value={value}
        onChange={changed}
      />
      <s.Border></s.Border>
      {error && <s.ErrorText>{error}</s.ErrorText>}
    </s.Container>
  );
};

export default Input;
