#!/bin/bash

CURPATH=`pwd`

AEGIS_UPDATE_SITE=http://update.aegis.aliyun.com/download
AEGIS_UPDATE_SITE2=http://update2.aegis.aliyun.com/download
AEGIS_UPDATE_SITE3=http://update3.aegis.aliyun.com/download

download_file()
{
    wget "${AEGIS_UPDATE_SITE}""$1" -O "$2" -t 1
    if [ $? != 0 ]; then
        rm -rf "$2"
        wget "${AEGIS_UPDATE_SITE2}""$1" -O "$2" -t 1
        if [ $? != 0 ]; then
			rm -rf "$2"
			wget "${AEGIS_UPDATE_SITE3}""$1" -O "$2" -t 1
			if [ $? != 0 ]; then
				rm -rf "$2"
				echo "download file error" 1>&2
				exit 1
			fi
		fi
    fi
}

install()
{
	if [ -n "$1" ]; then
		echo "downloading install package..."
		download_file "/public_cloud/linux64/AliAqsInstall_64" "AliAqsInstall_64"

		echo "downloading package checksum..."
		download_file "/public_cloud/linux64/AliAqsInstall_64.md5" "AliAqsInstall_64.md5"


		echo "checking package file..."
		md5_check=`md5sum AliAqsInstall_64 | awk '{print $1}' ` 
		md5_server=`head -1 AliAqsInstall_64.md5 | awk '{print $1}'`
		if [ "$md5_check"x = "$md5_server"x ]
		then
			echo "check package success"

			cd ${CURPATH}
			chmod +x AliAqsInstall_64
			./AliAqsInstall_64 -k="$1"
		else
			echo "checksum error";
		fi
		
	else
		echo "param nil";
	fi
}

install "$1"
rm -f AliAqsInstall_64.md5
rm -f AliAqsInstall_64

exit 0