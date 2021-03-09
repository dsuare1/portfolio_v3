import React from 'react';
import PropTypes from 'prop-types';
import { LargeCopy, SecondaryCopy } from '../../typography/Copy';
import TimelineElements from './TImelineElements';
import { CHAPTER } from '../../../constants/journeyNodes';
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

Node.propTypes = {
  icon: PropTypes.element.isRequired,
  index: PropTypes.number.isRequired,
  nodeProps: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    dates: PropTypes.string,
    title: PropTypes.string,
    shortDescription: PropTypes.string,
    location: PropTypes.string,
    longDescription: PropTypes.string,
    readMore: PropTypes.bool.isRequired,
  }).isRequired,
  numberOfNodes: PropTypes.number.isRequired,
};

export default Node;
