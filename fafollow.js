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
            <!-- Farcaster meta tags -->
            <meta property="fc:frame" content="vNext" />
            <meta property="fc:frame:image" content="https://x.com/ens_auction/photo" />
            <meta property="fc:frame:button:1" content="ENS.Auction" />
            <meta property="fc:frame:button:1:action" content="link" />
            <meta property="fc:frame:button:1:target" content="https://ens.auction/" />
            <meta property="fc:frame:button:2" content="Follow on X" />
            <meta property="fc:frame:button:2:action" content="link" />
            <meta property="fc:frame:button:2:target" content="https://x.com/ens_auction" />
            <meta property="fc:frame:button:3" content="Follow on Telegram" />
            <meta property="fc:frame:button:3:action" content="link" />
            <meta property="fc:frame:button:3:target" content="https://t.me/ENS_Auctions" />
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
