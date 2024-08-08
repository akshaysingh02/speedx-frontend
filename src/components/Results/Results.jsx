import React from "react";
import Lottie from "lottie-react";
import animation from "../../assets/speed.json";
import styles from "./results.module.css";

export default function Results({ metrics, isLoading }) {
  return (
    <>
      {isLoading ? (
        <div className={styles.loaderContainer}>
          <h3>Hang on, working on it!</h3>
          <div className={styles.animationWrapper}>
            <Lottie animationData={animation} loop={true} />
          </div>
        </div>
      ) : (
        <div className={styles.resultWrapper}>
          <h2>Result:</h2>
          <div className={styles.blockWrapper}>
            <div className={styles.dataBox}>
              <p
                className={styles.boxHeading}
                title="Here it is (Time to Interactive) which is the amount of time it takes for the page to become fully interactive"
              >
                Load time
              </p>
              <p className={styles.dataValue}>
                {parseInt(metrics?.timeToInteractive)} ms
              </p>
            </div>
            <div className={styles.dataBox}>
              <p
                className={styles.boxHeading}
                title="Speed Index shows how quickly the contents of a page are visibly populated."
              >
                Speed Index
              </p>
              <p className={styles.dataValue}>
                {parseInt(metrics?.speedIndex)} ms
              </p>
            </div>
            <div className={styles.dataBox}>
              <p
                className={styles.boxHeading}
                title="Largest Contentful Paint marks the time at which the largest text or image is painted."
              >
                Largest Contentful Paint
              </p>
              <p className={styles.dataValue}>
                {parseInt(metrics?.largestContentfulPaint)} ms
              </p>
            </div>
            <div className={styles.dataBox}>
              <p
                className={styles.boxHeading}
                title="Large network payloads cost users real money and are highly correlated with long load times."
              >
                Total Request Size
              </p>
              <p className={styles.dataValue}>
                {metrics?.totalRequestSize / 1000} kb
              </p>
            </div>
            <div className={styles.dataBox}>
              <p
                className={styles.boxHeading}
                title="Lists the network requests that were made during page load."
              >
                Number of Requests
              </p>
              <p className={styles.dataValue}>{metrics?.numberOfRequests}</p>
            </div>
            <div className={styles.dataBox}>
              <p
                className={styles.boxHeading}
                title="First Contentful Paint marks the time at which the first text or image is painted."
              >
                First Contentful Paint
              </p>
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
