# Install jupyter
pip3 install jupyter

DIR=$(pwd)

# Create required directory in case (optional)
mkdir -p $(jupyter --data-dir)/nbextensions
# Clone the repository
cd $(jupyter --data-dir)/nbextensions
git clone https://github.com/lambdalisue/jupyter-vim-binding vim_binding
# Activate the extension
jupyter nbextension enable vim_binding/vim_binding

# Reset settings
cd $DIR
mkdir -p ~/.jupyter/custom
mkdir -p ~/.jupyter/nbconfig
cp .jupyter/custom/custom.js ~/.jupyter/custom/
cp .jupyter/nbconfig/notebook.json ~/.jupyter/nbconfig
