import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DiNodejsSmall } from '@react-icons/all-files/di/DiNodejsSmall';
import { DiGo } from '@react-icons/all-files/di/DiGo';
import { DiReact } from '@react-icons/all-files/di/DiReact';
import { DiPostgresql } from '@react-icons/all-files/di/DiPostgresql';
import { DiDatabase } from '@react-icons/all-files/di/DiDatabase';
import { DiGit } from '@react-icons/all-files/di/DiGit';
import { HeadingH3 } from '../../typography/Headings';
import cardData from '../../../constants/technologyCards';
import style from './cardList.module.scss';
import cardStyle from './card.module.scss';

const iconMap = {
  nodejs: <DiNodejsSmall className={cardStyle.icon} />,
  go: <DiGo className={cardStyle.icon} />,
  reactjs: <DiReact className={cardStyle.icon} />,
  postgresql: <DiPostgresql className={cardStyle.icon} />,
  sequelize: <DiDatabase className={cardStyle.icon} />,
  git: <DiGit className={cardStyle.icon} />,
};

const CardList = () => {
  const [activeCardId, setActiveCardId] = useState(null);

  const activeCardAnimation = {
    rotateY: 180,
    scale: 1.25,
    zIndex: 9999,
  };

  const activeCardContentAnimation = {
    rotateY: 180,
  };

  const transitionConfig = {
    duration: 0.5,
  };

  const clearActiveCard = () => setActiveCardId(null);

  return (
    <div className={style.cardListGrid}>
      {cardData.map(({ id, title, details }) => {
        const isActive = id === activeCardId;

        return (
          <motion.div
            key={id}
            animate={isActive ? activeCardAnimation : null}
            transition={transitionConfig}
            className={isActive ? cardStyle.activeCard : cardStyle.card}
          >
            <motion.div
              animate={isActive ? activeCardContentAnimation : null}
              transition={transitionConfig}
              className={cardStyle.title}
            >
              <HeadingH3>{title}</HeadingH3>
            </motion.div>
            {isActive ? (
              <>
                <motion.p
                  animate={isActive ? activeCardContentAnimation : null}
                  className={cardStyle.activeCardDetails}
                >
                  {details.details}
                </motion.p>
                <motion.button
                  animate={isActive ? activeCardContentAnimation : null}
                  transition={transitionConfig}
                  className={cardStyle.footerButton}
                  onClick={clearActiveCard}
                >
                  Close
                </motion.button>
              </>
            ) : (
              <>
                <div className={cardStyle.topHalf}>
                  {iconMap[id]}
                  <p className={cardStyle.yearsExperience}>
                    Years experience: {details.yearsExperience}
                  </p>
                </div>
                <div className={cardStyle.bottomHalf}>
                  <p>Have used it for:</p>
                  <ul>
                    {details.usedFor.map((exp) => (
                      <li key={exp}>- {exp}</li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className={cardStyle.footerButton}
                    onClick={() => setActiveCardId(id)}
                  >
                    See more
                  </button>
                </div>
              </>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default CardList;
