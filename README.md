# DEV

Development environment helpers for windows.


## Installation

Assuming D:\ is your dev drive. Run console command using a Bash console within ConEmu.


1. Downloads:

 - [Git](https://git-scm.com/downloads)
 - [ConEmu](https://conemu.github.io/en/Downloads.html)
 - [PHP](http://windows.php.net/download/)
 - [VirtualBox]()
 - [Vagrant](https://www.vagrantup.com/downloads.html)
 - [VSCode](https://code.visualstudio.com/download)
 - [NodeJS](https://nodejs.org/en/download/)
 - [Composer](https://getcomposer.org/download/)

2. Install in the folloing order: Git, NodeJS, ConEmu, VirtualBox, Vagrant, VSCode

3. Extract php to D:\php, and add this folder to your PATH.

4. Install Composer

5. Generate an SSH keypair
```sh
ssh-keygen
# follow the prompts
```

6. Add your SSH public key to your Github account

7. Create a `D:\dev` folder
```sh
cd /d
# you are in /d
mkdir dev
```
8. Clone this repo into `D:\dev\dev`
```sh
cd dev
# you are in /d/dev
git clone git@github.com:elementree/dev
```

9. Install packages for this repo and make it global
```sh
cd dev
# you are in /d/dev/dev
npm install
composer install
npm link
```

10. Ensure `dev` is installed globally (requires console restart)
```sh
dev help
```

11. Install `dev` to setup your required user files (.bash_profile, .gitconfig)
```sh
dev install
```

13. Import ComEmu settings by importing `D:\dev\dev\home\user\ConEmu.xml`. Restart the console and you should see a `DEV` message and start in the folder `D:\dev`

12. Setup your `Homestead.yaml`

```sh
devhomestead
```

 - add the required folder mappings eg. `map: D:\dev\testiclats to: /home/vagrant/testiclats`
 - add the required nginx site mappings, eg. `map: test.dev to: /home/vagrant/testiclats/some-laravel-site/public`
 - add the required databases

13. Setup your hosts

```sh
devhosts
```
 - add required hosts, eg: '192.168.10.19    test.dev'

14. Start up your VM aka `/d/dev/dev/vagrant up`
```
devm up
```


## Aliases

```sh

alias gl='git log --oneline --all --graph --decorate --date=short'
alias glp='git log --pretty=format:"%C(yellow)%h%m %ad%Cred%d %Creset%s%Cgreen [%cn]" --decorate --date=short'
alias gldate='git log --graph --pretty=format:"%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset" --abbrev-commit'

alias gs='git status '
alias gaa='git add --all'
alias gc='git commit -m '
alias gpl='git pull '
alias gps='git push '

alias devhosts='vim /c/Windows/System32/drivers/etc/hosts'
alias devhomestead='vim $DEV_PATH/homestead/Homestead.yaml'

function devm() {
    ( cd $DEV_PATH && vagrant $* )
}
```

## VSCode

User settings:

```js
{
    "emmet.syntaxProfiles": {
        "blade": "html"
    },
    "window.zoomLevel": 0,
    "editor.fontSize": 16,
    "workbench.colorTheme": "Monokai",
    "workbench.iconTheme": "vs-seti",
    "files.autoSave": "off",
    "emmet.triggerExpansionOnTab": true,
    "extensions.ignoreRecommendations": true,
    "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
    "terminal.integrated.shellArgs.windows": ["-l"],
    "git.enableSmartCommit": true,
    "git.autofetch": true,
    "explorer.confirmDragAndDrop": false,
    "cSpell.language": "en-GB",
    "cSpell.userWords": [
        "cloudinary",
        "cultivar",
        "cultivars",
    ]
}
```

Keybindings:

```js
[
    {
        "key": "ctrl+shift+d",
        "command": "editor.action.copyLinesDownAction"
    },
    {
        "key": "ctrl+up",
        "command": "editor.action.moveLinesUpAction"
    },
    {
        "key": "ctrl+down",
        "command": "editor.action.moveLinesDownAction"
    },
    {
        "key": "ctrl+alt+.",
        "command": "workbench.action.terminal.focusNext"
    }
]
```


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


## Configure Homestead

Edit your Homestead config
```
devhomestead
```

### Default Ports

 - SSH: 2222 → Forwards To 22
 - ngrok UI: 4040 → Forwards To 4040
 - HTTP: 8000 → Forwards To 80
 - HTTPS: 44300 → Forwards To 443
 - MySQL: 33060 → Forwards To 3306
 - PostgreSQL: 54320 → Forwards To 5432
 - Mailhog: 8025 → Forwards To 8025


### Sites

```
sites:
    - map: symfony2.test
      to: /home/vagrant/code/Symfony/web
      type: symfony2
      schedule: true
      php: "7.2"
      params:
          - key: FOO
            value: BAR
```

Types: [`apache`, `laravel`, `proxy`, `silverstripe`, `statamic`,  `symfony2`, `symfony4`, `spa`]


## Features

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
