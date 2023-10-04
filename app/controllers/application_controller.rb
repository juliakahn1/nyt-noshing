class ApplicationController < ActionController::API
    before_action :snake_case_params # transform from camelCase to snake_case

    private

    def snake_case_params
        params.deep_transform_keys!(&:underscore)
    end
end
