#!/usr/bin/env sh

mode=$1

case $mode in
    "json") yaml2json resume.yml --pretty;;
    "serve") yaml2json resume.yml --pretty > resume.json && resume serve --theme elegant;;
    "html") yaml2json resume.yml --pretty > resume.json && resume export --format html --theme stackoverflow dist/resume.html;;
    "yml") cat resume.yml;;
    *) echo "Please utilize a valid command (json|serve|yml|html)";;
esac
