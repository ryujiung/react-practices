import React from "react";
import styles from './assets/scss/SearchBar.scss'

function SearchBar(props){
    return(
        <div className={styles.SearchBar}>
            <input type='text' placeholder='찾기'/>
        </div>
    )
}

export default SearchBar;