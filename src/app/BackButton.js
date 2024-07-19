// src/app/components/BackButton.js
"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../styles/BackButton.module.css';

const BackButton = () => {
  const router = useRouter();

  return (
    <button className={styles.backButton} onClick={() => router.back()}>
      &larr; Back
    </button>
  );
};

export default BackButton;
