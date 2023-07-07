import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import styles from './styles.module.scss';
import { ChangeEvent } from 'react';

interface Props {
  name: string;
  label: string;
  error?: string;
  classes?: string;
  onChange?: (name: string, event: string) => void;
  type: string;
  errors?: string[];
  value?: unknown;
}
const Input = ({ name, label, error, classes, onChange, type, value }: Props) => {
  const onInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    onChange?.(name, event.target.value);
  };

  return (
    <Grid className={`${styles.fieldSet}  ${classes} `}>
      {type === 'password' && (
        <TextField
          id={name}
          name={name}
          onChange={onInputHandler}
          type='password'
          label={label}
          value={value}
          inputProps={{
            maxLength: 50
          }}
        />
      )}
      {type !== 'password' && (
        <TextField
          id={name}
          name={name}
          value={value}
          onChange={onInputHandler}
          label={label}
          type='text'
          inputProps={{
            maxLength: 50
          }}
        />
      )}
      {error && <div className={styles.errorText}>{error}</div>}
    </Grid>
  );
};
export { Input };
