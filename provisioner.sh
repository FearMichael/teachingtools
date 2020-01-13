#!/usr/bin/env bash
apt-get update

#install any binaries for compiling from source
apt-get install -y build-essential

#install git-scm
apt-get install -y git

#set timezone
sudo timedatectl set-timezone America/New_York

#install node
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
apt-get install -y nodejs

