import Card from "../../UI/Card/Card";

const MealCategory = (props) => {
  return (
    <Card name={props.name} image={props.image}>
      <p>{props.nbMeals} Meals</p>
    </Card>
  );
};

export default MealCategory;
