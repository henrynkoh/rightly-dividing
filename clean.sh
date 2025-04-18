#!/bin/bash
echo "Cleaning build artifacts..."
rm -rf .next
rm -rf node_modules/.cache
pkill -f "node.*next"
npm run dev 