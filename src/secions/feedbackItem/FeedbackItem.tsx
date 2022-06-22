import { Card } from '../../components/card/Card';
import './feedbackItem.scss';

export const FeedbackItem = () => {
  return (
    <section id='feedback-item'>
      <Card backgroundColor='rgb(70, 70, 70)' isBorder={false}>
        <div className='contents'>
          <div className='rating'>
            <p className='number'>10</p>
          </div>
          <div className='content'>
            <p className='para'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, illum?
            </p>
          </div>
          <div className='icons'>
            <div className='icon icon-delete'>
              <p>🖋️</p>
            </div>
            <div className='icon icon-delete'>
              <p>🗑️</p>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};
