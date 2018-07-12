#!/bin/sh

set -eu

project=${1:-grocery_list}

browser-sync start \
    --server \
    --host '0.0.0.0' \
    --watch \
    --files "${project}"
