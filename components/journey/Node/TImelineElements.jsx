import DotIntervals from './DotIntervals';
import style from './timelineElements.module.scss';

const TimelineElements = ({ index, isLastOne, topRow }) => (
  <div
    className={`${topRow ? style.nodeAxisCopyTop : style.nodeAxisCopyBottom}`}
  >
    {index ? <DotIntervals basis="left" numDots={5} /> : null}
    <div className={style.nodeCircle} />
    {isLastOne ? null : <DotIntervals basis="right" numDots={5} />}
    <div className={`${topRow ? style.nodeLineTop : style.nodeLineBottom}`} />
  </div>
);

export default TimelineElements;
