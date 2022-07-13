openedx-slack-invite
####################

This app used to be a slack invite app based on
https://github.com/outsideris/slack-invite-automation

We've now replaced it with a simple redirect app to the slack invite link.

We're still keeping the app around incase the old heroku URL was hardcoded in
more places. If it's been more than a year since July 2022 this repo and the
corresponding herokuapp can both be archived.

See https://github.com/openedx/tcril-engineering/issues/346 for more info.

Getting Started
***************

Local Development
=================

.. code::

   git clone git@github.com:openedx/openedx-slack-invite
   cd openedx-slack-invite
   yarn install  # Install the dependencies
   yarn run start  # Start the server.

The entire app is in the app.js file so edit that if you need to change
anything.

Deploying to Heroku
===================

One Time Setup
--------------

.. code::

   heroku config:set REDIRECT_URL="path/to/slack/invite/url"

For Each Deploy
---------------

.. code::

   git push heroku master
   heroku logs -a openedx-slack-invite -t # tail the logs
