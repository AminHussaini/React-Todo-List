
import { useState } from 'react'
import selectBox from '../selectbox.scss';


const SelectBox = () => {
  const [toggle, setToggle] = useState(false);
  const showList = () => {
    setToggle(!toggle);
  }
  return (
    <>
      Test
    </>
  )
}
export default SelectBox