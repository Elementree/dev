# -*- mode: ruby -*-
# vi: set ft=ruby :

# Modified laravel/homestead Vagrantfile

require 'json'
require 'yaml'

VAGRANTFILE_API_VERSION ||= "2"
confDir = $confDir ||= File.expand_path("vendor/laravel/homestead", File.dirname(__FILE__))

homesteadDir = File.expand_path("homestead", File.dirname(__FILE__))

homesteadYamlPath = File.expand_path("Homestead.yaml", homesteadDir)
homesteadJsonPath = File.expand_path("Homestead.json", homesteadDir)
afterScriptPath = File.expand_path("after.sh", homesteadDir)
customizationScriptPath = File.expand_path("user-customizations.sh", homesteadDir)
aliasesPath = File.expand_path("aliases", homesteadDir)

require File.expand_path(confDir + '/scripts/homestead.rb')

Vagrant.require_version '>= 1.9.0'

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
    if File.exist? aliasesPath then
        config.vm.provision "file", source: aliasesPath, destination: "/tmp/bash_aliases"
        config.vm.provision "shell" do |s|
            s.inline = "awk '{ sub(\"\r$\", \"\"); print }' /tmp/bash_aliases > /home/vagrant/.bash_aliases"
        end
    end

    if File.exist? homesteadYamlPath then
        settings = YAML::load(File.read(homesteadYamlPath))
    elsif File.exist? homesteadJsonPath then
        settings = JSON.parse(File.read(homesteadJsonPath))
    else
        abort "Homestead settings file not found in #{confDir}"
    end

    Homestead.configure(config, settings)

    if File.exist? afterScriptPath then
        config.vm.provision "shell", path: afterScriptPath, privileged: false, keep_color: true
    end

    if File.exist? customizationScriptPath then
        config.vm.provision "shell", path: customizationScriptPath, privileged: false, keep_color: true
    end

    if defined? VagrantPlugins::HostsUpdater
        config.hostsupdater.aliases = settings['sites'].map { |site| site['map'] }
    end
end
