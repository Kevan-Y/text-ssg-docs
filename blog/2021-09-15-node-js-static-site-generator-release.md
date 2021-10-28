---
slug: node-js-static-site-generator-release
title: Node.js static site generator (Release 0.1.0)
authors: [kevanY]
tags: [opensource, beginners, javascript]
---

For the first assignment in OSD600, we have to create a CLI static site generator using any language of ours choice. I went with node.js, because I need some projects in my GitHub in node.js.
Throughout this lab, I learned how to uses some new packages such as yargs, chalk, figlet.
The concept seems to be simple to implement, but there is a lot of challenge to go through implementing all the core and optional features.
One of the challenges was to learn how to use async/await. It was a bit tricky but playing with the code and watching some tutorials helped me a lot.
The second most challenging was to write a function to get all the .txt files names recursively.

## Installation

- clone the repo
- open the folder
- run `npm i`
- run `npm install -g .`

## Usage

```bash
ssg --input <path>

ssg --input <path> --output <path>

ssg --input <path> --output <path> --stylesheet <URL>

ssg -i <path> -o <path> -s <URL>
```

## Command option / feature

`-i` or `--input` accept a .txt file or folder to read data from. If it is a folder it supports deep tree of files and folders. (Required)

`-o` or `--output` accept an existing directory to output generated html to. If option not specified, it will create and output files to `dist` folder. (Optional)

`-s` or `--stylesheet` accept a CSS URL. If option not specified, it will uses default stylesheet. (Optional).

`-h` or `--help` shows list of option, usage, and examples.

`-v` or `--version` shows the version of the CLI

If the first line of the .txt is followed by two blank lines, it will populate the `<title>...</title>` and `<h1>...</h1>`.

Generate a menu page `index.html` which has relative links to each of the generated HTML files.

New paragraph is separated by a line.

## Example

### Input file `test.txt`

```txt
This is the title


Hello world,
2021

This is a static site

I love programing
```

### Command run

```bash
ssg -i test.txt -s 'https://cdn.jsdelivr.net/npm/water.css@2/out/water.css'
```

### Output file

### `dist/test.html`

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>Home</title>
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"
		/>
	</head>

	<body>
		<h1>Home menu</h1>
		<h2>Summary</h2>
		<ul>
			<li><a href="test.html">test</a></li>
		</ul>
	</body>
</html>
```

### `dist/index.html`

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>This is the title</title>
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"
		/>
	</head>

	<body>
		<h1>This is the title</h1>
		<p>Hello world,2021</p>
		<p>This is a static site</p>
		<p>I love programing</p>
	</body>
</html>
```

## Project Links

**Sample of file generated**: https://text-ssg.vercel.app/
**GitHub Repo**: https://github.com/Kevan-Y/text-ssg
