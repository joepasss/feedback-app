import './home.scss';
import { Card } from '../../components/card/Card';
import { FeedbackStats } from '../../secions/feedbackStats/FeedbackStats';
import { FeedbackForm } from '../../secions/feedbackForm/FeedbackForm';

export const Home = () => {
  return (
    <div className='home'>
      <FeedbackForm />
      <FeedbackStats />
    </div>
  );
};
