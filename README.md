Easy installer
==============

An easy way to install any app from a repository

### Requirements
- [git](https://git-scm.com/)

### Installation
```bash
sudo npm install -g easyinstaller
```

### How it works
Just create a script file named `eifile.sh` eith the app setup instructions in the root of your app directory and thats all

To install any app just pass the repository url and the path of the folder you want to install it
```bash
easyinstaller [REPOSITORY-PATH] [FOLDER-PATH]
```

### Example

Here one example of a repository with an `eifile.sh`

[`Guppy seed`](https://github.com/dsilva2401/Guppy)

How to install this repo
```bash
easyinstaller "https://github.com/dsilva2401/Guppy.git" myapp
```
