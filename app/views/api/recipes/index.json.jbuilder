@recipes.each do |recipe|
    json.set! recipe.id do
        json.extract! recipe, :id, :name, :author, :blurb, :yield, :ingredients, :cook_time, :preparation, :tags
        json.photoUrl recipe.photo.attached? ? recipe.photo.url : nil
    end

end
