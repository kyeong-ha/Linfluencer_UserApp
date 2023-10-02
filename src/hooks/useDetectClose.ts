import { useEffect, useState, useRef } from "react";

/** 유저가 Click한 Element가 드롭다운 내부 element인지 외부 element인지에 따라 열기 또는 닫기 이벤트를 수행한다 */
function useDetectClose(initialState: any): any{
  const [isOpen, setIsOpen] = useState(initialState);
  const ref = useRef(null);

  function removeHandler() {
    setIsOpen(!isOpen);
  }
  
  useEffect(() => {
    function onClick(e: MouseEvent){
      if (ref.current !== null && !ref.current.contains(e.target)) {
        setIsOpen(!isOpen);
      }
    }
    isOpen ? window.addEventListener("click", onClick) : null;
    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [isOpen]);

  return [isOpen, ref, removeHandler];
};

export default useDetectClose;