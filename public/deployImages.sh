#!/bin/bash
declare -a images
images=(*.JPG)
for file in ${images[@]}
do
echo $file
./scp.sh $file
done
