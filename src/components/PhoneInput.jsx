import { useCallback, useEffect, useRef, useState } from 'react';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

const PhoneInput = ({value, onChange, mobileRef}) => {
    const inputRef = useRef('')
    const handleKeyUp = useCallback(() => {
      if (inputRef.current) {
        // Replace non-numeric characters
        inputRef.current.value = inputRef.current.value.replace(/[^0-9]/g, '');
      }
    },[inputRef.current]);
  
    useEffect(() => {
      if (inputRef.current) {
        mobileRef.current = intlTelInput(inputRef.current, {
          initialCountry: 'in',  
          separateDialCode: true,
        });
      }
      return () => {
        if (mobileRef.current) {
          mobileRef.current.destroy();
        }
      };
    }, []);

    return (
        <input  ref={inputRef} type="tel" id="phone" name="mobile" className="input-text-field w-input" maxLength="10"  pattern="\d*"  placeholder="Phone" onKeyUp={handleKeyUp} required />
    );
  };
  
  export default PhoneInput;