# 💳 serverless-stripe-webhook

In your Serverless project root directory, run:  

```
sls module install https://github.com/eahefnawy/awsm-stripe-webhook
```

open `<serverelss project name>/back/modules/sl-stripe-webhook/lib/index.js` and add your callback code. This is the code that will handle the webhook.

when you're done, deploy with:

```
sls function deploy
sls endpoint deploy
```
After deployment, add this webhook URL to Stripe: `<endpoint>/webhooks/stripe`, and test it out!
