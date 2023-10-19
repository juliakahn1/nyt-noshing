json.recipe do
    json.extract! @recipe, :id, :name, :author, :blurb, :yield, :ingredients, :cook_time, :preparation, :tags
    json.avg_rating @recipe.average_rating
    json.num_ratings @recipe.num_ratings
    json.photoUrl @recipe.photo.attached? ? @recipe.photo.url : nil
end

notes = @recipe.notes

json.notes do
    notes.each do |note|
        json.set! note.id do
            json.extract! note, :id, :user_id, :recipe_id, :name, :body, :created_at
        end
    end
end
