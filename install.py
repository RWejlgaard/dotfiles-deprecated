"""
install.py is used to process the files.ini file in the directory
and copy and install the dotfiles
"""
import os
from shutil import copyfile

__folders__ = [
    "~/.config",
    "~/.config/nvim",
    "~/.fonts"
]

__files__ = [
    ("vimrc", "~/.vimrc"),
    ("vimrc", "~/.config/nvim/init.vim"),
    ("config.fish", "~/.config/fish/config.fish"),
    ("tmux.conf", "~/.tmux.conf"),
    ("monaco.ttf", "~/.fonts/monaco.ttf")
]

def install():
    """
    install() is the main function in the script
    it processes the files.ini file
    returns: void
    """

    for folder in __folders__:
        print("Creating folder: {}".format(folder))
        os.makedirs(os.path.expanduser(folder), exist_ok=True)

    # copy files as directed in files section
    for key, value in __files__:
        print("Copying {} to {}".format(key, os.path.expanduser(value)))
        copyfile(key, os.path.expanduser(value))

if __name__ == "__main__":
    install()
    print("Done")
