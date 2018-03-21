#!/bin/bash

#read -p "Do you want to run post script? " -n 1 -r
#echo
#if [[ ! $REPLY =~ ^[Yy]$ ]]
#then
#	exit
#fi

if [[ ! -f /usr/bin/tm ]]
then
	read -p "Install Tmux Manager? " -n 1 -r
	echo
	if [[ $REPLY =~ ^[Yy]$ ]]
	then
		echo "Copying tm"
		sudo cp ./tm /usr/bin/tm
		sudo chmod +x /usr/bin/tm
	fi
else
	echo "Tmux Manager already installed"
fi

read -p "Install packages? " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
	PACKAGES="tmux git fish vim python-pip"
	DISTRO=$( cat /etc/issue | tr [:upper:] [:lower:] | grep -Poi '(arch|debian|ubuntu)')
	if [[ $DISTRO == "arch" ]]
	then
		echo Syncing Repos
		sudo pacman -Syy
		echo "Installing Packages"
		sudo pacman -S $PACKAGES
	elif [[ $DISTRO == "debian" ]]
	then
		echo "Syncing Repos"
		sudo apt-get update
		echo "Installing Packages"
		sudo apt-get install $PACKAGES
	elif [[ $DISTRO == "ubuntu" ]]
	then
		echo "Syncing Repos"
		sudo apt-get update
		echo "Installing Packages"
		sudo apt-get install $PACKAGES
	fi

	echo "Installing PyLint"
	sudo pip install pylint

fi
