# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH="/Users/Rasmus.Wejlgaard/.oh-my-zsh"

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="robbyrussell"

alias top=htop
alias get="brew install"
alias search="brew search"
alias vim=vim
alias 'ls'="ls -1GAF"
alias 'cat'="bat"
alias ping="prettyping --nolegend"

alias k="kubectl"
alias kc="kubectl config use-context"
alias kp="kubectl get pods -A"
alias jupiter_auth="aws-azure-login --profile jupiter-auth --mode=gui"

export PATH="$PATH:/Users/Rasmus.Wejlgaard/Library/Python/3.7/bin"
export PATH="$PATH:/Users/Rasmus.Wejlgaard/homebrew/bin"
export PATH="$PATH:/Users/Rasmus.Wejlgaard/bin"
export PATH="/usr/local/bin:$PATH"
export HOMEBREW_CASK_OPTS="--appdir=/Users/Rasmus.Wejlgaard/apps"
export HOMEBREW_TEMP="/Users/Rasmus.Wejlgaard/brewtemp"

ZSH_THEME="powerlevel9k/powerlevel9k"

# powerlevel9k config
POWERLEVEL9K_MODE='nerdfont-complete'
POWERLEVEL9K_PROMPT_ON_NEWLINE=false
POWERLEVEL9K_LEFT_PROMPT_ELEMENTS=(dir dir_writable vcs)
POWERLEVEL9K_RIGHT_PROMPT_ELEMENTS=(kubecontext virtualenv)
DEFAULT_USER="rasmus.wejlgaard"
# dir customization
POWERLEVEL9K_SHORTEN_DIR_LENGTH=1
POWERLEVEL9K_SHORTEN_DELIMITER=""
POWERLEVEL9K_SHORTEN_STRATEGY="truncate_from_right"
POWERLEVEL9K_DIR_HOME_BACKGROUND='067'
POWERLEVEL9K_DIR_HOME_SUBFOLDER_BACKGROUND='067'
POWERLEVEL9K_DIR_ETC_BACKGROUND='067'
POWERLEVEL9K_DIR_DEFAULT_BACKGROUND='067'
# status customization
POWERLEVEL9K_STATUS_OK_BACKGROUND='240'
POWERLEVEL9K_STATUS_ERROR_BACKGROUND='240'

function update-ca-certificates () {
	security find-certificate -a -p /Library/Keychains/System.keychain > ~/.ca-bundle.crt
	security find-certificate -a -p /System/Library/Keychains/SystemRootCertificates.keychain >> ~/.ca-bundle.crt
}

update-ca-certificates

export REQUESTS_CA_BUNDLE=/Users/Rasmus.Wejlgaard/.ca-bundle.crt
export NODE_EXTRA_CA_CERTS=/Users/Rasmus.Wejlgaard/.ca-bundle.crt

# Which plugins would you like to load?
# Standard plugins can be found in ~/.oh-my-zsh/plugins/*
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(
		osx
		git
		iterm2
		aws
		kubectl
		fzf
		pip
		zsh-autosuggestions
		zsh-completions
		zsh-history-substring-search
		zsh-syntax-highlighting
		)

source $ZSH/oh-my-zsh.sh

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"

alias top=gotop
