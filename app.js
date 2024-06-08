//first time using js excuse the mess

const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Meta Tags Example</title>
            <!-- Open Graph meta tags -->
            <meta property="og:title" content="Example Title" />
            <meta property="og:description" content="This is an example description." />
            <meta property="og:image" content="https://fc-dev-call.replit.app/image" />
            <meta property="og:url" content="https://example.com" />
            <!-- Twitter Card meta tags -->
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Example Title" />
            <meta name="twitter:description" content="This is an example description." />
            <meta name="twitter:image" content="https://example.com/image.jpg" />
            <!-- Farcaster meta tags -->
            <meta property="fc:frame" content="vNext" />
            <meta property="fc:frame:image" content="https://fc-dev-call.replit.app/image" />
            <meta property="fc:frame:button:1" content="Spec" />
            <meta property="fc:frame:button:1:action" content="link" />
            <meta property="fc:frame:button:1:target" content="https://docs.farcaster.xyz/reference/frames/spec#constructing-a-frame" />
            <meta property="fc:frame:button:2" content="Image" />
            <meta property="fc:frame:button:2:action" content="link" />
            <meta property="fc:frame:button:2:target" content="https://fc-dev-call.replit.app/image" />
            <meta property="fc:frame:button:3" content="Frame Validator" />
            <meta property="fc:frame:button:3:action" content="link" />
            <meta property="fc:frame:button:3:target" content="https://warpcast.com/~/developers/frames" />
            <meta property="fc:frame:button:4" content="Replit" />
            <meta property="fc:frame:button:4:action" content="link" />
            <meta property="fc:frame:button:4:target" content="https://10.0.0.26:3000" />
        </head>
        <body>
            <h1>Hello, World!</h1>
            <p>This is a simple Node.js app serving an HTML page with meta tags.</p>
        </body>
        </html>
    `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
