json.recipe do
    json.extract! @recipe, :id, :name, :author, :blurb, :ingredients, :cook_time, :preparation, :image_url, :tags
end
