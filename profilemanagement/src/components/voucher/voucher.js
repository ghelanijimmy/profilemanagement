import React from "react";
import Consumer from "../context/consumer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faSquareFull } from "@fortawesome/free-solid-svg-icons";
import styles from "../../css/_index.scss";
import voucherStyles from "./_voucher.scss";

const Voucher = props => {
  return (
    <div className={`${voucherStyles.voucher} ${voucherStyles.Wrapper}`}>
      <div className={voucherStyles.column}>
        <p className={voucherStyles.banner}>
          <span className={voucherStyles.bannerMessage}>
            Congratulations {props.data.user}! Here is your first voucher.
          </span>
          <FontAwesomeIcon
            className={voucherStyles.bannerIcon}
            icon={faSquareFull}
          />
        </p>
        <div className={voucherStyles.voucherImage}>
          <img src="http://placehold.it/500x200" alt="" />
          <div className={voucherStyles.voucherInfo}>
            <p className={voucherStyles.valueWrapper}>
              <span>Voucher Value</span>
              <span className={voucherStyles.value}>
                <sup>$</sup>50
              </span>
            </p>
            <p className={voucherStyles.codeWrapper}>
              <span>Voucher code</span>
              <span className={voucherStyles.code}>SWG234XSFU3</span>
              <span className={voucherStyles.expiry}>Use before JULY 2020</span>
            </p>
          </div>
        </div>
      </div>
      <div className={voucherStyles.column}>
        <p className={styles.Title}>How to redeem?</p>
        <div className={`${voucherStyles.redeem} ${voucherStyles.Wrapper}`}>
          <p>Once you book your trip...</p>
          <div className={`${voucherStyles.stepsWrapper}`}>
            <div className={voucherStyles.steps}>
              <div className={voucherStyles.stepsInfo}>
                <span className={voucherStyles.stepNumber}>1</span>
                <span>Call</span>
                <span>1-800-23-1234</span>
              </div>
              <div className={voucherStyles.stepsIconWrapper}>
                <img src={"http://placehold.it/20x35"} />
              </div>
            </div>
            <div className={voucherStyles.steps}>
              <div className={voucherStyles.stepsInfo}>
                <span className={voucherStyles.stepNumber}>2</span>
                <span>Provide</span>
                <span>Booking number</span>
              </div>
              <div className={voucherStyles.stepsIconWrapper}>
                <img src={"http://placehold.it/20x35"} />
              </div>
            </div>
            <div className={voucherStyles.steps}>
              <div className={voucherStyles.stepsInfo}>
                <span className={voucherStyles.stepNumber}>3</span>
                <span>User your</span>
                <span>Voucher code</span>
              </div>
            </div>
          </div>
        </div>
        <p>Find your perfect getaway with our innovative search tool.</p>
        <div className={voucherStyles.ctaWrapper}>
          <button className={`${styles.btn} ${styles.primaryInverse}`}>
	          <img src="" alt="" />
	          <b>Vacation Finder</b>
          </button>
          <p>
            <FontAwesomeIcon icon={faPlay} />
            Watch Demo
          </p>
        </div>
      </div>
    </div>
  );
};

export default Consumer(Voucher);
