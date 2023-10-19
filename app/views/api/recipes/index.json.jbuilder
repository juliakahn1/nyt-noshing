
@recipes.each do |recipe|
  json.set! recipe.id do
    json.extract! recipe, :id, :name, :author, :blurb, :yield, :ingredients, :cook_time, :preparation, :tags
    json.avg_rating recipe.average_rating
    json.photoUrl recipe.photo.attached? ? recipe.photo.url : nil
  end
end
