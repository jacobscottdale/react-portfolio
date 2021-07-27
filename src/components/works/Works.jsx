import { ArrowBackIos, ArrowForwardIos, PhoneAndroid } from '@material-ui/icons';
import { useState } from 'react';
import './works.scss';

export default function Works() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (direction) => {
    direction === 'left' 
    ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) 
    : setCurrentSlide(currentSlide < data.length-1 ? currentSlide+1 : 0)

  }

  const data = [
    {
      id: '1',
      title: 'Web Design',
      desc: 'Cupidatat voluptate ipsum nisi aute dolor occaecat non cillum sunt ut cillum dolor. Officia tempor commodo esse consequat nisi proident dolor deserunt.',
      img: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930'
    },
    {
      id: '2',
      title: 'Mobile Application',
      desc: 'Cupidatat voluptate ipsum nisi aute dolor occaecat non cillum sunt ut cillum dolor. Officia tempor commodo esse consequat nisi proident dolor deserunt.',
      img: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930'
    },
    {
      id: '3',
      title: 'Web Design 2',
      desc: 'Cupidatat voluptate ipsum nisi aute dolor occaecat non cillum sunt ut cillum dolor. Officia tempor commodo esse consequat nisi proident dolor deserunt.',
      img: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930'
    },
  ];

  return (
    <div className='works' id='works'>
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map(d => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="left-container">
                  <div className="img-container">
                    <PhoneAndroid className='icon' />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt={d.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <ArrowBackIos className='arrow left' onClick={() => handleClick('left')} />
      <ArrowForwardIos className='arrow right' onClick={() => handleClick('right')} />
    </div>
  );
}
