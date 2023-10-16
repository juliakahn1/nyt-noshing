@saved_recipes.each do |saved_recipe|
    json.set! saved_recipe.id do
        json.partial! 'api/saved_recipes/saved_recipe', saved_recipe: saved_recipe
    end
end
