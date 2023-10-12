json.extract! @recipe, :id, :name, :author, :blurb, :yield, :ingredients, :cook_time, :preparation, :tags
json.photoUrl @recipe.photo.attached? ? @recipe.photo.url : nil
