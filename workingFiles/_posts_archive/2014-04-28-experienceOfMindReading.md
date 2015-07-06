---
layout: njppBlog
title: The Experience of Mind Reading
author: Tony
tags: 
onMozilla: true
onMedium: false
externalURL: https://blog.mozilla.org/ux/2014/04/the-experience-of-mind-reading/	
excerpt: When you think about shopping on the web, or watching movies on the web, or listening to music on the web, or doing pretty much anything on the web, at some point most of us expect that “the web” will make some suggestions on where it is we’re going, what we’re watching, listening to, or buying.
---

# The Experience of Mind Reading


## Building an experience around recommender systems

When you think about shopping on the web, or watching movies on the web, or listening to music on the web, or doing pretty much anything on the web, at some point most of us expect that “the web” will make some suggestions on where it is we’re going, what we’re watching, listening to, or buying. These suggestions can take the form of ads that follow us around for days at a time (creepy) or quiet little “people who looked at this also looked at these things” sections of a web page. How computers figure out what we want and when we want it is a black box of magical math and statistics for most of us, myself included until just recently.

## Let’s read peoples minds!

A few months ago the Firefox Marketplace team decided to start exploring what it would mean to add a recommender system to the Firefox Marketplace. System-generated recommendations are something we’ve talked about before, and this time we had the help from a fantastic team at Telefonica Labs. They built a functioning prototype of a recommender system for the Marketplace that performed “better than popular,” the gold standard against which all recommender systems are compared. We had the engine, we had the statistical analysis, but I was curious about how people would perceive the system, do people actually think it’s better than popular recommendations after using it?

## A peak into the magical black box of recommendations

Before I even attempt to (poorly) describe any of the magic that allows computers able to recommend things to people, I want to stress that I am a complete novice in this field. There is a fantastic [slide deck you can view](http://www.slideshare.net/kerveros99/essir-2013-recsysfinal-25957057) put together by Alexandros Karatzoglou, one of the super-smart researchers we are working with at Telefonica Labs. It is a much better intro to recommender systems than what I’m about to write.

![recommendationExample](/blog/img/recommendationExample-1-252x194.png)

Basically, if we know how enough people feel about a couple of things, and those feelings overlap, we can make pretty good guesses about their feelings about things; as long as some of them have seen these other things that the others have not.

To be clear: __we are NOT collecting any data on any Marketplace users at this time.__ Future recommendations in the Marketplace will be an opt-in, and we will be very clear on what data we would use and how.

## Setting up the test

We set up a front-end for the recommendations engine by modifying the existing Marketplace UI slightly to repurpose it for the test. The problems we identified and wanted to explore were:

* How do users perceive the “cold start?”
* How do “real unbiased” preferences perform in the engine?
* How do weighted preferences perform in the engine?
* What are user’s reactions to “Recommended Apps?”

We built a prototype that displayed 21 popular apps. These were presented as “Recommended apps” and we asked a series of questions to rate a user’s perceptions of these apps as her initial recommendations. This scenario is the “cold start,” where we don’t have any information to make recommendations with. We then asked the participant to press the next button. She was presented with a list of apps and asked to select 10 apps that looked interesting to her. We used these interests to generate a “new set of recommendations,” this time, actual recommendations. The final step is to present the participant with the same set of questions we asked in the beginning, to see if the real recommendations were perceived as better or worse than the popular apps list.

A note on “real unbiased” preferences vs “weighted preferences” that I mentioned above: I made this distinction early in planning the test unaware of just how much it would affect the results because I had no idea how the recommendations engine actually worked. You may be asking yourself “wouldn’t this be biased and unbiased preferences?” and maybe even “aren’t all preferences inherently biased?” These are both good questions, so I want to define the terms as I used them in planning the test.

When I say “real, unbiased preferences” what I mean is letting people choose apps that are interesting to them without the influence of popularity. This may seem silly if you are familiar with the Firefox Marketplace because all of our listings default to a sort by popularity. The intention behind it was to simulate someone with eclectic tastes or who is finding things that are less popular, but are a strong representation of that user’s interests nonetheless. To simulate this effect, we took the whole Marketplace catalog, sorted it randomly and presented it to participants. This gave an equal chance of users finding a popular app or a relatively unknown app when they were choosing their preferences.

When I say weighted preferences, I’m simply referring to preferences participants shared with us from a list sorted by popularity. This is an important distinction because I wanted to be able to account for real preferences, which could be very unpopular but very informative, vs [satisficing behavior](http://en.wikipedia.org/wiki/Satisficing), which I initially believed to be potentially less informative.

It turns out both of these decisions have very real consequences on how the engine works, and those showed up in our findings.

## What did we learn about mind reading?

### Satisficing is ok

On our first day of testing, we used the “real unbiased preference” method of collecting preferences from our participants. I point this out because it turns out that the engine doesn’t really know how to deal with unpopular things, and the recommendations that came back were…off. Linus, another one of the researchers, explained it to me as “When the engine doesn’t know anything about an app, because no one has downloaded it or very few people have, all it can do is give back random results.” And indeed that’s what we were seeing. This is an important point and I bring it up to highlight something I learned while testing these kinds of systems with real people. My attempt to control against satisficing was totally incompatible with the recommendations engine, because satisficing is kinda how recommendations work. To account for this, we switched the list of apps we provided to a list of 250 popular apps, cutting off the top 100, sorted randomly. The recommendations we started seeing in the additional tests started making a little more sense, statistically and preferentially, than the randomness we saw in the first batch.

### Catalog Counts

Overall, we found that the depth of the catalog is a major factor in people’s opinion of recommendations being “good.” As I went back and looked at the apps recommended, based on the preferences we collected, a lot of the recommendations were actually pretty good. The things recommended were similar types of apps in a lot of cases, which I felt was what the recommender was supposed to be doing. The overall goal of the recommendation s is to offer you something similar to the other things you like because you’ll probably like the recommended thing based on that similarity. This didn’t seem to overcome the vast majority of “unknown apps” in the results though, and it seems that if participants didn’t recognize at least a few of the apps in the list, they talked about how they didn’t think the recommendations were very good. There appears to be a level of familiarity expected from recommendations on the Internet. This leads me to believe that some kind of justification, (e.g. “this recommendation is based on”) is important when making recommendations of less popular items. This explaining why a recommendation was made is extra important for less “tech-savvy” users, who seem to be far less patient with having to do a lot of exploration. We’ve seen this disinterest in other studies and the trend held true in this study, users with reported lower levels of computer proficiency clicked into app details less often to explore the catalog.

### Labels are almost as good as the real thing

Of the 12 total participants who successfully completed the study’s tasks, seven of them took the initial list of popular apps as “recommendations” simply because that’s what the label said. Five of those seven mentioned an assumption that we knew something about them based on their browsing history. Three of those five used that assumption to explain why the “recommendations” they saw on first load where good. The other two used it as justification for a complaint about the recommendations, that they should be better than they were. This is interesting and important because it turns out just by calling something “recommendations” it can make people assume you’ve been profiling them somehow.

## What’s next for the Firefox Marketplace

Overall, this study was enlightening and we’re now exploring how we can add recommendations into the Marketplace in a way that is useful, fun, and not creepy. We aren’t sure what that means yet, but expect to see some more writing (and pictures) around this topic soon. If you’re interested in contributing to this Marketplace project, reach out and let’s talk. There is still research and design to be done.

I’d like to thank the awesome team at Telefonica Labs, [Alexandros Karatzoglou](http://www.twitter.com/alexk_z), [Linus Baltrunas](http://www.twitter.com/linastw), and João Baptista for hosting us and helping us make this even a possibility. I’d also like to thank my awesome coworkers [David Bialer](https://mozillians.org/en-US/u/dbialer/) and [Rob Hudson](https://mozillians.org/en-US/u/robhudson/) for their help and future work getting us to this point on this feature.
