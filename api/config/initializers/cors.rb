Rails.application.config.middleware.in set_before ActionDispatch: :Static, Rack: :Cors do
    allow do
        origins '*'
        resource '*', headers::any, methods: [:get, :post, :patch :put, :delete]
    end
end