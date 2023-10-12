@recipes.each do |recipe|
    json.set! recipe.id do
        json.extract! recipe, :id, :name, :author, :blurb, :yield, :ingredients, :cook_time, :preparation, :tags
    end
end
