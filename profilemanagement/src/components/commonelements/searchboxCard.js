import PropTypes           from "prop-types";
import React               from "react";
import searchStyles        from "../commonelements/_elements.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInfo, faTimes}   from "@fortawesome/free-solid-svg-icons";
import styles              from "../../css/_index.scss";

const SearchboxCard = props => {
  if (!props.hasBgImg) {
    if (props.booking !== true)
      return (
        <React.Fragment>
          <div key={props.indexKey} className={searchStyles.searchBox}>
            <div className={searchStyles.content}>
              <p className={searchStyles.iconHeading}>
                <FontAwesomeIcon icon={props.headingIcon} />
                {props.headingText}
              </p>
              <p className={searchStyles.title}>{props.titleText}</p>
              <p className={searchStyles.legText}>{props.legText}</p>
              <span className={searchStyles.closeWrapper}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </div>
          </div>
        </React.Fragment>
      );
    else
      return (
        <React.Fragment>
          <div
            key={props.indexKey}
            className={`${searchStyles.searchBox} ${searchStyles.bookingCard}`}
          >
            <p className={searchStyles.iconHeading}>
              <FontAwesomeIcon
                className={
                  props.headingText === "Flight" ? searchStyles.iconRotate : ""
                }
                icon={props.headingIcon}
              />
              {props.headingText}
            </p>
            <div className={searchStyles.textWrapper}>
              <p className={`${searchStyles.textBlock}`}>
                <span>My next {props.headingText.toLowerCase()} in</span>
                <span className={`${searchStyles.title} ${searchStyles.Blue}`}>
                  {props.titleText}
                </span>
              </p>
              <p className={searchStyles.textBlock}>
                <span>Travel date</span>
                <span className={`${searchStyles.title} ${searchStyles.Blue}`}>
                  {props.date}
                </span>
              </p>
              <p className={searchStyles.textBlock}>
                <span>Booking number</span>
                <span className={`${searchStyles.title} ${searchStyles.Blue}`}>
                  {props.bookingNumber}
                </span>
              </p>
              <p
                className={`${searchStyles.textBlock} ${searchStyles.buttonBlock}`}
              >
                <button
                  className={`${styles.btn} ${styles.primary}`}
                  value={"Manage my booking"}
                >
                  Manage my booking
                </button>
              </p>
            </div>
          </div>
        </React.Fragment>
      );
  } else if (!props.flex)
    return (
      <React.Fragment>
        <div
          key={props.indexKey}
          className={`${searchStyles.searchBox} ${searchStyles.WithImage}`}
        >
          <div className={searchStyles.bgImage} />
          <div className={searchStyles.content}>
            <p className={searchStyles.iconHeading}>
              {props.headingText || ""}
            </p>
            <p className={searchStyles.titleWithRating}>
              <span className={searchStyles.title}>
                {props.titleText || ""}
              </span>
              <span className={searchStyles.ratingWrapper}>
                {props.ratings || ""}
              </span>
            </p>
            <p>{props.destination || ""}</p>
            <p>{props.reviewsText || ""}</p>
            <p>{props.legText || ""}</p>
            <p>{props.travellers || ""}</p>
          </div>
          <span className={searchStyles.closeWrapper}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>
      </React.Fragment>
    );
  else
    return (
      <React.Fragment>
        <div
          key={props.indexKey}
          className={`${searchStyles.searchBox} ${searchStyles.WithImage}`}
        >
          <div className={searchStyles.bgImage}>
            {props.recentlyBooked ? (
                <div className={searchStyles.recentlyBooked}>{props.recentlyBookedNum} booked recently</div>
            ) : null}
          </div>
          <div className={`${searchStyles.content} ${searchStyles.Flex}`}>
            <p className={searchStyles.iconHeading}>
              {props.headingText || ""}
            </p>
            <p className={searchStyles.titleWithRating}>
              <span className={searchStyles.title}>
                {props.titleText || ""}
              </span>
              <span className={searchStyles.ratingWrapper}>
                {props.ratings || ""}
              </span>
            </p>
            <p>{props.destination || ""}</p>
            <p>{props.reviewsText || ""}</p>
            <p>{props.legText || ""}</p>
            <p>{props.travellers || ""}</p>
          </div>
          <div className={searchStyles.flexContent}>
            <div className={searchStyles.Wrapper}>
              <p>
                <span className={searchStyles.amount}>$854</span>
              </p>
              <p>per person</p>
              <p>taxes & fees incl.</p>
              <p>
                Or from <span className={searchStyles.amount}>$78/</span>mo <FontAwesomeIcon className={searchStyles.amountInfo} icon={faInfo}/>
              </p>
            </div>
          </div>
          <span className={searchStyles.closeWrapper}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>
      </React.Fragment>
    );
};

export default SearchboxCard;

SearchboxCard.propTypes = {
  hasBgImg: PropTypes.bool,
  headingIcon: PropTypes.object,
  headingText: PropTypes.string,
  legText: PropTypes.string,
  titleText: PropTypes.string,
  booking: PropTypes.bool,
  indexKey: PropTypes.number,
  date: PropTypes.string,
  bookingNumber: PropTypes.number,
  destination: PropTypes.string,
  reviewsText: PropTypes.string,
  travellers: PropTypes.string,
  ratings: PropTypes.array,
  flex: PropTypes.bool,
  recentlyBooked: PropTypes.bool,
  recentlyBookedNum: PropTypes.number
};
