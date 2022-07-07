import { useRef, useState} from "react";

const SignUp = () => {
  const [validation, setValidation] = useState("");
  const inputs = useRef([]);

  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  const CreateUser = (name, email, password) => {
    fetch("http://localhost:3003/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password
      }) 
    })


  }

  const handleForm = (e) => {
    e.preventDefault();
    const name = inputs.current[0].value;
    const email = inputs.current[1].value;
    const password = inputs.current[2].value;
    const confirmPassword = inputs.current[3].value;
    if (name.length < 3) {
      setValidation("Name must be at least 3 characters long");
      return;
    } else if (!email) {
      setValidation("Email is required");
      return;
    } else if (
      (password.length || confirmPassword.length) < 6
    ) {
      setValidation("Password must be at least 6 characters");
      return;
    }  else if(password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/) === null) {
      setValidation("Password must contain at least one lowercase letter, one uppercase letter, one number and one special character");
      return
    } else if (password !== confirmPassword) {
      setValidation("passwords must match");
      return;
    }else {
      CreateUser(name, email, password);

      setValidation("");
      inputs.current.forEach((el) => {
        el.value = "";
      });
      
    }
  };

  return (
    <form onSubmit={handleForm}>
      <label htmlFor="name">Name</label>
      <input ref={addInputs} type="text" id="name" />
      <label htmlFor="email">Email</label>
      <input ref={addInputs} type="email" id="email" />
      <label htmlFor="password">Password</label>
      <input ref={addInputs} type="password" id="password" />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input ref={addInputs} type="password" id="confirmPassword" />
      <div className="error">{validation}</div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
