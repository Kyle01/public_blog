## Reminder: Big Refactors Don't Land
#### 6/11/2022 - Kyle McVeigh
[Go back to all articles](../../)

I recently started working in a frontend codebase that had seen many authors, most of whom where primarily backend coders. Consequently, there were 3 different CSS frameworks being used: vanilla CSS, SASS, and styled components. The repo also contained a lot of features that were no longer being used by the business due to lack of product-market fit. When I joined there was an inevitable conversion of should we just create a new repo with only the used features re-written in the css framework of choice. While tempting as this was to start from scratch I argued that such a large refactor was too risky and we should instead piecemeal it. Within a months we were able to land the total refactor and I knew we had made the right decision. Let me tell you why I think big refactors are too risky, how to handle big refactors instead, and I'll go into detail about the recent project. 

### Why big refactors don't land 
In my experience when embarking a big refactor a single senior engineer is chosen and 100% of their coding time is dedicated to essentially rewriting a major feature. This is tempting: refactoring code is fun, the rest of the team can continue with product work, and it is seen as 'low risk' because of the 'senior' status of the engineer and their accountability. This is total fallacy and is actually extremely high risk. Because there is only 1 person on the project there isn't transparency into the process and no way to get 'half' of the refactor in. 

Let's take this real example. If I wanted do the CSS framework example in a large solo refactor, this is what I'd have to solo as one big ticket:
1. Create new react repo and install tailwind 
2. Copy used features into the new repo with no styling 
3. Rewrite all styling for all features copied over
4. Test features locally 
5. Rebase changes
6. Update infrastructure code to deploy the new repo.
7. Test again once app is updated in the cloud 

Now if any of these above steps were to fail there isn't a good place to roll back. We'd likely scrap the refactor all together, keep the original repo, and put the ticket in the backlog. Also because I'd be on a solo adventure it wouldn't be clear if this was going to work out until the end of the process. So I'd be working for likely a week or longer without visibility or assistance from the team.

### How to do big refactors 
Piecemeal it! Think to yourself what do you imagine the end state to be and how can you get there in clean steps that can be assigned to nearly anyone on the team. Each commit or ticket should be the smallest amount of shippable work that gets you closer to the goal.

Let's again take the above example. Here are all the tickets that we added to the refactor epic. Each ticket is blocked by the preceding ticket:  
1. Deprecate the old features
2. Remove not used packages
3. Rewrite all the styled components in vanilla CSS
4. Removed styled package
5. Rewrite all SASS style in vanilla CSS 
6. Remove SASS package
7. Install Tailwind 
8. Rewrite all vanilla CSS in tailwind

Now that we had those tickets we could involve the entire team and have merges to main regularly. This means the refactor became not an issue of _if_ it would land but _when_ it would land. 

I realize it is tempting to solo big refactors. I get it, it is fun to sit in a corner and refactor code. We estimated it would take me a week of 100% attention if I had soloed it and it ended up taking us a month of 15% team attention to do it. The advantage was the certainty of landing and we were able to keep product work up throughout the month. Arguably we shipped _more_ product and took _less_ risk by doing the refactoring piecemeal as a team. 