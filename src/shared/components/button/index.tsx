import Button from '@material-ui/core/Button';
import type { MouseEventHandler } from 'react';

interface Props {
  label?: string;
  color?: 'primary' | 'inherit' | 'secondary' | 'default' | undefined;
  classes?: string;
  onClick?: MouseEventHandler;
}

const CustomButton = ({ label, color = 'primary', classes, onClick }: Props) => {
  return (
    <Button
      onClick={onClick}
      classes={{ root: classes }}
      type='submit'
      color={color}
      variant='contained'
    >
      {label}
    </Button>
  );
};
export { CustomButton };
