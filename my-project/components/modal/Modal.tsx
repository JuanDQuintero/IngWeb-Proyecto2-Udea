import { Dialog } from '@mui/material'
import { DialogTitle,DialogContent } from '@mui/material'
import { Dispatch, SetStateAction } from 'react';

interface ModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  nodalTitle: string;
  children: JSX.Element;
}

const Modal = ({open,setOpen,nodalTitle,children}:ModalProps) => (
    <Dialog className='flex w-full justify-center' open={open} onClose={()=>setOpen(false)} >
      <DialogTitle>{nodalTitle}</DialogTitle>
      <DialogContent >{children}
      </DialogContent>
    </Dialog>
)

export default Modal