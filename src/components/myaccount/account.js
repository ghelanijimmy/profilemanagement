import React from "react";
import Consumer from "../context/consumer";
import { Input } from "../input/input";
import styles from "../../css/_index.scss";
import accountStyles from "./_myaccount.scss";

const Account = props => {
  return (
    <React.Fragment>
      {props.header}
      <form>
        <div className={accountStyles.formSplitHalf}>
          <div className={accountStyles.flexWrapper}>
            <Input
              required={true}
              type={"text"}
              id={"fname"}
              placeholder={"First Name"}
            />
            <Input
              required={true}
              type={"text"}
              id={"lname"}
              placeholder={"Last Name"}
            />
            <Input
              required={true}
              type={"tel"}
              id={"mobile"}
              placeholder={"Mobile #"}
            />
            <Input
              required={true}
              type={"email"}
              id={"email"}
              placeholder={"Email"}
              fullWidth={true}
            />
          </div>
        </div>
        <div className={accountStyles.formSplitHalf}>
          <div className={accountStyles.flexWrapper}>
            <p className={`${styles.Title} ${styles.SmallBlue}`}>
              Password Info
            </p>
            <Input
              required={true}
              type={"password"}
              id={"currentPassword"}
              placeholder={"Current Password"}
              showPasswordButton={false}
            />
            <Input
              type={"hidden"}
              placeholder={" "}
              showPasswordButton={false}
            />
            <Input
              required={true}
              type={"password"}
              id={"newPassword"}
              placeholder={"New Password"}
              showPasswordButton={false}
            />
            <Input
              required={true}
              type={"password"}
              id={"confirmNewPassword"}
              placeholder={"Confirm New Password"}
              showPasswordButton={false}
            />
            <p className={`${styles.Title} ${styles.SmallBlue}`}>
              Language preference
            </p>
	          <Input
	            required={true}
	            type={"radio"}
	            id={"language"}
	            numOptions={2}
	            options={["English", "French"]}
	          />
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Consumer(Account);
