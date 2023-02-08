import Category from "./category";

class Meal {
  id: string
  categoryIds: Category['id'][]
  title: string
  affordability: 'affordable' | 'pricey' | 'luxurious'
  complexity: 'simple' | 'hard' | 'challenging'
  imageUrl: string
  duration: number
  ingredients: string[]
  steps: string[]
  isGlutenFree: boolean
  isVegan: boolean
  isVegetarian: boolean
  isLactoseFree: boolean

  constructor(
    id: Meal['id'],
    categoryIds: Meal['categoryIds'],
    title: Meal['title'],
    affordability: Meal['affordability'],
    complexity: Meal['complexity'],
    imageUrl: Meal['imageUrl'],
    duration: Meal['duration'],
    ingredients: Meal['ingredients'],
    steps: Meal['steps'],
    isGlutenFree: Meal['isGlutenFree'],
    isVegan: Meal['isVegan'],
    isVegetarian: Meal['isVegetarian'],
    isLactoseFree: Meal['isLactoseFree']
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.steps = steps;
    this.duration = duration;
    this.complexity = complexity;
    this.affordability = affordability;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Meal;
