#!/bin/bash

# Create the deployment package
echo "📦 Packaging application..."
zulia_package_tmp="$(mktemp -t zulia-deploy)"
trap 'rm -f "$zulia_package_tmp"' EXIT

tar -czf "$zulia_package_tmp" \
  --exclude=node_modules \
  --exclude=.git \
  --exclude=dist \
  --exclude=.astro \
  --exclude=tmp \
  --exclude=deploy_package.tar.gz \
  .

mv "$zulia_package_tmp" deploy_package.tar.gz
trap - EXIT

# Check if expect is installed
if ! command -v expect &> /dev/null; then
    echo "❌ 'expect' is not installed. Please install it to run the deployment script."
    echo "   Mac: brew install expect"
    echo "   Linux: sudo apt-get install expect"
    exit 1
fi

# Run the expect script
echo "🚀 Deploying to VPS..."
expect deploy.exp

echo "✅ Deployment script finished."
