source /home/ubuntu/.profile
echo 'run application_start.sh: ' >> /home/ubuntu/tomi-runners/deploy.log
# nodejs-app is the same name as stored in pm2 process
echo 'pm2 restart 0 ' >> /home/ubuntu/tomi-runners/deploy.log
npm run build
pm2 restart 1 >> /home/ubuntu/tomi-runners/deploy.log