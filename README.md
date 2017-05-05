# DEV

My personal development environment helpers.


## Update NodeJS and NPM on Windows

See [npm-windows-upgrade](https://github.com/felixrieseberg/npm-windows-upgrade)

First, ensure that you can execute scripts on your system by running the following command from an elevated PowerShell. To run PowerShell as Administrator, click Start, search for PowerShell, right-click PowerShell and select Run as Administrator.

```
Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force
```

Then, to install and use this upgrader tool, run (also from an elevated PowerShell or cmd.exe):

```
npm install --global --production npm-windows-upgrade
npm-windows-upgrade
```

Want to just install the latest version? Sure:

```
npm-windows-upgrade --npm-version latest
```

The tool will show you a list of all the published and available versions of npm (including pre-release and beta versions). Choose the one you want to install and let it do its thing!




# Features

  - Setup directory structure
  - Install portable executables
    - Heidi
    - Keypass
    - ConEmu
  - Password, SSH key manager?
  - Provision user files
      - .homestead
      - .bash_profile
      - .vagrant
      - .gitprofile
  - Install global packages
      - atom: apm packages, user settings
