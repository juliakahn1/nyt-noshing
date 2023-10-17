@saved_recipes.each do |saved_recipe|
    json.set! saved_recipe.id do
        json.extract! saved_recipe, :id, :user_id, :recipe_id, :cooked
        json.recipe do
            json.partial! 'api/recipes/recipe', recipe: saved_recipe.recipe
        end
    end
end
