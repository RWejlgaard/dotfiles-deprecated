colorscheme slate

" Configs
set nu
set ts=4

if has("syntax")
  syntax on
endif

map <F5> :call CompileRunGcc()<CR>
func! CompileRunGcc()
  exec "w"
  exec "!gcc % -o %<"
  exec "! ./%<"
endfunc

if filereadable("/etc/vim/vimrc.local")
  source /etc/vim/vimrc.local
endif

