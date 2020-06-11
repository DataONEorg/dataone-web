#!/bin/bash

# Deploy script run during the Travis deploy lifecycle event
# The script has access to the following environment variables that are configured
# as secrets in Travis:
# DEPLOY_USER: username of the user to be logged in on the deployment host
# DEPLOY_HOST: the target host for deployment
# DEPLOY_DIRECTORY: the directory for files to be copied to on the deployment host
# PUBLISH_DIRECTORY: the directory where final files are published after they have been deployed to the host

# Note that the rsync moves the files to the DEPLOY_DIRECTORY, but that in a separate step we move the files
# into the PUBLISH_DIRECTORY to ensure file consistency

ssh -p22 $DEPLOY_USER@$DEPLOY_HOST "mkdir -p $DEPLOY_DIRECTORY" && \
    rsync -rav -e ssh ./docs/ $DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_DIRECTORY && \
    ssh -p22 $DEPLOY_USER@$DEPLOY_HOST "if [ -f ${PUBLISH_DIRECTORY}_old ]; then rm -r ${PUBLISH_DIRECTORY}_old; fi; if [ -f ${PUBLISH_DIRECTORY} ]; then mv ${PUBLISH_DIRECTORY} ${PUBLISH_DIRECTORY}_old; fi; mv ${DEPLOY_DIRECTORY} ${PUBLISH_DIRECTORY}; chgrp -R web-dev ${PUBLISH_DIRECTORY}; chmod -R g+rwx ${PUBLISH_DIRECTORY}"
