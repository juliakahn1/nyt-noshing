@recipes.each do |recipe|
    json.set! recipe.id do
        json.extract! recipe, :id, :name, :author, :blurb, :ingredients, :cook_time, :preparation, :tags
    end
end