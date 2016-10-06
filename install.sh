#!/bin/bash
cp bashrc ~/.bashrc
cp vimrc ~/.vimrc
cp nethackrc ~/.nethackrc
cp -a vim ~/.vim
cp tmux.conf ~/.tmux.conf 
sh vundleinstall.sh
#exec spotifyinstall.sh
#exec postspotifyinstall.sh
echo "All Done!"
