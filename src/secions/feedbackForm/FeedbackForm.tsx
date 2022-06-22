import { Card } from '../../components/card/Card';
import './feedbackForm.scss';

export const FeedbackForm = () => {
  return (
    <section id='feedback-form'>
      <Card backgroundColor='rgb(240, 240, 240)' isBorder={false}>
        <div className='content'>
          <h3 className='title'>Rate Our Product!</h3>

          <div className='rating'>
            <button className='rating-btn'>
              <p>1</p>
            </button>
            <button className='rating-btn'>
              <p>2</p>
            </button>
            <button className='rating-btn'>
              <p>3</p>
            </button>
            <button className='rating-btn'>
              <p>4</p>
            </button>
            <button className='rating-btn'>
              <p>5</p>
            </button>
            <button className='rating-btn'>
              <p>6</p>
            </button>
            <button className='rating-btn'>
              <p>7</p>
            </button>
            <button className='rating-btn'>
              <p>8</p>
            </button>
            <button className='rating-btn'>
              <p>9</p>
            </button>
            <button className='rating-btn'>
              <p>10</p>
            </button>
          </div>

          <div className='textarea'>
            <input type='text' placeholder='write a review' />
            <button>Send</button>
          </div>
        </div>
      </Card>
    </section>
  );
};
