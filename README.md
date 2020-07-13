# Redire¢t Chrome Extension

The Redire¢t Chrome Extension helps consumers redirect their spending toward Black-owned businesses. Based on the categories and products being viewed on Amazon.com, the extension suggests relevant Black-owned business alternatives for purchasing similar products. 

Note that this tool is still in development and has not been published to the Chrome store yet.

![Redirect Chrome Extension](https://res.cloudinary.com/db0kbxvhr/image/upload/v1593644064/redirect_mdzmed.gif)

## Technology Stack
- Chrome Extension API 
- React.js
- webext-redux
- Bootstrap
- Node.js / Express server
- PostgreSQL
- Heroku

## Setup Instructions
 - `npm i` to install packages
 - `npm run build-watch` to build into the dist folder. Changes you make will be applied on save
 - `npm run lint` to lint your code based on eslint config
 - `npm run compress-<mac|windows>` to compress the extension folder into extension.zip
 - To view as an extension in Chrome, head to [chrome://extensions/](chrome://extensions/), click load unpacked, and upload the dist folder.

_No serve script. Just open dist/index.html in your preferred web browser to view the default sidebar page._

## Contributors
1. Charlotte Reel, UX Researcher & Writer
2. Nicolas Ries, Developer
3. Matt Rose, Developer
4. Solomon Manyaga, Developer
5. Jennifer Gong, Developer
6. Philip Rogers, Agile Coach and PM

## Acknowledgements
This product was built as part of NYC Coders Hack for Black Lives Matter Hackathon on June 11-14, 2020.