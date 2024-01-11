import { useForm } from "react-hook-form";
import { useState } from "react";
import "./App.css";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const onSubmit = () => {
    setRegistrationSuccess(true);
  };

  return (
    <form className="box" onSubmit={handleSubmit(onSubmit)}>
      {registrationSuccess && (
        <div className="success">
          <h3>Registration Successful!!!</h3>
        </div>
      )}
      <input
        {...register("firstName", { required: true, minLength: 4 })}
        placeholder="First Name"
      />
      {errors.firstName?.type === "required" && (
        <p role="alert" className="error-message">
          First name is required
        </p>
      )}
      {errors.firstName?.type === "minLength" && (
        <p role="alert" className="error-message">
          First name should contain min 4 characters
        </p>
      )}

      <input
        {...register("lastName", { required: true, minLength: 4 })}
        placeholder="Last Name"
      />
      {errors.lastName?.type === "required" && (
        <p role="alert" className="error-message">
          Last name is required
        </p>
      )}
      {errors.lastName?.type === "minLength" && (
        <p role="alert" className="error-message">
          Last name should contain min 4 characters
        </p>
      )}

      <input
        {...register("email", {
          required: true,
          minLength: 4,
          pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        })}
        placeholder="Email"
      />
      {errors.email?.type === "required" && (
        <p role="alert" className="error-message">
          Email is required
        </p>
      )}
      {errors.email?.type === "minLength" && (
        <p role="alert" className="error-message">
          Email must be at least 4 characters long
        </p>
      )}
      {errors.email?.type === "pattern" && (
        <p role="alert" className="error-message">
          Invalid email format
        </p>
      )}

      <input
        {...register("password", { required: true, minLength: 8 })}
        type="password"
        placeholder="Password"
      />
      {errors.password?.type === "required" && (
        <p role="alert" className="error-message">
          Password is required
        </p>
      )}
      {errors.password?.type === "minLength" && (
        <p role="alert" className="error-message">
          Password must be at least 8 characters long
        </p>
      )}

      <input type="submit" className="submit" />
    </form>
  );
}
