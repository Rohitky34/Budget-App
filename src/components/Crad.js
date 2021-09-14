import "./Card.css";
function Card(props) {
    const classes = 'card ' + props.className;
    let a = 0;
  return <div className={classes}>{props.children}</div>;
}
export default Card;
