import './portfolioButton.scss';

export default function PortfolioButton({ id, title, active, setSelected }) {
  return (
    <li
      id={id}
      className={active ? 'portfolio-item active' : 'portfolio-item'}
      onClick={() => setSelected(id)}>
      {title}
    </li>
  );
}
