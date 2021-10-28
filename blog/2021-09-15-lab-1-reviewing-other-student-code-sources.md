---
slug: lab-1-reviewing-other-student-code-sources
title: Lab 1 reviewing other student code sources
authors: [kevanY]
tags: [opensource]
---

In lab 1, I have to network through Slack to find a partner to review and test my SSG code. I meet a new friend named Eugene Chung on slack.

Testing and reviewing code might sound difficult, but with my previous co-op experience. I got better and better to read someone else code. It is like reviewing a Pull request.
No code is perfect, they will be always a bug, improper formatting, unnecessary comment. One of the issue reading his code was the code wasn't properly formatted and they are random comment all over the place. [Issue #2](https://github.com/ycechungAI/cmd-ssg/issues/2), [Issue #3](https://github.com/ycechungAI/cmd-ssg/issues/3). After creating those issue Eugene fixed within a day and the code was much nicer to read.

After I reviewed Eugene code, he had to review mine. I always like people to review my code and tell me what I can improve on. For me it is a way to learn how to write efficient code in the future.
When Eugene testing my SSG code, even with some error checking I put in place he was still able to find some bug in my code. One of the issues [Issue #1](https://github.com/Kevan-Y/text-ssg/issues/1) he found was my code wasn't checking recursively for any .txt files. One of the solutions is to implement a recursive check to check if there is any .txt file in the children's directory. The second big bug [Issue #5](https://github.com/Kevan-Y/text-ssg/issues/5) was that the generated HTML file does not pass HMTL5 standards. I notice that for a .txt file that has a name with space, it will convert to an HTML file with name + space. The solution was to replace all space with hyphens when creating the HTML file. The same logic applies to folders too.

In the end, fixing my issue was not too hard thanks to Eugene's description. I was able to identify the bug part quickly in the code. Testing and reviewing someone else code was the same steps when I was working as a QA. I had to test other people's scripts and add feedback in the Pull Request.

My GitHub Repo: [text-ssg](https://github.com/Kevan-Y/text-ssg)
Eugene GitHub Repo: [cmd-ssg](https://github.com/ycechungAI/cmd-ssg)
