---
slug: lab-2-create-issue-and-pull-requests
title: Lab 2 - Create issue and pull requests
authors: [kevanY]
tags: [opensource]
---

## Introduction

For my second lab, I found a contributor to my code. They have to implement markdown support in my repo. I have to do the same thing to support. My contributor was [Duc Bui Manh](https://github.com/DukeManh).

I started to create a [Issue#8](https://github.com/DukeManh/OSD_SSG/issues/8) on his code, and describe what markdown I will implement to his code. After that, I started to read through his code. It was coded in TypeScript which is the same as JavaScript but with types.
The code workflow wasn't hard to follow. I implemented a function to process all markdown features. In that function, I'm calling all other process markdowns to change markdown to HTML.
I also added some checks such as only accept `.txt` and `.md`.
After finishing my code I created a pull request [PR#9](https://github.com/DukeManh/OSD_SSG/pull/9) and requested [Duc Bui Manh](https://github.com/DukeManh) to review my change.
He gave me some feedback to change. I had some redundant code. After fixing it I pushed back to remote and re-request to review.

[Duc Bui Manh](https://github.com/DukeManh) has to implement his markdown feature to my code. He first created an [Issue#15](https://github.com/Kevan-Y/text-ssg/issues/15), then created a pull request [PR#16](https://github.com/Kevan-Y/text-ssg/pull/16) for his change. The way of implementing a smarter than my way using some regex. I pull his code and do some testing on my side. I found that the markdown for the link was wrong, the href contains some `<i>` tags. Also, the heading was wrapped with `<p>` tag which doesn't match the HTML5 standard. I had him change it before merging it.

## Conclusion

Overall this lab helped me to learn to read some else code and implement the markdown feature without changing his workflow. And also expose my workflow to others and learn how they implement it.

**GitHub:**
[Kevan-Y](https://github.com/Kevan-Y)
[DukeManh](https://github.com/DukeManh)
