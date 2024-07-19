// src/app/components/SearchBar.js
"use client";

import React from 'react';
import styles from '../../styles/Home.module.css';

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Search a Book" />
      <button className={styles.clearButton}>✖️</button>
    </div>
  );
};

export default SearchBar;
