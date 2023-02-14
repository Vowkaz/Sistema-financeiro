import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import FormInput from "@/components/ui/FormInput";
import {useState} from "react";


const SubscribeBudget = () => {

  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      required: true,
    },
    {
      id: 3,
      name: "value",
      type: "text",
      placeholder: "Value",
      required: true,
    },
    {
      id: 4,
      name: "sector",
      type: "text",
      placeholder: "Sector",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "reasom",
      type: "text",
      placeholder: "Reason",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Dialog>
      <DialogTrigger >New Budget</DialogTrigger>
      <DialogContent className="border-2 border-black shadow-card dark:border-white dark:shadow-cardD">
        <DialogHeader>
          <DialogTitle>Setup your budget!</DialogTitle>
          <DialogDescription >
            <form className="flex flex-col text-xl" onSubmit={handleSubmit}>
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
              <Button variant="neoBrut">Submit</Button>
            </form>

          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>


  )
}

export default SubscribeBudget;
