import { Dialog, DialogActions, DialogContent, DialogTitle, Modal } from '@mui/material';
import { ReactElement } from 'react';

interface Props {
  children: ReactElement;
  handleClose: () => void;
  open?: boolean;
  title: string;
}

function CustomModal({ open = false, handleClose, title, children }: Props) {
  return (
    <Dialog maxWidth='md' fullWidth={true} open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}

export default CustomModal;
