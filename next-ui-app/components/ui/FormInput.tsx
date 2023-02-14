import {useState} from "react";

export default function FormInput(props) {
  const [focused, setFocused] = useState(false)
  const {
    label,
    errorMessage,
    onChange,
    id,
    ...inputProps
  } = props

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="flex flex-col ">
      {/*<label className="text-slate-500 dark:text-slate-200">{props.placeholder}  </label>*/}
      <input className="my-2 rounded-lg border-2 border-black bg-transparent p-4 dark:border-slate-200"
             {...inputProps}
             onChange={onChange}
             onBlur={handleFocus}
             onFocus={() =>
               inputProps.name === "confirmPassword" && setFocused(true)
             }
      />
    </div>
  )
}
