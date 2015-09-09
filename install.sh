#!/bin/bash
cp bashrc ~/.bashrc
cp vimrc ~/.vimrc
cp fan ~/.fan
exec spotifyinstall.sh
exec postspotifyinstall.sh
echo "All Done!"
