import './header.scss';

export const Header = () => {
  return (
    <header>
      <section className='header'>
        <h3 className='title'>Feedback</h3>
        <div className='contect-group'>
          <div className='github'>
            <img
              src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
              alt='github'
            />
          </div>
        </div>
      </section>
    </header>
  );
};
