import React, { useState } from 'react'

function useDisclosure() {
    const [Show, setShow] = useState<boolean>(false);

    function showMenu(): any {
      if (!Show) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
    return {Show,showMenu}
}

export default useDisclosure