# assumes @user instance variable has been defines, structures data that should be rendere for it

json.user do
    json.extract! @user, :id, :email
end
