import './feedbackstats.scss';

export const FeedbackStats = () => {
  return (
    <section id='feedback-stats'>
      <div className='stats'>
        <h4 className='feedback-number'>
          <span>30</span> Reviews
        </h4>
        <h4 className='average'>
          average rating : <span>10</span>
        </h4>
      </div>
    </section>
  );
};
