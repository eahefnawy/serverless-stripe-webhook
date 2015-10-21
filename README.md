# 💳 awsm-stripe-webhook

In your JAWS project root directory, run:  

```
npm install awsm-stripe-webhook
```

open `<JAWS project name>/aws_modules/awsm-stripe-webhook/webhook/index.js` and add your callback code. This is the code that will handle the webhook.

when you're done, deploy with:

```
jaws dash
```
After deployment, add this webhook URL to Stripe: `<endpoint>/webhooks/stripe`, and test it out!
