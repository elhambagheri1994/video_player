import Alert from '@mui/material/Alert';

interface Props {
  type: 'error' | 'warning' | 'success' | 'info';
  text: string;
}

function CustomAlert({ type, text }: Props) {
  return <Alert severity={type}>{text}</Alert>;
}

export { CustomAlert };
