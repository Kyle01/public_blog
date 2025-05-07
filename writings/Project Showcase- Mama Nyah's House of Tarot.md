## Project Showcase-  Mama Nyah's House of Tarot
#### 5/7/2025 - Kyle McVeigh
[Go back to all articles](../../)

My friend and I released our first video game, Mama Nyah's House of Tarot. The game is in a pixel style and more of an art project than a full fledged game but the core feature is tarot reading mechanism. The game is currently available in [Steam](https://store.steampowered.com/app/3582900/Mama_Nyahs_House_of_Tarot/) and the code is in [github](https://github.com/DevinReid/Tarot_Generate_Arcade). Building this was an act of love and turned out to be way more work than I anticipated when we started, but I am really proud of this one and the amount of polish it has on it. Please check it out. Now that the game is out I'm ready to speak about the inspiration, architecture, and some of the learnings so far. 

### Inspiration 
I've always really liked Tarot Cards. The cards are cool, the symbology is beautiful, and their [history](https://en.wikipedia.org/wiki/Tarot) is inspiring. One of the first things I did when I saw ChatGPT is start playing around with horoscopes and fortune telling. The quote “Any sufficiently advanced technology is indistinguishable from magic” has never felt more true than playing with ChatGPT in 2023 so this naturally fit in my mind with mysticism. 

I decided it would be fun to make a ChatGPT powered Tarot Card video game. We were able to prototype quickly: we found an artist selling beautiful pixel art Tarot Cards and after experimenting with prompts we were able to get some really fun results. This motivated us to keep going and build out a minimal viable product. 

### Architecture 
I have been playing with [Godot](https://godotengine.org/) recently and am overall impressed by their product, but we ended up building out the first pass using Python Arcade. There two reasons for this: First, I am much much comfortable coding in Python rather than Unity or Godot so I figured I could knock out a demo in Python Arcade faster. Second, my friend [Devin](https://github.com/DevinReid) who I paired with, is eager to build out his Python skills and github for employment reason, so that was a major driving decision. This decision has had its long term repercussions. This would mean that the finished game would be compiled via [pyinstaller](https://pyinstaller.org/en/stable/) and shipped as a `.exe`.

We built a server to handle the interactions with OpenAI. This allows us to maintain a bit more control of the API key and have additional controls incase of high traffic. We used a dead simple [Flask](https://flask.palletsprojects.com/en/stable/) server for this and it is hosted on [Render](https://render.com/).

Finally other than the cards the rest of the art was made by us. Making art turned out to be a tall order, I found it frustrating especially at the beginning. Luckily there are tons of tutorials that exist specifically for pixel art and their is a very cool painter tool called [aseprite](https://www.aseprite.org/) which helped us out a ton. We didn't have any luck using AI to help us out here- The AI really struggled with doing things as 'true pixel art' and we couldn't maintain a consistent style using the AI. 

### Learnings 
Given this is our first project we shipped to steam there were a ton of learning opportunities, I'll break down some of the biggest below. 

First, although Python Arcade is great and we've been super impressed by it, having the finished game as a `.exe` has its downfalls. First, the Nintendo Switch does not allow `.exe` code at all, so it would require an entire rewrite to port this to the Switch. Second, some Antivirus application auto-flag pyinstaller executables as viruses. Steam sent us a great [tool](https://www.virustotal.com/gui/file/19147c326f5dfcced08dad26fe3520d75d745a8376f45c1ebb93c6164ac16ae6/detection) to show exactly which anti-virus software is flagging ours as malicious and it us for us to get that solved. The two main options for this is to reach out to the software provider and have the executable whitelisted or to self-sign the executable. Self signing requires a certificate that has a pretty significant cost so that is a really bummer. 

Second, we actually finished the game and then started the process of releasing to Steam. This is an extreme anti-pattern. Steam allows for the steam game page to exist before the game is finished in order to build up hype and allow users to 'wishlist' the game. When we knew we were going to eventually going on steam we should of made that page and the required art work. The steam process ended up delaying our game launch by about a month and this was an entirely self inflicted wound. 

### Results 
Making a game is fun and showing it off to our friends and family has been awesome. The initial reviews are in and the results have been positive and that feels great. Working with a friend has been a pleasure. 