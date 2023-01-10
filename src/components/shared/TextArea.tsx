import * as React from 'react';

interface Props {
  label: string;
  rows?: number;
  value: string;
  error: boolean
  setValue: (newValue: string) => void;
}

const TextArea = (props: Props): JSX.Element => {
  const { rows, value, label, setValue, error } = props;

  const onValueChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="form-group">
      <label style={{color: error ? 'red' : undefined}}>{label}</label>
      <textarea
        value={value}
        onChange={onValueChange}
        className="form-control"
        style={{borderColor: error ? 'red' : undefined}}
        rows={rows ? rows : 10}
        placeholder={label}
      />
    </div>
  );
};

export default TextArea;
