## Project Showcase-  Better Billboard
#### 10/6/2024 - Kyle McVeigh
[Go back to all articles](../../)

I try to do a fullstack product-forward project for myself at least once a year. I think it keeps my skills sharp and I enjoy it. I try to do something outside of finance and closer to my personal interests and monetization is never a priority. 

While I was at [The Strand](https://www.strandbooks.com/) near Union Square, NYC, I flipped open a book and saw the below photo of the billboard chart physically printed. I never thought about it before, but I guess that does make sense. Before the internet, the billboard top 100 music chart would be published in magazines as well as shared on the radio. I thought the design was really good- it was brutalist and easy to read. 

![Printed Billboard](https://kyle-mcv-blog-pictures.s3.amazonaws.com/billboard_print.png =800x*)

My disappointment when I actually went to the Billboard website was palpable. [Here is the site for you to experience it for yourself](https://www.billboard.com/charts/hot-100/). This site is a great example of how experiencing the internet, especially on desktop, is just awful. Banners, Ads, autoplaying videos, it really is just awful. The page is a whooping 27mbs of pain that makes me fearful to engage at all.

The idea arrived in my head pretty quickly: Can we scrape the billboard site, put it in a database, and create a better experience that is closer to the print design? Sure, why not? 

Without further ado here is [the site I made](https://better-billboard.vercel.app/) to achieve this vision. This is truly just a proof of concept, but I'm happy with what I've achieved so far and iterating from here should be easy. 

Here is [the code](https://github.com/Kyle01/Better-Billboard). Nothing here should really stand out, the backend is a Flask Python App hosted on [Render](https://render.com/). The scrape is in Python and is triggered via an AWS EventBridge CRON.  The frontend is NextJS and hosted on [Vercel](https://vercel.com/kyle01s-projects). I built this project iteratively, checkout the pull request to see that progress. 

So what is next for this? I haven't decided. I feel like I could take this project much further. Here is a list of unsorted ideas which could take this project further: 
1. Add integrations with Spotify, Apple Music, and Soundcloud, to allow users to start playing the songs from the site or at least link to them
2. Make a weekly email that users can opt into for the new chart which drops every Tuesday morning
3. Make a better mobile experience. I didn't spend a moment on this, please don't judge me
4. Host it on a custom url and not the default from Vercel
5. Rip out vercel and render and self host it
6. Add an AI integration to add information on each artist in digestible manner
7. Add album art
8. Add other top music charts and show the differences between each
9. Add previous charts available
10. Utilize server side rendering with incremental static regeneration
11. Improve error states and loading states

If I don't keep working on this, I can ensure you I'm working on something else and I very much look forward to sharing that with you when I'm ready. 