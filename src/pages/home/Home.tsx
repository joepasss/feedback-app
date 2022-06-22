import './home.scss';
import { FeedbackStats } from '../../secions/feedbackStats/FeedbackStats';
import { FeedbackForm } from '../../secions/feedbackForm/FeedbackForm';
import { FeedbackItem } from '../../secions/feedbackItem/FeedbackItem';

export const Home = () => {
  return (
    <div className='home'>
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackItem />
      <FeedbackItem />
      <FeedbackItem />
      <FeedbackItem />
      <FeedbackItem />
      <FeedbackItem />
    </div>
  );
};
