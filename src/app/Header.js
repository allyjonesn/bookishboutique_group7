// src/app/components/Header.js
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Header.module.css';

const Header = ({ isLoggedIn, handleLogout }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/" legacyBehavior>
          <a className={styles.logoLink}>Bookish Boutique</a>
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/" legacyBehavior>
          <a>Home</a>
        </Link>
        <div className={styles.dropdown}>
          <button className={styles.dropbtn} onClick={toggleDropdown}>Categories</button>
          {dropdownVisible && (
            <div className={styles.dropdownContent}>
              <Link href="/categories/fiction" legacyBehavior>
                <a>Fiction</a>
              </Link>
              <Link href="/categories/non-fiction" legacyBehavior>
                <a>Non-fiction</a>
              </Link>
              <Link href="/categories/mystery" legacyBehavior>
                <a>Mystery</a>
              </Link>
              <Link href="/categories/romance" legacyBehavior>
                <a>Romance</a>
              </Link>
              <Link href="/categories/scifi" legacyBehavior>
                <a>Sci-fi</a>
              </Link>
              <Link href="/categories/fantasy" legacyBehavior>
                <a>Fantasy</a>
              </Link>
            </div>
          )}
        </div>
        <Link href="/top-sellers" legacyBehavior>
          <a>Top Sellers</a>
        </Link>
        <Link href="/coming-soon" legacyBehavior>
          <a>Coming Soon</a>
        </Link>
        <Link href="/profile" legacyBehavior>
          <a>Profile</a>
        </Link>
        <Link href="/cart" legacyBehavior>
          <a>Cart</a>
        </Link>
        <Link href="/admin" legacyBehavior>
          <a>Admin</a>
        </Link>
        <Link href="/login" legacyBehavior>
          <a>Sign in</a>
        </Link>
        <Link href="/register" legacyBehavior>
          <a>Register</a>
        </Link>
        {isLoggedIn && (
          <a href="#" onClick={handleLogout} className={styles.logoutLink}>Logout</a>
        )}
      </nav>
    </header>
  );
};

export default Header;
