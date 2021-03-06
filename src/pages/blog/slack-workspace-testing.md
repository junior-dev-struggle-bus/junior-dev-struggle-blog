---
title: Local testing on your own Slack workspace
date: "2019-08-15"
description: Useful steps and tools for starting your own Slack workspace to test things like webhooks and slash commands.
author: Brett Hurst
published: true
tags: ['slack', 'ngrok', 'webhooks', 'slash commands']
---

This is a guide to setting up your own Slack workspace for testing, representing the first part of the [LocalTestStruggleApp](https://github.com/bhurstGH/LocalTestStruggleApp) repository. It's purpose is for those that wish to contribute to the [JDSB Struggle Buddy Slack project](https://github.com/junior-dev-struggle-bus/struggle-slack-app), but also contains basic information that would carry over to using these tools in general.

The above repository will eventually expand to include using serverless Netlify functions in conjunction with Slack, just as Struggle Buddy itself functions. Those additions will most likely appear as a separate a blog post when they are ready.

While this post can be treated as a standalone guide, it may assume you have cloned a local copy of the [LocalTestStruggleApp](https://github.com/bhurstGH/LocalTestStruggleApp) in order to access demonstrative assets, such as the `server.js`.

## Contents

- [Create your own Slack workspace](#create-your-own-slack-workspace)
- [Create your own Slack App](#create-your-own-slack-app)
    - [Create your app](#create-your-app)
    - [Points of interest](#points-of-interest)
- [Install and launch ngrok](#install-and-launch-ngrok)
    - [Ngrok download and setup](#ngrok-download-and-setup)
    - [Using Ngrok](#using-ngrok)
    - [Notes on localhost and ngrok URLs](#notes-on-localhost-and-ngrok-urls)
- [Add a slash command to your Slack app](#add-a-slash-command-to-your-slack-app)

<hr>

## Create your own Slack workspace
  
You should already have a Slack account and be signed in at https://slack.com.

Navigate to https://slack.com/create and enter the email address that you wish to use for this workspace. You'll be asked for a confirmation number that you should receieve via email.

After entering the confirmation number, you will be asked to name your team. This will be the initial name of both your Slack workspace and the URL, e.g. "My Team" and `myteam.slack.com`. The next step requests a project that your team is working on. This will be designated as a default channel in your workspace and can be whatever you like. If you enter "My StruggleApp function", `#my-struggleapp-function` channel will be created.

If you're working solo or not sure who you're going to invite yet, you can skip the step for inviting team mates.

You should now be looking at your very own workspace in the Slack browser app. If you use the Slack desktop app and wish to add the workspace there:

1. Click the + plus sign button on the far left side of the app, or choose "Sign in to another workspace" from the sidebar dropdown menu or the `Window` drop down in the menu bar.
1. No matter which method you chose, you will be directed to https://slack.com/ssb/add -- enter your workspace URL as prompted.
1. If you aren't logged into your workspace on Slack's website, you will be asked for the email address and password tied to this workspace.
1. You should then be prompted to open the workspace in the Slack desktop application.

A quick note on adding the workspace to your Slack mobile app:
You should be able to access your workspaces on your mobile app by tapping the icon that looks 4 squares in a 2x2 formation. The onscreen instructions should make it fairly obvious how to add the workspace from there.

Slack will prompt you to finish signing up. Here are some quick steps to handle that:

1. Set your name and password, and check whether or not to allow Slack to email you. Click next.
1. Change your workspace name and Slack URL to something else if you'd like. Click next.
1. Provide the email addresses of people you would like to invite, or generate an invite link. This is optional, click finish when you're done.

Your workspace is all set! Slackbot will introduce itself and you can poke around and play with whatever you like.

## Create your own Slack App

Navigate to https://api.slack.com. This is your first stop for familiarizing yourself with the Slack api and how to work with apps and bots. Peruse the wealth of information at your leisure, but for now, let's create an app.

### Create your app

Click "Your Apps" in the upper right corner, right next to "Documentation" and "Tutorials". Alternatively, navigate directly to https://api.slack.com/apps.

Click "Create new app" and a dialog will appear asking for a name and a workspace. Try naming your app "LocalTestStruggleApp" and selecting the workspace you created earlier. Keep in mind that while you can rename an app, it is forever tied to the workspace you choose here. Click "Create app" to continue.

You should now be looking at your app's Basic Information page. Note that while your app exists, it is not yet installed to your workspace and has no functionality. Also take note of the App Credentials section. You'll return to these later.

For now, click on "Add features and functionality" and then "Incoming Webhooks." Webhooks are one way for an outside application or request to send a message to your Slack workspace. Click the switch to activate incoming webhooks from "off" to "on" and then click "Add New Webhook to Workspace."

You will then be prompted to choose a location for the webhook to post to. Since Slack creates #general in your workspace by default, choose that from the drop down menu for the sake of simplicity and click "Install." This will generate a new webhook URL and provide you with a sample curl request. Copy and paste the curl request into your terminal and your app will send the message "Hello, World!" to your #general channel.

Before doing anything else with your new Slack app, move on to the next section where you'll install a helpful local testing tool.

#### Points of interest:

- API References: Explore the [Web](https://api.slack.com/web), [Events](https://api.slack.com/events-api), [Conversations](https://api.slack.com/conversations-api), and [Real Time Messaging](https://api.slack.com/rtm) APIs.

- [Block Kit Builder](https://api.slack.com/tools/block-kit-builder): Learn more about constructing Slack messages with their Block Kit and good ol' JSON.

- [Slack Developer Tools](https://devtools.builtbyslack.com/): Special shout out to SDT. Install this in your workspace and have the Slack API docs at your fingertips with the `/sdt` command.

- [Tools built by Slack](https://api.slack.com/tools): Check out tools like [Bolt](https://github.com/slackapi/bolt), the official framework for building Slack apps quickly.

## Install and launch ngrok

Ngrok is a useful tool for exposing your local webserver to the internet.

### Ngrok download and setup

Navigate to https://ngrok.com/ and sign up for free. Using your GitHub account eases this process along.

After being redirected to https://dashboard.ngrok.com/get-started, follow the installation and setup steps. On Mac, you could take this approach to installation:

Download the appropriate version of ngrok. From your terminal, enter this command: `unzip path/to/downloaded/nkrok.zip -d /usr/local/bin`. This uses the `-d` switch to unzip the contents of your ngrok download to the specified folder. In this case, to `/usr/local/bin`. This will allow the `ngrok` command to be used in anywhere on your system.

Read the top answer on [this stackexchange question](https://unix.stackexchange.com/questions/8656/usr-bin-vs-usr-local-bin-on-linux) for why you would want to put it here.

You could also just keep it in any folder of your choice or install it through a package manager like Homebrew.

The third step on the getting started page provides the authtoken command for you to paste in terminal, but you can retrieve your token at any time by clicking on "Auth" in the sidebar.

### Using ngrok

You should now be able to type `ngrok http 3000` to open up a tunnel to your localhost on port 3000. Ngrok will expose your local server with a randomly generated URL in the form of `[randomstuff].ngrok.io`.

If you try to navigate to this URL when not running a local server, you will redirect to an error page. You can observe the bad requests from the terminal window that is running ngrok or from http://localhost:4040/inspect/http.

To actually see ngrok in action, run one of your local projects and initiate an `ngrok http [port number your run your project on]` and navigate to the URL ngrok provides. If you don't have a project handy but you've cloned this repository, this repository provides a simple Express/Node server that runs on port 3000. Run `node server.js` from this repository's directory in one terminal window, and `ngrok http 3000` in another. You should see the same result on `localhost:3000` as you do when you access the ngrok fowarding URL.

_Note: you can stop your node and ngrok servers from running with `ctrl+C`._

To really appreciate the magic that is happening here, grab your mobile device or another computer and navigate to the ngrok URL. You will see your local project running there. This demonstrates that your local server is open to anyone your share the ngrok URL with.

### Notes on localhost and ngrok URLs

With a free account, ngrok will generate a new random URL everytime you start it up. Keep in mind these aren't permanant and that any hooks or other outside references to the URL will have to be updated to the new URL if you restart ngrok.

However, the URL will persist as long as you keep ngrok running. Feel free to start and stop your local server as many times as you like. Using the earlier example, run ngrok and navigate to the URL to be redirected to the expected error page. Next, run the server.js from this repository and reload the ngrok URL to see that it is now forwarding your local project. If you stop the Node server, the ngrok URL will return the error page on reload, but the URL will persist for the next time you start up your local server.

## Add a slash command to your Slack app
  
Begin by launching ngrok with `ngrok http 3000` in its own terminal window and `node server.js` in another. Return to https://api.slack.com/apps and select the app you created earlier. This time, you will be selecting "Slash Commands" from either the features sidebar or the "Add features and functionality" menu. Click the Create slash command button to get started.

The well designed UI for creating a new command makes most of the options easy to understand:

- Command: This is the actual slash command users will type in Slack. Name this one `/localteststruggle`.
- Request URL: This is the endpoint on your server that Slack will send a POST request to when the command is used.
  - Copy your ngrok forwarding address here and append `/lts`: `http://randomstuff.ngrok.io/lts` -- this route is already setup in the server.js.
  - Remember that if you stop and restart your ngrok server, a new forwarding URL will be generated and you will have to edit your slash command's Request URL.
- Short Description: This will appear in the popup as helper text when the user types the command in Slack. Type whatever you'd like, or simply "Local Test Struggle"
- Usage Hint: This gives the user a hint for available parameters they can pass into the command. The autocomplete preview at the bottom of the screen helps make this a little clearer. If you need your app to recieve particular arguments to work with, this is where you would clue the user in.

The option to escape channels and usernames will send along their respective IDs instead of their actual names. The intended purpose of your command will dictate whether you want this checked or not. It can be useful to access the IDs directly to query Slack API endpoints, but leave it unchecked for now.

After clicking "Save," you will return to the Slash Commands feature page. You will also be prompted to reinstall your app. This is required anytime your app needs to access a new permission scope. Follow the link and click "Reinstall App." This will present you with a prompt similar to when you created a webhook. Choose #general once again and click "Install."

Open your Slack app and type `/localteststruggle`. Your app should respond with an ephemeral message (a temporary message, visible only to the person that used the command) assuring you that the slash command is working. The terminal that is running the node server should also print out the object that Slack sends to your app so you can get an idea of how Slack passes data in it's request. Now type `/localteststruggle This will be echoed` to observe the attachment behavior, passing back the arguments given to the slash command along with the original message..

View the server.js file included in this repository to see the code and read the comments to understand what is happening here, starting on line 10.
