---
layout: njppBlog
title: Three ways to test your design’s blind spots
author: Tony
tags: 
onMozilla: false
onMedium: true
externalURL: https://medium.com/@tsmuse/three-ways-to-test-your-designs-blind-spots-134d098cf0c1
excerpt: I've been spending a lot of time in the last few weeks working on all the content for my upcoming Mobile UX class. It's been a great excuse to look at my everyday process and the things I've set up for my team. There's a lot of stuff I could, and probably will, write about here but right now I want to talk about testing a design once you've come up with it.
---
# Three ways to test your design’s blind spots

I’ve been spending a lot of time in the last few weeks working on all the content for my upcoming Mobile UX class. It’s been a great excuse to look at my everyday process and the things I’ve set up for my team. There’s a lot of stuff I could, and probably will, write about here but right now I want to talk about testing a design once you’ve come up with it. Let’s jump in, shall we?

## Why do we test designs?
The same way we do quality assurance (QA) testing of products before we send them into the world at the end of the production phase, we need to test our designs to make sure we weren’t totally off the mark. Even if we base our designs on insights from user research, sometimes we just get it wrong. It happens to the best of us. Testing in the design phase keeps us from spending time and money building things that don’t solve the problem we’ve set out to solve.

Testing and fixing problems gets exponentially more expensive the farther into development we get, so testing before we start building lets us avoid paying more for scope changes or pivots than if we wait until we had built something. There are a lot of testing methods, and what I’ve outlined here are the most common ways to test design artifacts like rapid prototypes or wireframes.

## Usability testing
In the before-time, in the long long ago, usability testing meant sitting people down in a sterile room and measuring things. How long it took them to do a given task? How many errors did they make in each task? How many tasks they could complete with 100 Oreos in their mouths? I may be exaggerating that last one a bit. I like to refer to those as “hard usability measures” because they are simply things we measure while people are using a thing. Today, in the future, usability testing tends to bring with it some ethnographic qualities. Using things like think-aloud protocol we can get insight into not just “can people use this?” but “what are people’s mental models around using this thing?” while sitting with a user in a sterile room (if you must) or better yet in their home, office, or even in cyberspace. 

We run these tests by creating tasks for our participants to complete using our thing. These tasks are usually simple, and tend to have a clear point of completion. While our users are running through these tasks, they tell us what they’re thinking and why they’re doing what they’re doing; unless we’re actually measuring those hard usability metrics I mentioned earlier, then we don’t want them to talk while they’re working. This is why paper-prototypes or lo-fi digital prototypes are so great, we can create them quickly and cheaply and get people using our designs sooner. We can get from brainstorming to testing in as little as a week using lo-fi prototypes.

Usability/user testing lets us answer questions like: 
* Can people use this thing? 
* Why is this particular interaction difficult/unpleasant/not working?
* How do people expect this thing to work?
* Where are we letting our technology/process/politics get in the way of users accomplishing their goals?  

## A/B Testing
Oh A/B testing… I have a love/hate relationship with A/B testing. It’s a great way to test ONE THING changing. Let me say that again, it’s a great way to test ONE THING changing. That’s exactly how we run an A/B test, we have a page (usually it’s a page) and the existing state is our null hypothesis, aka “A.” Then we duplicate that page exactly, but change ONE THING on that page that we think might make it better. This version becomes our alternative hypothesis, aka “B.” Then we show those two pages, randomly, to a representative sample of our users and find out which one works better to achieve our goal.  

A/B testing is a slippery slope though. Once we start testing ONE THING changing we start feeling like maybe, just maybe, we can get away with one set of things changing. Then one whole screen changing. Then one whole app changing. This is where we’d basically be better off flipping a coin and spinning counter-clockwise three times before making a decision. If we’re not just testing ONE THING changing, we’re wasting everyone’s time. 

An A/B test is a very simple experiment and in any experiment, even the simple ones, the test has to be constructed to control all but the variable that we’re studying. When we change our ONE THING we are controlling our experiment by keeping everything else the same. That way we can accurately attribute any change in user behavior to the ONE THING that changed. The important thing to keep in mind is that the result will always be, “A or B is better,” but not why one is better than the other or if there is a better way to do things all together.

A/B tests are very popular, especially in software development, but they are only really good at helping answer questions like:
* Is version A more clickable than version B?
* Does version A catch people’s attention more than version B?
* Is my goal achieved more/faster/better with version A or B?

Note: There are multivariate split tests, but they are fairly complicated to set up and require very large samples to produce valid results. Letting multiple variables vary in your normal A/B test setup will almost always lead you to unreliable results.
 

## “Fuck it, let’s just ship it and see what happens” testing
This is sadly the most common kind of design testing there is. It’s predicated on the belief that “The only way we can know anything is to just go all out and do it full scale” or “People don’t know what they want until we show it to them.” This is the most expensive and unhelpful testing there is, remember testing and fixing problems gets exponentially more expensive the farther into development we get. Waiting until the end to see if you made any mistakes is like trying to spell check a document while you’re waiting for it to print.

Lately, I’ve seen a lot of people and companies confusing this method with the testing approach from “ Lean UX.” I’m not a big cheerleader for Lean in any of it’s variants, but building something fully functional and shipping it is not “Lean UX,” it’s just shipping a product without testing it at all. The Lean UX approach is much more in-line with the user testing methods or even A/B testing, but the main thing that makes it “Lean” is you build the smallest something possible as quickly and cheaply as possible and test is as soon as you can.

“Fuck it, let’s just ship it and see what happens” testing is really good at helping you answer questions like: nothing. There is literally nothing this will method can show us until it’s too late to act; we’re just stuck with a shitty product out in the wild if we’re wrong.

## Let's do it already
Testing doesn’t have to be time consuming and it will point out blind spots in our designs. Who doesn’t love being able to fix mistakes before everyone can see them? Testing can be done quickly and drives rapid iterations of design as we learn from tests and come up with better ideas to fix identified problems. Can you think of a good reason not to do it?