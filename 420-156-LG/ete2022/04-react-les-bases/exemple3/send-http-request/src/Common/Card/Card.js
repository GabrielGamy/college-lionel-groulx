import './Card.css';
const Card = (props) => <div className={`card ${props.className}`} key={props.key}>{props.children}</div>
export default Card;