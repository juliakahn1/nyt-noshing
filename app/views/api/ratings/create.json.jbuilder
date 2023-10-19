json.rating do
  json.extract! @rating :id, :user_id, :recipe_id, :score
end
