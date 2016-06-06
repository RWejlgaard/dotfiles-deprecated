set nocompatible
filetype off

set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
Plugin 'VundleVim/Vundle.vim'

Plugin 'tpope/vim-fugitive'
Plugin 'git://git.wincent.com/command-t.git'
Plugin 'file:///home/gmarik/path/to/plugin'
Plugin 'rstacruz/sparkup', {'rtp': 'vim/'}
Plugin 'ascenator/L9'
Plugin 'scrooloose/nerdtree'
Plugin 'Lokaltog/vim-powerline'
Plugin 'marciomazza/vim-brogrammer-theme'
Plugin 'vim-scripts/AutoComplPop'
Plugin 'nathanaelkane/vim-indent-guides'
Plugin 'tpope/vim-surround'

call vundle#end()            " required
filetype plugin indent on    " required

syntax enable
set nu
set ts=4
set backspace=2
let g:Powerline_symbols = 'fancy'

nnoremap nt :NERDTreeToggle<CR>

colorscheme brogrammer
