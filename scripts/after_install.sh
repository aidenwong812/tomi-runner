#!/bin/bash
source /home/ubuntu/.profile
echo 'run after_install.sh: ' >> /home/ubuntu/tomi-runners/deploy.log

echo 'cd /home/ubuntu/tomi-runners' >> /home/ubuntu/tomi-runners/deploy.log
cd /home/ubuntu/tomi-runners >> /home/ubuntu/tomi-runners/deploy.log

echo 'npm install' >> /home/ubuntu/tomi-runners/deploy.log 
npm install >> /home/ubuntu/tomi-runners/deploy.log

echo 'npm run build' >> /home/ubuntu/tomi-runners/deploy.log
npm run build >> /home/ubuntu/tomi-runners/deploy.log