import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Input } from "../input/input";
// import { Oauth } from "../oauth/oauth";
import styles from "../../css/_index.scss";
import Modal from "../modal/modal";
import Consumer from "../context/consumer";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(()=>{
  //   console.log(email, password)
  // }, [email, password])

  const handleLogin = e => {
    e.preventDefault();
    
    console.log('hi there sir');

    let loginCred = { email: email, password: password };
    let fullName = '';
    
    let checkUser;

    props.data.dbUsers.forEach(user => {
      console.table([user.email, loginCred.email, user.password, loginCred.password]);
      checkUser = user.email === loginCred.email &&
          user.password === loginCred.password;
      
      fullName = user.email === loginCred.email ? `${user.firstname} ${user.lastname}` : "";
    });
    console.log(checkUser);
    if (checkUser) {
      props.data.setLocalStorageUser(fullName || "");
      props.data.setModalState();
      props.data.setFirstTime(true);
    }
  };

  return (
    <React.Fragment>
      <form
        ref={props.passedref}
        onSubmit={handleLogin}
        className={styles.section}
      >
        <p className={styles.Title}>Sign In</p>
        {/*<Oauth />*/}
        <Input
          type={"email"}
          id={"email"}
          placeholder={"Email"}
          block={true}
          fullWidth={true}
          required={true}
          handleInput={setEmail}
          updatedValue={email || ""}
        />
        <Input
          type={"password"}
          id={"password"}
          placeholder={"Password"}
          block={true}
          fullWidth={true}
          showPasswordId={"showLogin"}
          showPasswordPlaceholder={"Show"}
          required={true}
          showPasswordButton={true}
          handleInput={setPassword}
          updatedValue={password || ""}
        />
        <Input
          type={"checkbox"}
          id={"rememberme"}
          placeholder={"Remember Me"}
          block={false}
          fullWidth={false}
          inline={true}
        />
        <a className={`${styles.flexHalf} ${styles.forgotPassword}`}>
          Forgot password?
        </a>
        <Input type={"submit"} id={"signin"} placeholder={"Sign In"} />
      </form>
      <Modal appType={props.data.appType} modal={props.data.currentModal} />
    </React.Fragment>
  );
};

export default Consumer(Login);

Login.propTypes = {
  data: PropTypes.object,
  passedref: PropTypes.object
};

/*
* https://sandbox.payvoyage.com/v2/checkout
* token=90D6E2641F97757E39D136F9D41712FA38D400E1430E463B5C319A33B270CB28&transactionId=8beb98bf-2349-44f5-b48f-7e0c1954bb80
* transactionTotal=50.00
* transactionTaxes=0.00
* taxesIncluded=true
* paymentCurrency=CAD
* language=e
* minimumDue=50.00
* maximumDue=50.00
* readonly=true
* preauth=false
* forceCompletion=true
* productCodes=GC
* departDate=2019-09-11
* returnDate=2019-09-11
* css=https://yyzwebdevecom.sunwing.ca/dev/widgets/gift-certificate/paymentform.css
* deviceAddress=::1
* brandId=1
* businessType=b2c
* method=QSTRING
* paymentIncludes=cc
* bookingNumber=$8beb98bf-2349-44f5-b48f-7e0c1954bb80
* nextPage=https://yyzwebdevecom.sunwing.ca/dev/widgets/gift-certificate/confirm?transaction=CfDJ8B0I0llUnYBCkHNZatXRLrhWQ_WoAhg5MXSUAgjzZxM3KHIkwrem7LOsgD-cN7LSng8lpoyDS6NaiHomp3WRHiHgZ86RLb0N-P5jFfhgNARySOoZyOYsZUtefCpTqpu3Akcaz-2MV7ur0KAcOwHZ8u08wp7RFFYFXIO6oHwkGasfs0U6G7-dT1jDNVQoL_AB9cFLZyzP_uL7JKQIFPkJ0foW1gjMJ3CSZAyxP7gjEtFIDwhXz3MNyUWpc8bC4-B7MalfnPwc-3eRKeh0vbt6GGhJrF1270spNVodb6jnz6xPOGFATK7tX6I3i5WsTX3ifFyUVyhiU-yOhgJK4PK3d2zFCx5o1LxwqtlSI5BUfX5cDJFDQLqB-BzvRd9nhaMot9AqGpzZbSBLUKIqRRhBXryUib5b403a6PHREMzriRHj6vJVjzzrb92US-dx55tF3ul2NbJg-A6UXdq7AKz6hggrkhCKJbF7QbrFDjwRo1AyoYDNLgS_tt9fgPkSVqG_6Vhi9nCtReJ3jKAQ9C08WqcIPC1F1Im33tSm7D0kOUNHAWR1yI0SjCYsx1Pc_m9EqDycoA1uGPCT3HJqLRYE-OUnknlJ8u8AsJYIA2VGBqI2o18d361Y6MCA8zxRwe02TgPsgKghDWkOVOFP1SNb-NPtZdfxIDJzt3dffD9mSg_XwXAmYopfGFmwNRb6ZO_Ktu_ZlqfOdp3_EzYVplbiZSNCvTkcAsQM9JOCQZ4f-7P2ws-aSTBEfeYLWKdOcBNSaXPrY7VnzHrnFuoCBcpMoMFYl2mbWiex_6yF6c2tNEFYfz-uQA1VKKRgJatfhnmpy6JwoXNbnF03XCoTHWelxUe8_IqhQbrdkZiOy2cgQ9qy
* */