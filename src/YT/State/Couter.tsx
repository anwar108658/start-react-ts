import { useState } from "react"
import Button from "../../components/Button"




const Couter = () => {
  const [counter, setCounter] = useState(0)
  const onClickHandler = () => {
    setCounter(counter + 1)
  }
  return (
    <>
    <div className="bg-gray-900 flex items-center justify-center rounded-md">
      <Button label={'Counter : ' + counter} click={onClickHandler} />
    </div>
    </>
  )
}

export default Couter