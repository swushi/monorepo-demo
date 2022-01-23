#!/bin/bash

curr_dir=$(pwd)
temp_dir=.$1
dir=$1

# delete temp staging directory 
trap "catch" EXIT
catch() {
  cd $curr_dir
  rm -rf $dir
}

mkdir $dir
cd $dir

npm init -y

mkdir apps
cd apps
expo init --no-install

cd $temp_dir
npm i -D turbo
npm i