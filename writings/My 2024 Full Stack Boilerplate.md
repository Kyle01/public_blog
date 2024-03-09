## My 2024 Full Stack Boilerplate
#### 3/9/2024 - Kyle McVeigh
[Go back to all articles](../../)

I have interest in starting a brand new personal project in the immediate future. In preparation for starting a new project, I did some reflecting on what stack I'd like to use and in preparation, I've created an open sourced full stack boiler plate template for myself. Periodically, Hacker News has forums like [this one](https://news.ycombinator.com/item?id=33046696) or [this one](https://news.ycombinator.com/item?id=38500705) or [this one](https://news.ycombinator.com/item?id=38361519) that prove there are many unique technology stacks and people have widely different opinions on the seemingly infinite number of technology choices. I'm going to use this article to discuss what technologies I picked in the year of 2024, why I made those decisions, and some advice before you start using my template. 

My full stack boilerplate template can be found [here](https://github.com/Kyle01/fullstack_boiler_2024).

### The Stack
Without further ado, if I was making a new web app and needed to build the minimal viable product as the first or only developer, this is the stack I'd use:
1. Database: Postgres - [Hosted on Render](https://docs.render.com/databases)
2. Backend - Python / FastAPI - [Hosted on Render](https://docs.render.com/web-services)
3. Frontend - Javascript NextJS - [Hosted on Vercel](https://vercel.com/docs/frameworks/nextjs)
4. [Tailwind](https://tailwindcss.com/) - CSS Library
5. [NextAuth](https://next-auth.js.org/) - Authentication 

### Tech decisions and rational
1. **Postgres Database** - I like SQL and relational databases. Relational databases fit well in my mind and I am in no way concerned about scaling problems. Postgres is great, I've worked with it for years and they've got a great community. I see no reason in using a different SQL database. 
2. **Python Backend with Flask** - My python skills aren't fantastic, but they're good enough for me to develop an MVP. I really do prefer Ruby on Rails, but the ability to hire rails engineers isn't as easy as it was half-a-decade-ago. In contrast, hiring a python engineer has to be the most in supply language in NYC in 2024. Python also allows me to develop my skills and that is appealing. 
3. **Render Hosting for DB And Server** - My computer cloud networking skills are essentially non-existent, so hosting a database and server on the cloud is not appealing to me. I've been really impressed with Render, their service is priced well and I've found it easy to spin up new projects and cron jobs. Obviously using an infrastructure provider is more expensive than hosting it myself on the cloud, but this is a service I'm very thankful to pay for. 
4. **Javascript** - For the MVP, I'd use Javascript instead of Typescript, especially when the backend is also untyped. I like Typescript best when the API is generating the types and we can use those on the frontend. Until that feature is built, I'm going to use Javascript and lean on its ease and flexibility.
5. **NextJS** - There are a lot of frontend frameworks to pick from but I would pick NextJS. React has lost its way a bit at the moment and NextJS should be easy enough to learn for any React developer, so hiring wouldn't be too difficult. I like the simple routing and built in server side rendering support.
6. **Vercel Hosting for Frontend** - As specified above, my cloud networking skills aren't great. While I have previously used AWS Cloud Front, Vercel has a lot of great extra features and it works fantastic with NextJS. It is an easy choice. 
7. **Tailwind** - I've used a lot of CSS tools and Tailwind is my by far favorite CSS. I like the functional approach and eliminating naming CSS classes is a gift that keeps on giving. 
8. **NextAuth** - Authentication is hard. Using any tool that can automate as much of this as possible is the best and most secure path forward for me and probably most people. NextAuth works well, there is some customization issues I had, but I think it is the best free alternative for me. 
9. **AWS Route 53 For Domain Name** - I previously used Google Domains for this, but since they've move to Squarespace, I've tried to move all my new URLs to AWS.

### Why you probably shouldn't just `clone` and go
There exist an entire industry around building boilerplate code and encouraging aspiring founders to clone and start developing. I've never had any luck with these boilerplate templates, and mine surely isn't any better. Here are why I think this template, and most of these, '`clone` and go' templates are not a turnkey solution: 
1. **Your skills are not my skills** - My template it uniquely mine, I made it based on my skill set. In particular, the hosting is done by services because my cloud networking skills are novice, but my CSS skills are proficient so I opted against using a component library. You should make a template based on your own expertise.
2. **Your problems are not my problems** - The problems you're trying to solve are certainly not the same problems I had in mind when I built this template. For example, you may be doing an AI project and require a vector database. Or maybe your project will need to handle a lot of user uploaded videos and pictures, and will need to use a storage solution like S3 or maybe even self host on local hard drives. Your starting template should be made with the problem you're trying to address in mind. 
3. **These are some of the most important commits in a project** - The first commits and technology decisions are some of the most important code in a project. Small decisions made in this earliest phase, such as where to host, what language to use, or how to name certain folders, can end up being some of the most costly decisions further down the line. These decisions should all be made by you, and not because you found a template that seemed to work. 
4. **You'll want a deep understanding of the starting code that comes best from writing it** - It is a programming idiom that [writing code is easier than reading code](https://jakeworth.com/its-harder-to-read-code-than-write-it/). When you write your own template, you'll have total mastery of the starting point and it'll be easier to start building features. 

I think it is best to use these templates as a learning guide, and to build your own solution from scratch. There probably are some parallels to the items listed above and code generated by AI, but that will be a discussion for another day. 
