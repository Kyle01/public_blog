## My Current Engineering Frontend Principles
#### 9/21/2024 - Kyle McVeigh
[Go back to all articles](../../)

At my employer I was recently asked to write frontend principles which could be applied to the entire firm. This made me think about my own personal principles I've applied across employers. Below is that list of principles and an explainer for each:

1. Use proven tools with excellence. 

When it comes to my professional work, I consider how popular and tested a piece of technology is before introducing it to my projects. This is because inevitably someone other than me will be responsible for maintaining the tool and I want to ensure it will be supported by developers and will be easy to train and hire someone to take it over.

2. The design and style of the website is just as important as its content.

Users need to feel that the information on the page can be trusted, and a well designed and functioning website helps convey that trust. A website with excellent content displayed in a poorly designed mess doesn't feel good and then the content gets lost. For this reason I consider the design to be a top level concern. 

3. The products should match the branding of the entire firm. 

Similar to the above, the products should carry the same values as the brand. This will make the users attribute the brand in the products and vice-versa. It is a shame to see so many internal apps skip this step and use the default bootstrap or material design. 

4. Solutions should be appropriately sized and iterated on relentlessly.

This is one of the hardest balances to strike as an engineer but it is a responsibility we should take seriously. It is tempting to build for the problem that we think will arise in a future state, but then inevitably the facts change and we've wasted engineering talents on a problem that never materialized. Alternatively, it is also easy to build things too simple and find yourself with your hands tied and facing a mountain of paralysis inducing tech-debt. I think the former is more common than the latter and we should error on the side of building things as simple as possible and improve on them as we need. 

5. Push down logic where possible.

I think the frontend should try to be logic light and when possible logic should be pushed down as low as possible. If the database can maintain that logic, it should maintain that logic.

6. Use libraries selectively. 

This is probably the hottest take on this list. I try to use libraries sparingly. Libraries introduce risk of code that isn't written or maintained directly by the team and it is tempting to important a library for each little problem in the app. I find this leads to a dependency web nightmare and really slows down development speed in the long term. Before installing a library, I ask myself 1) Do I NEED this library, and 2) how long I think it will be in the app and if I'm comfortable with that reality. 

7. Documentation and knowledge sharing is critical to the participation of all. 

As I continue to progress in my career it is important I take an increased responsibility in passing my knowledge to others and having everyone writing code at a high level. The best way I've found to do this is to leave a trail of artifacts and documentation when doing my work.

8. Implementation should lean on functional design as compared to inheritance design.

I find functional design practices to be easier to test and match reality closer than building out inheritance logic. 

9. Always consider user feedback. 

The tools we build are for users and their feedback is critical to the success of those tools. I always try to get user feed back at every moment I can and I'm always looking for additional opportunities to receive feedback. 