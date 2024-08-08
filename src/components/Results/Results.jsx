import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import animation from "../../assets/loading.json";
import styles from "./results.module.css";

export default function Results({ metrics, isLoading }) {
  return (
    <>
      {isLoading ? (
        <div className={styles.loaderContainer}>
          <Lottie animationData={animation} loop={true} />
        </div>
      ) : (
        <div className={styles.resultWrapper}>
          <h2>Result:</h2>
          <div className={styles.blockWrapper}>
            <div className={styles.dataBox}>
              <p className={styles.boxHeading}>Performance Score</p>
              <p className={styles.dataValue}>{metrics?.performanceScore}</p>
            </div>
            <div className={styles.dataBox}>
              <p className={styles.boxHeading}>Speed Index</p>
              <p className={styles.dataValue}>
                {parseInt(metrics?.speedIndex)} ms
              </p>
            </div>
            <div className={styles.dataBox}>
              <p className={styles.boxHeading}>Time to Interactive</p>
              <p className={styles.dataValue}>
                {parseInt(metrics?.timeToInteractive)} ms
              </p>
            </div>
            <div className={styles.dataBox}>
              <p className={styles.boxHeading}>Total Request Size</p>
              <p className={styles.dataValue}>
                {metrics?.totalRequestSize / 1000} kb
              </p>
            </div>
            <div className={styles.dataBox}>
              <p className={styles.boxHeading}>Number of Requests</p>
              <p className={styles.dataValue}>{metrics?.numberOfRequests}</p>
            </div>
            <div className={styles.dataBox}>
              <p className={styles.boxHeading}>First Contentful Paint</p>
              <p className={styles.dataValue}>
                {parseInt(metrics?.firstContentfulPaint)} ms
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
