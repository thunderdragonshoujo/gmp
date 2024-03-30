#!/bin/bash

function scpUp
{
	echo "uploading $FILE to www dir in my master EC2 instance as $BASE_FILE on $(/bin/date)"
	/usr/bin/scp -i "~/.ssh/r2m-aws-work.pem" $FILE ubuntu@ec2-52-43-247-37.us-west-2.compute.amazonaws.com:/home/ubuntu/www/w3images/$BASE_FILE
}

function ensureFQFN
{
	PAT="^.Users.rmcclure"
	if [[ ! "$FILE" =~ $PAT ]];then
		FQFN
else 
		FQFN
	fi
#echo $FILE
}

function FQFN
{
INPUT=$FILE

FILE=$( /usr/bin/basename $INPUT )
PATH=$( echo $INPUT | sed "s/$FILE//" )
PATH=$( cd $PATH && pwd && cd - > /dev/null 2>&1 )

#echo $PATH
#echo $FILE
#echo "$PATH/$FILE"
FILE="$PATH/$FILE"
echo "F: $FILE"
BASE_FILE=$(/usr/bin/basename $BASE_FILE)
echo "B: $BASE_FILE"
}

function main
{
	#ensureFQFN $*
	scpUp $*
}

FILE=$1
#BASE_FILE=$1
#echo Base File is $BASE_FILE
main $*
