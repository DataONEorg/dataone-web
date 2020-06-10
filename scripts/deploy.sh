#!/bin/bash

# Deploy script run during the Travis deploy lifecycle event
# The script has access to the following environment variables that are configured
# as secrets in Travis:
# DEPLOY_USER: username of the user to be logged in on the deployment host
# DEPLOY_HOST: the target host for deployment
# DEPLOY_DIRECTORY: the directory for files to be copied to on the deployment host

ssh -p22 $DEPLOY_USER@$DEPLOY_HOST "mkdir -p $DEPLOY_DIRECTORY" && \
    rsync -rav -e ssh ./docs/ $DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_DIRECTORY
