import './menuItem.scss';

export default function MenuItem({ id, onClick, text }) {
  return (
    <li onClick={() => onClick(false)}>
      <a href={id}>{text}</a>
    </li>
  );
}
