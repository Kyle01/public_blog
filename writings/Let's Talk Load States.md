## Let's Talk Load States
#### 12/22/2023 - Kyle McVeigh
[Go back to all articles](../../)

It is easy to overlook load states, but I think they are a critical part of building a user friendly application. Frontend Developers are in the business of trust; we must build interfaces that portray the brand, are fully functional, and leave the users feeling assured and never confused. This is no small feat! Load states are a powerful and often under utilized tool in the frontend arsenal and I'd like to take a moment to dive deep on them.

### What are load states
Inevitable, your page will need to load. The frontend will fetch information from the backend, and there will be at least a moment where the status of the page is pending those results. This can happen when you first arrive on the page, when the user takes an action, or when data already presented has gone stale. This will trigger a load state.

### Why load states are important
When the page is loading, the user is waiting. According to the [Doherty Threshold](https://lawsofux.com/doherty-threshold/) the goal of the load should be under 400ms so that the user can remain engaged in their thought. **If a page has a long load, the first line of defense is to optimize the backend to decrease the load time**. This is sometimes impractical or impossible, so instead we can supplement this with a good load state. 

### How to improve your load states
I want to preference this and acknowledge that load states aren't free. They have a cost associated with them, but I believe investing in load states contributes to the overall look and feel of the application and there is a reasonable way to implement them that is totally worth it. Let's get into some techniques I've implemented at my current shop that have helped our load states: 

1. Implement a branded full page loader. This is easier than you think. Here is a [page full of full screen loaders](https://github.com/yangshun/awesome-spinners) that you can simple change the color to match your brand. Use a full page loader when the shape of the page isn't known, like a personal landing page. 

2. Use [Shimmers](https://medium.com/lattice-what-is/shimmer-ui-a-better-way-to-show-loading-states-aa1f4e563d17), also known as [Skeletons](https://mui.com/material-ui/react-skeleton/), when the the shape of the page is known. We've built custom shimmers for pie charts, tables, column charts, paragraphs, you name it, and it has made a big difference. 

3. When a page has multiple fetches of varying load times, don't wait for all of them. We do our best to show each component as it is ready and put the loading state and its individual component instead of at the top level page. I really like [this blog](https://www.infoxicator.com/en/react-router-6-deferred-fetch) which shows an example and implementation of how this looks like using React Router 6 and a data router. 

4. Each action needs to trigger a new state, and don't let users get break the application. Don't ever let the page 'hang'. We have a page that has a big download. When the download is started, the download button is disabled and a toast appears confirming the download has started. Once the download is finished, the user gets a completion toast and the button is enabled again. This gives the user feedback to what is going on and we've prevented a double download problem. 

5. Use timeouts and other methods to ensure that page doesn't just load forever. Show an error page if there is an error, don't just leave the user is a forever spinning state. 

Use your best judgement when it comes to creating good load states and put in the extra effort. We've found being conscious about our load states have made a big improvement to the brand and our user's trust. 