# jupyter-vim
Personal Jupyter vim plugin setup script based on https://github.com/lambdalisue/jupyter-vim-binding

### Usage

```sh
source install.sh
source clean.sh  # clean up current folder
```

### Details

#### Install vim-binding

```sh
# Create required directory in case (optional)
mkdir -p $(jupyter --data-dir)/nbextensions
# Clone the repository
cd $(jupyter --data-dir)/nbextensions
git clone https://github.com/lambdalisue/jupyter-vim-binding vim_binding
# Activate the extension
jupyter nbextension enable vim_binding/vim_binding
```

#### Copy customizations

```
├── custom
│  └── custom.js (vim bindings)
├── jupyter_notebook_config.json (includes hashed password)
└── nbconfig
   └── notebook.json (cmd+shift+r shortcut)
```
