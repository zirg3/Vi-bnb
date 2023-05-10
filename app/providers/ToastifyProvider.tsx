'use client';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToasterProvider = () => {
  return ( 
    <ToastContainer position="bottom-center" limit={2}/>
  );
}

export default ToasterProvider;