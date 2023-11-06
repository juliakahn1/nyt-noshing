# README

[Live NYT Noshing site](https://nytnoshing.onrender.com)

NYT Noshing is a clone of the NYT Cooking website. Upon visiting the former site, before they can interact with any recipes, users must either login, create an account, or log in using a demo account. Afterwards, they can access individual recipes, leave comments, or save them to their Recipe Box, which users can view and sort their saves by category.

## Jump to

1. [Features](#features)
2. [Technologies](#technologies)
3. [Dev environment setup](#dev-environment-setup)
4. [Featured code](#featured-code)
5. [Future features](#future-features)

# Features

## Sign in or create an account

![session-creation-feature](https://nytnoshing-seeds.s3.us-west-1.amazonaws.com/README/login.png)

## Recipe home index, save individual recipes to Recipe Box

![home-feature](https://nytnoshing-seeds.s3.us-west-1.amazonaws.com/README/home.png)

## Search recipes

![search-feature](https://nytnoshing-seeds.s3.us-west-1.amazonaws.com/README/search.png)

## View and comment on individual recipes to the Recipe Box

![show-feature](https://nytnoshing-seeds.s3.us-west-1.amazonaws.com/README/recipe-show-page.png)
![comment-feature](https://nytnoshing-seeds.s3.us-west-1.amazonaws.com/README/comment.png)

## View all or categorized saved recipes in Recipe Box

![recipebox-feature](https://nytnoshing-seeds.s3.us-west-1.amazonaws.com/README/recipe-box.png)

# Technologies

NYT Noshing was built with:
- [React](https://react.dev/)
- [Redux](https://redux.js.org/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Ruby](https://www.ruby-lang.org/en/)
- [Rails](https://rubyonrails.org/)
- [CSS](https://www.w3schools.com/css/) / [SCSS](https://sass-lang.com/)
- [HTML](https://www.w3schools.com/html/)
- [Postgresql](https://www.postgresql.org/)
- [Amazon Web Services](https://aws.amazon.com/free/?trk=fce796e8-4ceb-48e0-9767-89f7873fac3d&sc_channel=ps&ef_id=CjwKCAjwysipBhBXEiwApJOcu8p3w5r5euoPeg7Ka_X0mSE1K-Q3lOsbIBAQo3Ra0WvfJkZ6ko25GhoCqwkQAvD_BwE:G:s&s_kwcid=AL!4422!3!432339156147!e!!g!!amazon%20web%20services!1644045032!68366401812)
- [Render](https://render.com/)

# Dev environment setup

This project uses npm and nide. To run NYT Noshing locally, install [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and run `npm start` for frontend and `rails s` for backend.

# Featured code

## Search: Ensuring query result integrity
```
const re = new RegExp("^[a-zA-Z]+$");

if (query.length > 0 && re.test(query)) {
  queriedRecipeNames = recipeNames.filter(recipe => {
    return (recipe.toLowerCase()).match(query.toLowerCase())
  })

  recipeResults = queriedRecipeNames.map(name => {
    return recipesArr.find(recipe => recipe.name === name)
  })
} else {
  queriedRecipeNames = []
}
```
**Challenge**

How might we ensure that we're only querying the store if users actually input a query in the search bar, and how might we protect the integrity of the search if the query involves unusual chracters?

**Solution**

Create conditional statements to check whether the query for the search result index (passed from the search bar component via parameters) is not empty and – using Regex – only contains A-Z capitalized and uncapitalized characters; if so, query store for appropriate results. If these conditions are not met, return an empty array for the query to trigger the "zero results" component treatment.

## Recipe Box: Generating recipe tag categories for navigation component
```
{recipeCategories.map((category) => {
  const taggedRecipes = savedRecipes
    .filter(sr => sr.recipe.tags.includes(category))
    .map(sr => sr.recipe)
  return (
    <li
      className="recipebox-nav-category-tab" key={Math.random()}
      onClick={() => setCategory(category)}>
        <RecipeBoxCategoryItem
          category={category}
          taggedRecipes={taggedRecipes}
        />
    </li>
  )
})}
```
**Challenge**

Efficiently, how might we render the Recipe Box navigation that pulls the cateogries of all recipes the user has saved and the number of recipes within each category, while allowing users to view recipes that fall under this category upon click?

**Solution**

1. Iterate through an array of all recipe categories and find the recipes that fall under this category that the user has saved, mapping to create an array of this subset.
2. Render a component representing a tab within the Recipe Box navigation component that takes in the category and the array of tagged recipes to calculate the number within each tab.
3. Create an event listener on the navigational tab that sets a local state variable to be the tab clicked, which filters the index to include only the recipes that call under the state variable.

# Future features

**Recipe category navigation**

Below the search bar, allow users to view recipe indexes based on categories (i.e. "easy" recipes, dinners, vegetarian, dessert).

**"Easy" recipe visual treatment**

Indicate that a recipe is easy to prepare based on a visual tag that appears on a recipe's individual tile in an index, both in on the home page, search, and Recipe Box features.
