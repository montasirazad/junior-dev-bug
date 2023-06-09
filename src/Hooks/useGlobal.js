import axios from "axios";
import { useState } from "react";
import countryCode from "../Features/Checkout/Data/countryCode.json";



const useGlobal = () => {
  const [open, setOpen] = useState(false);
  const [mbCode, setMbCode] = useState(countryCode[15]);
  const [totalPrice, setTotalPrice] = useState(0);
  // const [data, setData] = useState('');

  const toggleModal = () => {
    // console.log('hello');
    setOpen(!open)
  };

  const getPayment = (body) => {
    console.log(body);
    axios.post(`${process.env.REACT_APP_SERVER_URL}/api/bkash`, { ...body, totalPrice }, {
      headers: {
        'content-Type': 'application/json'
      }
    });


    // setOpen(open)
  }
  return {
    toggleModal,
    open,
    setOpen,
    setMbCode,
    mbCode,
    getPayment,
    totalPrice,
    setTotalPrice,
  };
};
export default useGlobal;
