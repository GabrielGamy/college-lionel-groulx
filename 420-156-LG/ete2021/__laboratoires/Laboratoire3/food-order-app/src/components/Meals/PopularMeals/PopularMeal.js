import Card from "../../UI/Card/Card";
import { useHistory } from "react-router-dom";

const PopularMeal = (props) => {
  let history = useHistory();

  const navigate = () => {
    history.push("/details/" + props.id);
  };

  return (
    <Card name={props.name} image={props.image} onClickCard={navigate}>
      <p>${props.price}$</p>
    </Card>
  );
};

export default PopularMeal;
