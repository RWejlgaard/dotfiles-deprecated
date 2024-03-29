#!/usr/bin/env bash
export PATH=$PATH:/usr/local/bin
[ "$TMUX" == "" ] || exit 0

create_default_session()
{
    tmux has-session -t _default 2>/dev/null || tmux new-session -s _default -d
}

get_sessions()
{
    tmux list-sessions -F "#S" 2>/dev/null
}

_kill_session()
{
    options=("[main menu]" "[cancel]")
    while read -r line; do
        [[ -n "$line" ]] && options+=("$line")
    done <<< "$(get_sessions)"

    # PS3="session to kill: "
    echo ""
    echo "kill-session"
    echo "---------------------"

    select opt in "${options[@]}"
    do
        case "$opt" in
            "[main menu]")
                return
                ;;
            "[cancel]")
                exit
                ;;
            *)
                [[ -z "$opt" ]] && continue
                read -e -p "kill $opt? [y/n] "
                if [[ $REPLY =~ ^[Yy]$ ]]; then
                    tmux kill-session -t "$opt" 2>/dev/null
                    if [ "$?" -eq 0 ]; then
                        # relaunch _kill_session
                        return 1
                    else
                        continue
                    fi
                else
                    continue
                fi
                ;;
        esac
    done
}

kill_session()
{
    _kill_session
    while [ "$?" -ne 0 ]; do
        _kill_session
    done
}

_main_menu()
{
    # options=("[new session]" "[kill session]" "[shell]")
    options=("[new session]" "[kill session]")
    while read -r line; do
        [[ -n "$line" ]] && options+=("$line")
    done <<< "$(get_sessions)"

    echo "tmux sessions:"
    echo "---------------------"
    PS3="option: "

    select opt in "${options[@]}"
    do
        case "$opt" in
            "[new session]")
                read -e -p "new session name: " SESSION_NAME
                tmux new -s "$SESSION_NAME" 2> /dev/null
                [ "$?" -eq 0 ] || tmux new
                return
                ;;
            "[kill session]")
                kill_session
                # relaunch _main_menu
                return 1
                ;;
            *)
                [[ -z "$opt" ]] && continue
                tmux attach-session -t "$opt" 2> /dev/null
                if [ "$?" -eq 0 ]; then
                    exit 
                else
                    continue
                fi
                ;;
        esac
    done
}

main_menu()
{
    _main_menu
    while [ "$?" -ne 0 ]; do
	echo ""
        _main_menu
    done
}

main_menu
