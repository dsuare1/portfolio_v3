import React from 'react';
import { LargeCopy, SecondaryCopy, StandardCopy } from '../../typography/Copy';
import TimelineElements from './TImelineElements';
import { CHAPTER, TRANSITION } from '../../../constants/journeyNodes';
import style from './node.module.scss';

const Node = ({ icon, index, nodeProps, numberOfNodes }) => {
  const { id, shortDescription, title, type, year } = nodeProps;
  const topRow = index % 2 === 0;
  const isLastOne = index === numberOfNodes - 1;

  return (
    <div key={id} className={style.node}>
      <div
        className={`${
          topRow ? style.nodeCopyContainerTop : style.nodeCopyContainer
        } ${topRow ? style.nodeCopyItemTop : style.nodeCopyItemBottom}`}
      >
        <p className={style.year}>{year}</p>
        {type === CHAPTER ? <LargeCopy>{title}</LargeCopy> : null}
        <span className={style.icon}>{icon}</span>
        <SecondaryCopy>{shortDescription}</SecondaryCopy>
      </div>
      <TimelineElements index={index} isLastOne={isLastOne} topRow={topRow} />
    </div>
  );
};

export default Node;
