import React from "react";
import searchStyles from "./_recentsearch.scss";
import styles from "../../css/_index.scss";
import {
  faSearch,
  faHeart,
  faEnvelope,
  faPlane
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeSearch = props => {
  if (props.user !== "")
    return (
      <section className={searchStyles.recentSearchesWrapper}>
        <div className={searchStyles.header}>
          <p className={styles.Title}>Welcome Back</p>
          <div className={searchStyles.searchOptions}>
            <button className={styles.btn}>
              <FontAwesomeIcon icon={faSearch} />
              Recent searches
            </button>
            <button className={styles.btn}>
              <FontAwesomeIcon icon={faHeart} />
              My favorite list
            </button>
          </div>
        </div>
        <div className={searchStyles.searchContentWrapper}>
          <div className={searchStyles.searchBox}>
            <p className={searchStyles.iconHeading}>
              <FontAwesomeIcon icon={faPlane} />
              Flight
            </p>
            <p className={searchStyles.title}>Montreal-Montago Bay</p>
            <p>One way | Aug 25 | 2 Adults, 2 Children</p>
          </div>
          <div
            className={`${searchStyles.searchBox} ${
              searchStyles.searchBoxWithImage
            }`}
          >
            <div className={searchStyles.bgImage} />
            <div className={searchStyles.content}>
              <p className={searchStyles.title}>Montreal-Montago Bay</p>
              <p>Punta Cana, Dominican Republic</p>
              <p>Superior 4.2/5 (1000+ reviews)</p>
              <p>All inclusive | 5 days | Aug 25-Aug 30</p>
              <p>2 Adults, 2 Children</p>
              <p className={searchStyles.searchCardFooterText}>
                15+ room types
              </p>
            </div>
          </div>
        </div>
        <div className={searchStyles.footer}>
          <p>Prices vary and will be updated when you view current results.</p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
            Email my searches | View all
          </p>
        </div>
      </section>
    );
  else {
    return null;
  }
};

export default HomeSearch;
