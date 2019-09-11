import PropTypes from "prop-types";
import React, { useEffect } from "react";
import searchStyles from "./_recentsearch.scss";
import searchCardStyles from "../commonelements/_elements.scss";
import {
  faHeart,
  faEnvelope,
  faPlane,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchboxCard from "../commonelements/searchboxCard";
import { HeaderBar } from "../commonelements/elements";
import Consumer from "../context/consumer";
// import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const HomeSearch = props => {
  let hasRecentSearches;
  let hasFavouriteList;

  hasRecentSearches = true;
  hasFavouriteList = false;

  // const handleEditProfileClick = e => {
  //   e.preventDefault();inp
  //   props.data.setTabOption("account");
  //
  //   props.history.push({
  //     pathname: "/myaccount"
  //   });
  // };

  useEffect(() => {
    if (props.data.searchOption === "") props.data.changeSearchOption("search");
  }, []);

  const searchBoxText = () => {
    return (
      <React.Fragment>
        <p className={`${searchCardStyles.titleWithRating}`}>
          <span className={searchCardStyles.title}>
            Royalton Bavaro Resort and Spa
          </span>
          <span className={searchCardStyles.ratingWrapper}>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </span>
        </p>
        <p>Punta Cana, Dominican Republic</p>
        <p>Superior 4.2/5 (1000+ reviews)</p>
        <p>All inclusive | 5 days | Aug 25-Aug 30</p>
        <p>2 Adults, 2 Children</p>
        <p className={searchCardStyles.searchCardFooterText}>15+ room types</p>
      </React.Fragment>
    );
  };

  return (
    <section
      className={`${searchStyles.recentSearches} ${searchStyles.Wrapper}`}
    >
      <HeaderBar expand={true} />
      {props.data.searchOption === "search" ? (
        hasRecentSearches === true ? (
          <React.Fragment>
            <div
              className={`${searchStyles.searchContent} ${searchStyles.Wrapper}`}
            >
              <SearchboxCard
                headingIcon={faPlane}
                headingText={"Flight"}
                titleText={"Montreal-Montago Bay"}
                legText={"One way | Aug 25 | 2 Adults, 2 Children"}
              />
              <SearchboxCard
                hasBgImg={true}
                titleText={"Montreal-Montago Bay"}
                cardContent={`<p class=${searchCardStyles.title}>Royalton Bavaro Resort and Spa</p>
                  <p>Punta Cana, Dominican Republic</p>
                  <p>Superior 4.2/5 (1000+ reviews)</p>
                  <p>All inclusive | 5 days | Aug 25-Aug 30</p>
                  <p>2 Adults, 2 Children</p>
                  <p class=${searchCardStyles.searchCardFooterText}>15+ room types</p>`}
                test={searchBoxText}
              />
            </div>

            <div className={searchStyles.footer}>
              <p>
                Prices vary and will be updated when you view current results.
              </p>
              <p>
                <span className={searchStyles.emailSeeAll}>
                  <a>
                    <FontAwesomeIcon icon={faEnvelope} />
                    Email my searches
                  </a>
                  <span>|</span>
                  <a>View all</a>
                </span>
              </p>
            </div>
          </React.Fragment>
        ) : null
      ) : hasFavouriteList === true ? null : (
        <div
          className={`${searchStyles.searchContent} ${searchStyles.Wrapper} ${searchStyles.emptyFavouriteList}`}
        >
          <div>
            <p>
              Saving your favourite trips, flights and hotels helps you keep eye
              on the deal and saves your time when you are ready to book.
            </p>
          </div>
          <div>
            <p>
              While looking for the deals...
              <br />
              Look for <FontAwesomeIcon icon={faHeart} /> to save your favourite
              trips and hotels.
            </p>
            <br />
            <p>Get access to your favourite list anytime, anywhere.</p>
            <p>
              <span>
                <a>Sign In</a>
              </span>{" "}
              or{" "}
              <span>
                <a>Create Profile</a>
              </span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Consumer(HomeSearch);

HomeSearch.propTypes = {
  data: PropTypes.object,
  history: PropTypes.object
};
