import PropTypes from "prop-types";
import React from "react";
import searchStyles from "./_recentsearch.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faTimes } from "@fortawesome/free-solid-svg-icons";

const SearchboxCard = props => {
  if (!props.hasBgImg)
    return (
      <React.Fragment>
        <div className={searchStyles.searchBox}>
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
      </React.Fragment>
    );
  else
    return (
      <React.Fragment>
        <div className={`${searchStyles.searchBox} ${searchStyles.WithImage}`}>
          <div className={searchStyles.bgImage} />
          <div className={searchStyles.content}>{props.test()}</div>
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
  test: PropTypes.func,
  titleText: PropTypes.string
};
