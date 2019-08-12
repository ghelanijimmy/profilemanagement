import React               from "react";
import searchStyles        from "./_recentsearch.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlane, faTimes}  from "@fortawesome/free-solid-svg-icons";

const SearchboxCard = props => {
  if (!props.hasBgImg)
    return (
	    <React.Fragment>
		    <div className={searchStyles.searchBox}>
			    <p className={searchStyles.iconHeading}>
				    <FontAwesomeIcon icon={props.headingIcon}/>
				    {props.headingText}
			    </p>
			    <p className={searchStyles.title}>{props.titleText}</p>
			    <p>{props.legText}</p>
			    <span className={searchStyles.closeWrapper}>
			    <FontAwesomeIcon icon={faTimes}/>
		    </span>
		    </div>
	    </React.Fragment>
    );
  else
    return (
	    <React.Fragment>
		    <div
			    className={`${searchStyles.searchBox} ${
				    searchStyles.searchBoxWithImage
			    }`}
		    >
			    <div className={searchStyles.bgImage}/>
			    <div className={searchStyles.content}>
				    <p className={searchStyles.title}>Montreal-Montago Bay</p>
				    <p>Punta Cana, Dominican Republic</p>
				    <p>Superior 4.2/5 (1000+ reviews)</p>
				    <p>All inclusive | 5 days | Aug 25-Aug 30</p>
				    <p>2 Adults, 2 Children</p>
				    <p className={searchStyles.searchCardFooterText}>15+ room
					    types</p>
			    </div>
			    <span className={searchStyles.closeWrapper}>
			    <FontAwesomeIcon icon={faTimes}/>
		    </span>
		    </div>
	    </React.Fragment>
    );
};

export default SearchboxCard;
