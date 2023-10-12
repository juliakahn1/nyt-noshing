@notes.each do |note|
    json.set! note.id do
        json.extract! note, :id, :body, :name, :user_id, :recipe_id
    end
end
