# assumes @user instance variable has been defines, structures data that should be rendere for it

json.user do
    json.extract! @user, :id, :email
end

# pull all of user's saved recipes

saved_recipes = @user.saved_recipes

json.saved_recipes do
    saved_recipes.each do |recipe|
        json.set! recipe.id do
            json.extract! recipe, :id, :user_id, :recipe_id, :cooked
        end
    end

end
