## Project Showcase- State of the Blog 2023
#### 3/4/2023 - Kyle McVeigh
[Go back to all articles](../../)

It feels like every personal blog contains a post describing the tech stack of the blog and the blog's motivation, so today feels like a good time to write such a piece for myself. 

### Motivation, why I blog
I've always wanted a public blog and sat on this project for too long before actually building this site. I suffered from analysis paralysis: should I use an off-the-shelf product like medium, wordpress, or substack, or should I build my tool? How complicated should my tool be if I decide to make one? And what would I actually write about, should it consist more of my professional coding, or should I talk about finance stuff, or more my personal interests? 

As I've progressed in my technology career it has become apparent to me that the best senior engineers are great technical writers. They use their technical writing to up-level their team around them. I love being an individual contributor and want to continue that career path for the forseeable future. I ultimately have decided to use this blog to mostly write technical pieces in order to showcase my technical writings and to further improve my writing skills. 

I started building a list on my phone of possible blog ideas and I told myself I would start blogging once a month. I'm still learning and I'm having fun along the way.

### Production requirements
I finally assigned myself a weekend to get this off the ground and gave myself the below product requirements: 
1. I've got one weekend to build this, with hosting on a custom URL, and a single blog post written.
2. I want to own the project and not use a third party blogging platform.
3. I want to write markdown. I like writing markdown. 
4. I want the site to be clean, minimalist, and have an overall brutalism web design with emphasis on readability

It goes without saying, but the product requirements for this blog won't be the same as another project. It helped me to write down what I wanted, and to work on just those things in order to overcome my analysis paralysis.

### The code 
Without further ado, [here is the github for this page with all the code](https://github.com/Kyle01/public_blog) for everyone to checkout.

As you may be able to tell, there really isn't too much here. Two javascript functions and a single style sheet power this entire site. Maybe as time passes and the product requirements change, I'll build this out further, but right now I feel like this all works pretty well for me. 

All my writings live in the `writings` folder and are written in markdown. The magic comes in running `npm run generate` where the `generate_script.js` fires and creates the html pages using the package [showdown](https://github.com/showdownjs/showdown). All of the styling is written in css and is located in `style.css` on the top level. There is a `javascript.js` package that works to puts a JSON of the list of posts on the front page. Hosting is even easier- I bought a domain on google domains and Github Pages does the rest of the work. 

### Just start writing!
I love having a personal blog! I'm upset at myself for putting this off as long as I did. I love seeing personal blogs having a comeback. The most important part of a blog is the writing so I encourage everyone who has a voice to start writing and find a way to make a blog that works for you. 