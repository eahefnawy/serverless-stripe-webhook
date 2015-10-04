# 💳 awsm-stripe-webhook

In your JAWS project root directory, run: 

```
jaws module install https://github.com/jaws-framework/jaws-core-js
jaws module install https://github.com/eahefnawy/awsm-stripe-webhook
```

open `<JAWS project name>/back/aws_modules/awsm-stripe-webhook/webhook/index.js` and add your callback code. This is the code that will handle the webhook. Make sure you validate the request depending on your application needs.

when you're done, deploy with:

```
jaws dash
```
After deployment, add this webhook URL to Stripe: `<endpoint>/webhooks/stripe`, and test it out! Tadaaaa!

