class User < ApplicationRecord
    has_secure_password

    #validations here
    #validation for format of username
    #can not accept email or /hello-world/ it can not accept slashes in front of
     
end