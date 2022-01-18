for i in $(cat < "list.txt"); do
    name=$(echo $i | tr -d " \t\n\r")
​
    cd $name.github.io
    git pull
    cd ..
done
