import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import styles from "./styles.module.css";
import CardSection from "../../components/UI/Card/CardSection";
import MealItem from "../../components/Meals/MealItem/MealItem";
import MealContext from "../../store/meal-context";

export default class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoriesOptions: [],
      sortByOptions: [],
      meals: [],
      selectedCategory: "",
      selectedSortBy: "",
    };

    this._onSelectCateogry = this._onSelectCateogry.bind(this);
  }

  componentDidMount() {
    const { availableCategories } = this.context;
    const categoriesOptions = availableCategories.map(
      (category) => category.name
    );
    const sortByOptions = ["Name", "Price"];
    this.setState({
      categoriesOptions: ["All", ...categoriesOptions],
      sortByOptions,
    });
    this.loadMeals();
  }

  loadMeals = () => {
    const { selectedCategory, selectedSortBy } = this.state;
    let currentMeals = [...this.context.availableMeals];

    if (selectedCategory.length && selectedCategory !== "All") {
      const selectedCategoryId = this.context.availableCategories.find(
        (c) => c.name.toLowerCase() === selectedCategory.toLowerCase()
      )?.id;

      currentMeals = currentMeals.filter(
        (meal) => meal.categoryId === selectedCategoryId
      );
    }

    if (selectedSortBy.length) {
      switch (selectedSortBy.toLowerCase()) {
        case "name": {
          currentMeals = currentMeals.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          break;
        }
        case "price": {
          currentMeals = currentMeals.sort((a, b) => {
            if (a.price > b.price) return 1;
            if (a.price < b.price) return -1;
            return 0;
          });
          break;
        }
        default:
          break;
      }
    }
    this.setState({ meals: currentMeals });
  };

  _onSelectCateogry(option) {
    this.setState({ selectedCategory: option.label }, () => {
      this.loadMeals();
    });
  }

  _onSelectSortBy = (option) => {
    this.setState({ selectedSortBy: option.label }, () => {
      this.loadMeals();
    });
  };

  render() {
    const { categoriesOptions, sortByOptions, meals } = this.state;
    const contextData = this.context;
    return (
      <div>
        <section className={styles["filter-container"]}>
          <Dropdown
            options={categoriesOptions}
            onChange={this._onSelectCateogry}
            value={this.selectedCategory}
            placeholder="Select a category"
            className={styles["filter-item"]}
            controlClassName={styles["filter-item-control"]}
          />
          <Dropdown
            options={sortByOptions}
            onChange={this._onSelectSortBy}
            value={this.selectedSortBy}
            placeholder="Sort by"
            className={styles["filter-item"]}
            controlClassName={styles["filter-item-control"]}
          />
        </section>
        <CardSection headerTitle="Listing">
          {meals.map((meal) => {
            return (
              <MealItem
                key={meal.id}
                id={meal.id}
                name={meal.name}
                price={meal.price}
                image={meal.image}
                saved={contextData.isFavourite(meal.id)}
                selected={contextData.isAddedInCart(meal.id)}
              />
            );
          })}
        </CardSection>
      </div>
    );
  }
}

Listing.contextType = MealContext;
