import type { ChangeEventHandler, InputHTMLAttributes, KeyboardEventHandler } from "react"


interface InputBoxProps{
  value?: string
  inputRef: React.RefObject<HTMLInputElement | null>
  onKeyDown: KeyboardEventHandler<HTMLInputElement>
}

function InputBox({value, inputRef, onKeyDown}: InputBoxProps) {
  return (
    <input defaultValue={value} ref={inputRef} onKeyDown={onKeyDown} className="w-full text-base py-1 px-2.5 bg-transparent text-heading border border-heading rounded-sm outline-0" type="text" placeholder="Enter Your Todo"/>
  )
}


export default InputBox