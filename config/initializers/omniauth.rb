OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, '24532857609-2ga71ovr32jocb7db6etgg232631mrf6.apps.googleusercontent.com', '3bfr7HIv9ZLgm3ECN1XILLdD', {client_options: {ssl: {ca_file: Rails.root.join("cacert.pem").to_s}}}
end
