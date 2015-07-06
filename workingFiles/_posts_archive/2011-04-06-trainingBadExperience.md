---
layout: njppBlog
title: Are you training your users for a bad experience?
author: Tony
tags: 
onMozilla: false
onMedium: false
externalURL: 
excerpt: If you have an email address, you've probably received at least one email this week about how it was leaked by Epsilon (I've received four now.) What I find so troubling about this in particular, is that Chase bank was one of the notification emails I got. This is troubling because of the way Chase's rewards program works, and the behavior they've trained their users to exhibit is now the very same behavior they are warning them against. This is part of experience design that often gets ignored, and now it's going to be huge.
---

# Are you training your users for a bad experience?

If you have an email address, you've probably received at least one email this week about how it was leaked by Epsilon (I've received four now.) If you're not familiar with who they are or why they have your email address to lose (I wasn't) [Cnet has a pretty good article about it](http://news.cnet.com/8301-27080_3-20051038-245.html"). What I find so troubling about this in particular, is that Chase bank was one of the notification emails I got. This is troubling because of the way Chase's rewards program works, and the behavior they've trained their users to exhibit is now the very same behavior they are warning them against. This is part of experience design that often gets ignored, and now it's going to be huge.

## Training your users to do the wrong thing

If you're not a Chase account holder, you're likely not familiar with their rewards program and the behavior I'm talking about. Once a quarter, the bank chooses three to four categories that cardholders get 5% cash-back on. They announce this with emails, and if all the emails were doing was announcing these special categories I wouldn't be writing this post. To qualify for this offer, you have to follow a link in the email and sign in at a microsite. Hello fishers, I hope you have your pirated copies of photoshop warmed up. 

This is the behavior the company endorsed, following a link in an email and signing in. I'm sure no one in the marketing department, or at Epsilon ever dreamed they would now be sending out emails telling people to do the opposite (don't give your account info to anyone who asks for it via email), but the damage is already done. The mental model is already set for thousands (or maybe even millions), "To get my 5% cash back on X this quarter, I click the link in my email and log in to sign up." 

__Fish, meet barrel.__ 

## How can we do better?

When we're designing systems, any systems, we need to take into account the behaviors we're training users to exhibit. More importantly, we need to be aware of the big-red-flag-waving-don't-ever-do-that style behaviors for a particular domain. Training users to follow email links to sign in is a dangerous design because it's so easy to spoof an email and a website these days. To add insult to injury, it's completely unnecessary to make people do this. You can track the success of your email by setting a special link to the account site, where there are significant anti-spoofing measures in place. You could just send an email announcing it, telling people to go log into their account to activate it. Or you could just automate it. Asking users to follow a link from an email and sign-in is one step removed from sending them an email and asking them to reply with their credentials, and it's not a big enough step to make it ok.

I'm sure there was a business goal driving this dangerous design, but how much money are you saving now if even 1% of your effected users get fished? How does that experience effect your brand? How does it effect your current customer base of non-fished users? Word of mouth is a powerful marketing force, and it's directly tied to the experience your customers have with your stuff (branding, advertising, customer service reps, third party vendors, and even people you've opened the door for who impersonate you well.) 

## So what...?

As designers we have to be champions of good design, but we also have a responsibility to avoid designing things that will get us shanked later on. In this case, an already serious data breech is made even worse by a bad design. Chase trained their users to walk right into a fishing scheme, for whatever reasons. I've yet to meet an interaction or experience designer who isn't really Internet savvy, so I'm sure whoever came up with the model Chase went with was aware of all the things you're never supposed to do from an email. But there is always the chance a designer had no hand in this system, or that they were ignored. We'll never know unless Chase decides to tell us. What we need to do, as a community of design professionals, is keep this event in mind and make sure we're not reinforcing dangerous web behavior with our systems.