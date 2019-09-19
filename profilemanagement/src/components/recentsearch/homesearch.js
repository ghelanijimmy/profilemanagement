import PropTypes from "prop-types";
import React, { useEffect } from "react";
import searchStyles from "./_recentsearch.scss";
import searchCardStyles from "../commonelements/_elements.scss";
import {
  faHeart,
  faEnvelope,
  faPlane,
  faStar,
  faList
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchboxCard from "../commonelements/searchboxCard";
import { HeaderBar } from "../commonelements/elements";
import Consumer from "../context/consumer";
// import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

const HomeSearch = props => {
  let hasRecentSearches;
  let hasFavouriteList;

  hasRecentSearches = props.data.isLoggedIn;
  hasFavouriteList = props.data.isLoggedIn;

  useEffect(() => {
    if (props.data.searchOption === "") props.data.changeSearchOption("search");
  }, []);

  let stars = [];
  for (let x = 0; x <= 5; x++) {
    stars.push(<FontAwesomeIcon key={x} icon={faStar} />);
  }

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
                headingText={"From Toronto"}
                titleText={"Royalton Bavaro Resort and Spa"}
                destination={"Punta Cana, Dominican Republic"}
                ratings={stars}
                reviewsText={"Superior 4.2/5 (1000+ reviews)"}
                legText={"All inclusive | 5 days | Aug 25-Aug 30"}
                travellers={"2 Adults, 2 Children"}
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
      ) : hasFavouriteList === true ? (
        <React.Fragment>
          <div
            className={`${searchStyles.searchContent} ${searchStyles.Wrapper}`}
          >
            <SearchboxCard
              hasBgImg={true}
              headingText={"From Toronto"}
              titleText={"Memories Holguin Beach Resort"}
              ratings={stars}
              destination={"Holguin, Cuba"}
              reviewsText={"Good 3.5/5 (1000+ reviews)"}
              legText={"All inclusive | 7 days | Aug 21-Aug 28"}
              travellers={"2 Adults, 2 Children"}
              flex={true}
            />
            <SearchboxCard
              hasBgImg={true}
              headingText={"From Toronto"}
              titleText={"Memories Holguin Beach Resort"}
              ratings={stars}
              destination={"Holguin, Cuba"}
              reviewsText={"Good 3.5/5 (1000+ reviews)"}
              legText={"All inclusive | 7 days | Aug 21-Aug 28"}
              travellers={"2 Adults, 2 Children"}
              flex={true}
              recentlyBooked={true}
              recentlyBookedNum={4}
            />
          </div>

          <div className={searchStyles.footer}>
            <p className={searchStyles.fullList}>
              <span>
                <a>
                  <FontAwesomeIcon icon={faList} />
                  See full list
                </a>
              </span>
            </p>
          </div>
        </React.Fragment>
      ) : (
        <div
          className={`${searchStyles.searchContent} ${searchStyles.Wrapper} ${searchStyles.emptyFavouriteList}`}
        >
          <div>
            <p>
              Saving your favourite trips, flights and hotels helps you keep eye
              on the deal and saves your time when you are ready to book.
            </p>
          </div>
          <div className={searchStyles.messageWrapper}>
            <p>
              <span>Get access to your favourite list anytime, anywhere.</span>
              <span>
                <Link
                  to={""}
                  onClick={() => {
                    props.data.setAppType("login");
                    props.data.setModalState();
                  }}
                  className={"pmappclick"}
                >
                  Sign in
                </Link>{" "}
                or{" "}
                <Link
                  to={""}
                  onClick={() => {
                    props.data.setAppType("create");
                    props.data.setModalState();
                  }}
                  className={"pmappclick"}
                >
                  Create Account
                </Link>
              </span>
            </p>
            <p>
              <span>
                Look for <FontAwesomeIcon icon={faHeart} /> to save your
                favourite packages, hotels, flights & cruises.
              </span>
              <span>
                You can also save your favourite article sand excursions
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
