import React, { useState } from "react";
import searchStyles from "./_recentsearch.scss";
import styles from "../../css/_index.scss";
import {
  faSearch,
  faHeart,
  faEnvelope,
  faPlane,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchboxCard from "./searchboxCard";
//TODO Star rating icons for search boxes
//TODO triangle under searchoption button

const HomeSearch = props => {
  const [searchOption, changeSearchOption] = useState("search");

  const handleSearchOptionChange = e => {
    if (e.target.nodeName !== "button")
      changeSearchOption(e.target.closest("button").dataset.searchoption);
    else changeSearchOption(e.target.dataset.searchoption);
  };

  let hasRecentSearches = true;
  let hasFavouriteList = true;

  hasRecentSearches = true;
  hasFavouriteList = false;

  const searchBoxText = () => {
    return (
      <React.Fragment>
        <p className={searchStyles.title}>
          Royalton Bavaro Resort and Spa{" "}
          <span className={searchStyles.ratingWrapper}>
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
        <p className={searchStyles.searchCardFooterText}>15+ room types</p>
      </React.Fragment>
    );
  };

  return (
    <section className={searchStyles.recentSearchesWrapper}>
      <div className={searchStyles.header}>
        <p className={styles.Title}>
          Welcome Back{props.user === "" ? "" : `, ${props.user}`}
        </p>
        <div className={searchStyles.searchOptions}>
          <button
            onClick={handleSearchOptionChange}
            className={
              searchOption === "search"
                ? `${styles.btn} ${styles.primary} ${searchStyles.activeOption}`
                : `${styles.btn} ${styles.primaryInverse}`
            }
            data-searchoption={"search"}
          >
            <FontAwesomeIcon icon={faSearch} />
            Recent searches
          </button>
          <button
            onClick={handleSearchOptionChange}
            className={
              searchOption === "list"
                ? `${styles.btn} ${styles.primary} ${searchStyles.activeOption}`
                : `${styles.btn} ${styles.primaryInverse}`
            }
            data-searchoption={"list"}
          >
            <FontAwesomeIcon icon={faHeart} />
            My favorite list
          </button>
        </div>
      </div>
      {searchOption === "search" ? (
        hasRecentSearches === true ? (
          <React.Fragment>
            <div className={searchStyles.searchContentWrapper}>
              <SearchboxCard
                headingIcon={faPlane}
                headingText={"Flight"}
                titleText={"Montreal-Montago Bay"}
                legText={"One way | Aug 25 | 2 Adults, 2 Children"}
              />
              <SearchboxCard
                hasBgImg={true}
                titleText={"Montreal-Montago Bay"}
                cardContent={`<p class=${
                  searchStyles.title
                }>Royalton Bavaro Resort and Spa</p>
                  <p>Punta Cana, Dominican Republic</p>
                  <p>Superior 4.2/5 (1000+ reviews)</p>
                  <p>All inclusive | 5 days | Aug 25-Aug 30</p>
                  <p>2 Adults, 2 Children</p>
                  <p class=${
                    searchStyles.searchCardFooterText
                  }>15+ room types</p>`}
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
          className={`${searchStyles.searchContentWrapper} ${
            searchStyles.emptyFavouriteList
          }`}
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

export default HomeSearch;
