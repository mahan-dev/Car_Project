import React from "react";
import styles from "@/modules/styles/signin/route.module.css";
import Form from "@/modules/Form";

const SigninPage = () => {
  return (
    <div className={styles.container}>
      <Form title="Signin" />
    </div>
  );
};

export default SigninPage;
