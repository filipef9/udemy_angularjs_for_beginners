#!/bin/sh

set -eu

browser-sync start \
    --server \
    --host '0.0.0.0' \
    --watch \
    --files 'app'
