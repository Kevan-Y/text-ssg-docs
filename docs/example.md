---
sidebar_position: 4
---

# Example

## Example with command line

Input file: `test.txt`

```txt
This is the title


Hello world,
2021

This is a static site

I love programing
```

Command ran

```bash
ssg -i test.txt -s 'https://cdn.jsdelivr.net/npm/water.css@2/out/water.css' -l en-US
```

Output file:

`dist/index.html`

```html
<!DOCTYPE html>
<html lang="en-US">
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

`dist/test.html`

```html
<!DOCTYPE html>
<html lang="en-US">
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

## Example with JSON config file

Input file: `test.txt`

```txt
This is the title


Hello world,
2021

This is a static site

I love programing
```

Config file: `config.json`

```json
{
	"lang": "en-CA",
	"input": "test.txt",
	"output": "./newDist",
	"stylesheet": "https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"
}
```

Command ran

```bash
ssg -c config.json
```

Output file:

`newDist/index.html`

```html
<!DOCTYPE html>
<html lang="en-CA">
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

`newDist/test.html`

```html
<!DOCTYPE html>
<html lang="en-CA">
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
