import styles from "./Form.module.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { object, string } from "yup";

export function Form({
  btnText,
  InputPlaceholder,
  customClassInput,
  customClassButton,
  customClassError,
  customCLassForm,
}) {
  const schema = object({
    email: string().required("Required field").email("Please check your email"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function Validate(data) {
    const input = document.querySelector("input");

    input.value = "";
    console.log("Fomulário Enviado! (Form Sent)");
    console.log(`Email: ${data.email}`);
  }

  function removeNotificationBubble(e) {
    e.preventDefault();
  }

  return (
    <form className={`${styles.form} ${styles[customCLassForm]}`}>
      <input
        type="email"
        className={styles[customClassInput]}
        placeholder={InputPlaceholder}
        {...register("email")}
        onBlur={removeNotificationBubble}
      />

      <span className={`${styles.error} ${styles[customClassError]} `}>
        {errors?.email?.message}
      </span>

      <button
        type="submit"
        className={styles[customClassButton]}
        onClick={handleSubmit(Validate)}
      >
        {btnText}
      </button>
    </form>
  );
}
