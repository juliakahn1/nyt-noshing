json.recipes do
    @recipes.each do |recipe|
        json.set! recipe.id do
            json.extract! recipe, :id, :name, :author, :blurb, :ingredients, :cook_time, :preparation, :image_url, :tags
        end
    end
end
