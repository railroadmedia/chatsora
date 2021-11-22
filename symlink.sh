#!/bin/bash

# Ask the user which app they want to Symlink with
echo Which application would you like to create a symlink for?
options=("drumeo" "pianote" "guitareo" "singeo")
select opt in "${options[@]}"
do
    case $opt in
        "drumeo")
            echo "Symlinking chatsora with Drumeo!"
            yarn install; yarn lib:watch & yarn link; cd /app/drumeo/laravel; yarn link @musora/chatsora; yarn watch;
            echo "Watching Drumeo For Changes..."
            ;;
        "pianote")
            echo "Symlinking chatsora with Pianote!"
            yarn install; yarn lib:watch & yarn link; cd /app/pianote; yarn link @musora/chatsora; yarn watch;
            echo "Watching Pianote For Changes..."
            ;;
        "guitareo")
            echo "Symlinking chatsora with Guitareo!"
            yarn install; yarn lib:watch & yarn link; cd /app/guitareo; yarn link @musora/chatsora; yarn watch;
            ;;
        "singeo")
            echo "Symlinking chatsora with Singeo!"
            yarn install; yarn lib:watch & yarn link; cd /app/singeo; yarn link @musora/chatsora; yarn watch;
            ;;
        *)
          echo "Invalid option $REPLY"
          break
          ;;
    esac
done

