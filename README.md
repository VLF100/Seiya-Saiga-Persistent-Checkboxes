# Seiya-Saiga-Persistent-Checkboxes
A script for Tampermonkey to make the checboxes on the Seiya Saiga website persistent across sessions, so they don't get deleted when closing or reloading the browser.

## Requires
Tampermonkey or any similar userscript extension. The script here provided has only been tested with Tampermonkey v4.13.6136 in Firefox 88.0.1.

## Usage
Add a new script on your userscript extension and paste the code provided in the file script.js.

## Description of the script
On initial page load, the script generates an unique id for each checkbox based on the name of the guide (obtained from the current url) and a number that increases sequentially. Then it adds a listener to react to the checkbox being interacted that saves their state to a persistent storage across sessions. For more information about this storage read about Tampermonkey GM_ storage.

## Potential bugs
As explained before, the ids generated for the items are based on the name of the guide, which is only the last string before the ".html", so if two guides have the same name, they will "share" the state of their checboxes, and marking some in one guide will mark them in the other too. This should not happen as each guide has an unique url and name, but not extensive research of the website has been made.
