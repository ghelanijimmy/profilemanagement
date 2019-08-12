import React, { useState } from "react";
import searchStyles from "./_recentsearch.scss";
import styles from "../../css/_index.scss";
import {
  faSearch,
  faHeart,
  faEnvelope,
  faPlane
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchboxCard from "./searchboxCard";
//TODO Star rating icons for search boxes
//TODO recent searches my favorite list button active styling

const HomeSearch = props => {
  const [searchOption, changeSearchOption] = useState("search");

  const handleSearchOptionChange = () => {
    changeSearchOption(searchOption === "search" ? "list" : "search");
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
                ? `${styles.btn} ${styles.primary}`
                : `${styles.btn} ${styles.primaryInverse}`
            }
          >
            <FontAwesomeIcon icon={faSearch} />
            Recent searches
          </button>
          <button
            onClick={handleSearchOptionChange}
            className={
              searchOption === "list"
                ? `${styles.btn} ${styles.primary}`
                : `${styles.btn} ${styles.primaryInverse}`
            }
          >
            <FontAwesomeIcon icon={faHeart} />
            My favorite list
          </button>
        </div>
      </div>
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
          cardContent={`<p class=${searchStyles.title}>Montreal-Montago Bay</p>
                  <p>Punta Cana, Dominican Republic</p>
                  <p>Superior 4.2/5 (1000+ reviews)</p>
                  <p>All inclusive | 5 days | Aug 25-Aug 30</p>
                  <p>2 Adults, 2 Children</p>
                  <p class=${
                    searchStyles.searchCardFooterText
                  }>15+ room types</p>`}
        />
      </div>
      <div className={searchStyles.footer}>
        <p>Prices vary and will be updated when you view current results.</p>
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
    </section>
  );
};

export default HomeSearch;
