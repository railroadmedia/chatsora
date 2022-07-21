#!/bin/bash

# Ask the user which app they want to Symlink with
echo Which application would you like to create a symlink for?
options=("drumeo" "pianote" "guitareo" "MWP")
select opt in "${options[@]}"
do
    case $opt in
        "drumeo")
            echo "Symlinking Chatsora with Drumeo!"
            npm install; npm lib:watch & npm link; cd /app/drumeo/laravel; npm link @musora/chatsora; npm watch;
            echo "Watching Drumeo For Changes..."
            ;;
        "pianote")
            echo "Symlinking Chatsora with Pianote!"
            npm install; npm lib:watch & npm link; cd /app/pianote; npm link @musora/chatsora; npm watch;
            echo "Watching Pianote For Changes..."
            ;;
        "guitareo")
            echo "Symlinking Chatsora with Guitareo!"
            npm install; npm lib:watch & npm link; cd /app/guitareo; npm link @musora/chatsora; npm watch;
            ;;
        "MWP")
            echo "Symlinking Chatsora with Musora Web Platform!"
            npm install; npm lib:watch & npm link; cd /app/musora-web-platform; npm link @musora/chatsora; npm platform-watch;
            ;;
        *)
          echo "Invalid option $REPLY"
          break
          ;;
    esac
done

