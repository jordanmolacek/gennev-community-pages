import * as React from 'react';

interface Props {
  label: string;
  value: string;
  error: boolean;
  setValue: (newValue: string) => void;
  validate?: (testString: string) => boolean;
}

const Input = (props: Props): JSX.Element => {
  const { label, value, setValue, validate, error } = props;

  const onValueChange = (event) => {
    if (validate && validate(event.target.value)) {
      setValue(event.target.value);
    } else if (!validate) {
      setValue(event.target.value);
    }
  };

  return (
    <div className="form-group">
      <label style={{color: error ? 'red' : undefined}}>{label}</label>
      <input
        value={value}
        onChange={onValueChange}
        type="text"
        style={{borderColor: error ? 'red' : undefined}}
        className={'form-control'}
        placeholder={label}
        required
      />
    </div>
  );
};

export default Input;
