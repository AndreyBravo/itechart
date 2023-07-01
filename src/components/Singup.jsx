import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Singup() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
    },
  });

  const [typeInput, setTypeInput] = useState("password");
  const [checked, setChecked] = useState(false);

  function changeCheckbox() {
    if (checked) {
      setChecked(!checked);
      setTypeInput("password");
    } else {
      setChecked(!checked);
      setTypeInput("text");
    }
  }

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div className="auth">
      <div className="wrap_auth">
        <form className="form_auth" onSubmit={handleSubmit(onSubmit)}>
          <span className="auth_title">Sing Up</span>
          <input
            type="email"
            className="auth_username"
            placeholder="email"
            {...register("email", {
              required: true,
              pattern: {
                value:
                  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                message: "некорректный email",
              },
              minLength: {
                value: 2,
                message: "мин 2 символа",
              },
            })}
          />
          <div className="error">
            {errors?.email ? <p>{errors.email.message}</p> : null}
          </div>
          <input
            type={typeInput}
            className="auth_password"
            placeholder="Password"
            {...register("password", {
              required: true,
              pattern: {
                value: /(?=.*[!@#$%^&_*])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&_*]{10,}/,
                message:
                  "Введите хотя бы одну заглавную букву и один спец символ",
              },
            })}
          />
          <div className="error">
            {errors?.password ? <p>{errors.password.message}</p> : null}
          </div>
          <label className="checkboxPassword">
            <input
              type="checkbox"
              checked={checked}
              onChange={changeCheckbox}
            />
            Показать пароли
          </label>

          <input
            type={typeInput}
            className="auth_password"
            placeholder="Confirm password"
            {...register("confirmPassword", {
              required: true,
              pattern: {
                value: /(?=.*[!@#$%^&_*])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&_*]{10,}/,
                message:
                  "Введите хотя бы одну заглавную букву и один спец символ",
              },
              validate: (value, formValues) => value === formValues.password,
            })}
          />
          <div className="error">
            {errors?.confirmPassword && (
              <p>{errors.confirmPassword.message || "Пароли не совпадают"}</p>
            )}
          </div>
          <input
            type="text"
            className="auth_username"
            placeholder="Username"
            {...register("username", {
              required: false,
            })}
          />
          <input type="submit" value="Sing Up" disabled={!isValid} />
        </form>
        <div className="link_for_auth">
          <span>or</span>
          <Link to="/">Log in</Link>
        </div>
      </div>
    </div>
  );
}
