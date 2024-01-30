## I've got a bad stereotypical bug on the frontend
#### 1/30/2024 - Kyle McVeigh
[Go back to all articles](../../)

I'm currently working through a particularly tough bug at work. I've seen this class of bug before, and each time I'd rate the difficultly in conquering it somewhere between 'annoying' and 'near impossible'. These type of bugs all have these same characteristics:
1. The bug is bad. Perhaps the page crashes, or the state of the page is loss, or a form isn't submitted, but it is a very bad user experience. 
2. It only happens to some people, some time, and we don't have reproduction steps.
3. The heart of the bug has to do with [some framework] not cooperating with [some core library].

I don't want to go over the exact details of this bug. I have no interest in calling out that library. Instead, I'd like to go over how I've approached these bugs in the past.

#### Do the obvious stuff
When I get assigned one of these bugs, I assign myself a valiant first attempt. I give myself a three point ticket (this is for me a full day of interrupted work) and try to do the following things:
1. Talk to the users and try to get as much information as I possibly can. What were they doing before the bug, when did it occur, where did it occur, what browser were they using, what device, what happened. I take very detailed notes during this time. 
2. I go through my implementation of the suspected code as closely as possible. I will also during this time go through the library's documentation and see if I have implemented something in the library incorrectly.
3. I spend time googling and seeing if there are other users that have reported such a problem and if there are any insights from the community. 
4. I considering bumping the library or even the framework. I'll read through the release notes to see if there has been a bug fix in a recent release that could solve the bug. 

Performing these items diligently tend to solve the bug. But not always. 

#### Add lots of tracking 
If the bug is still being reported after I've made my best first pass at it, the next thing I do is to add a near-unreasonable amount of user tracking around where the bug occurs. The goal of this is to collect as much information as possible and try to get steps to reliably reproduce the bug. We also have a secondary goal of figuring out how often this bug occurs and if I can get a live notification of when this bug occurs. Once we realize how often this bug occurs, then it will be up to product to determine prioritization. 

#### Harder stuff 
If product has determined this is a top priority, I pull another engineer and we pair on this and until we have confidence that it is solved. I don't have a magic solution here, we just work through and persevere until we have reproduction steps. Once we're able to reliably reproduce the bug, finding a solution is much closer, it truly becomes a matter of when and not if. 

I think I'll get this bug solved in the next couple of weeks, but as long as the frontend is littered with libraries-on-libraries, I'll find myself in a similar situation in the future. 