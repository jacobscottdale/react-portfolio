import { useState, useEffect } from 'react';
import PortfolioButton from '../portfolioButton/PortfolioButton';
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio } from '../../data';
import './portfolio.scss';

export default function Portfolio() {

  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);

  const list = [
    {
      id: 'featured',
      title: 'Featured'
    },
    {
      id: 'web',
      title: 'Web App'
    },
    {
      id: 'mobile',
      title: 'Mobile App'
    },
    {
      id: 'design',
      title: 'Design'
    },
    {
      id: 'content',
      title: 'Content'
    },
  ];

  useEffect(() => {

    switch (selected) {
      case 'featured':
        setData(featuredPortfolio);
        break;
      case 'web':
        setData(webPortfolio);
        break;
      case 'mobile':
        setData(mobilePortfolio);
        break;
      case 'design':
        setData(designPortfolio);
        break;
      case 'content':
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);

    }

  }, [selected]);

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map(({ id, title }, idx) =>
          <PortfolioButton
            key={idx} id={id}
            title={title}
            active={selected === id}
            setSelected={setSelected}
          />
        )}
      </ul>
      <div className="portfolio-display-container">
        {data.map(({ id, title, img }) =>
          <div key={id} className="portfolio-display-item">
            <img src={img} alt={title} />
            <h3>{title}</h3>
          </div>
        )}


      </div>
    </div>
  );
}
