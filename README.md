<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1QiaijfZOrudUoVT4I4vkN57GMB32e7Pa

## Avoid blank screen on refresh
When hosting the built site under a subdirectory, refreshing without a trailing slash can cause the browser to look for the JavaScript bundle in the wrong place, resulting in a blank page. The app is configured with relative asset paths and a small redirect script to add a trailing slash; ensure your deployment preserves the trailing slash or rewrites requests accordingly.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
