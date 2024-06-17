'use client';
import React, { useState } from 'react';

// styles
import styles from './Page.module.css';
import useScrollToStartX from '../Hook/useScrollToStartX';
import { MenuData } from '../Constants/Ment';
import useScrollToCenterX from '../Hook/useScrollToCenterX';

function Home() {
  const { containerRef, nextHandler } = useScrollToStartX();
  const [activeStartID, changeActiveStart] = useState<number>(0);

  // center
  const { ClickHandler, containerRef: containerRefCenter } =
    useScrollToCenterX();
  const [activeCenterID, changeActiveCenter] = useState<string>('0-0');

  return (
    <>
      {/* ------------------scroll to start x---------------------- */}
      <div className={styles.container__startX} ref={containerRef}>
        {MenuData.map((list) => (
          <div
            key={list.id}
            id={`scroll-item-${list.id}`}
            onClick={() => {
              changeActiveStart(list.id);
              nextHandler(list.id);
            }}
            className={activeStartID === list.id ? styles.active : ''}
          >
            {list.title}
          </div>
        ))}
      </div>

      {/* ------------------scroll to center x---------------------- */}
      <div className={styles.container__centerX} ref={containerRefCenter}>
        {MenuData.map((list, i) => (
          <div
            key={list.id}
            id={`scroll-item-${list.id}-${i}`}
            onClick={() => {
              ClickHandler(`${list.id}-${i}`);
              changeActiveCenter(`${list.id}-${i}`);
            }}
            className={activeCenterID === `${list.id}-${i}` ? styles.active : ''}
          >
            {list.title}
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
