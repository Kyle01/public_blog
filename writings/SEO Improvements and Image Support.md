## SEO Improvements and Image Support
#### 2/17/2024 - Kyle McVeigh
[Go back to all articles](../../)

I've never had to build for SEO. All of my professional employment has been to construct internal applications which have been guarded deeply behind serious corporate firewalls. But as an engineer I try to learn about all areas of web development, and SEO is a significant piece of frontend development.

Recently, I showed a friend who is employed as a growth marketing consultant my website. They quickly pulled up [Google Lighthouse](https://developer.chrome.com/docs/lighthouse/overview) and showed how my site had fairly good metrics in Performance, Accessibility, and Best Practices, but was weak in SEO. 

![Lighthouse Pre Optimization](https://kyle-mcv-blog-pictures.s3.amazonaws.com/LighthousePreOptimization.png =500x*)

This came as largely a surprise to me, I never considered optimizing for SEO, but took it as a learning opportunity. Turns out I was missing a [meta](https://developers.google.com/search/docs/appearance/snippet) tag in my header. I also changed the generate script to generate a [sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) for crawlers and a robot.txt file with those details. Those changes were made in isolation and can be found on [this pull request](https://github.com/Kyle01/public_blog/pull/1). 

Making those changes moved up my SEO score. Hooray!

![Lighthouse Post Optimization](https://kyle-mcv-blog-pictures.s3.amazonaws.com/LighthousePostOptimization.png =500x*)

I also updated my `style.css` to include formatting for imgs and partitioned an S3 bucket for blog photos, so now the website supports photos! Big improvement which was long overdue. 

The blog has been fun to build and add to over time. I look forward adding more features in the future. 