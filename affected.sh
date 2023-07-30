#!/bin/sh

node_command="JSON.parse(require('fs').readFileSync(0, 'utf8')).packages.filter(pkg => pkg !== '//').join('\n')"

packages=$(npx turbo run build --filter=\[HEAD~1] --dry-run=json | node -pe "$node_command")

for package in $packages
do
  echo "Processing package: $package"
  # Do something with $package
done