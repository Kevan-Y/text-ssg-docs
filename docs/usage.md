---
sidebar_position: 2
---

# Usage

## Features

- Supports stylesheets. By passing a url of stylesheet to `-s` or `--stylesheet`, if not specified it will use a default stylesheet (See usage).
- Supports titles. If the first line is followed by two blank lines, it will populate the `<title>...</title>` and `<h1>...</h1>`.
- Supports specific output. By passing an existing folder to `-o` or `--output`, if not specified it will generate to `dist` folder (See usage).
- Supports deep tree of files and folders. If the user specifies a folder for `--input` or `-i`
- Generate a menu page `index.html` which has relative links to each of the generated HTML files.
- New paragraph is separated by a line.
- Supports language code for HTML tag lang attribute. By passing a language code to `-l` or `--lang`, if not specified it will use a default lang (See usage).
- Full markdown support with highlight
- Configuration support: User can specify multiple configuration in one json file and pass the file with `-c` or `--config`.

## Command samples

```bash
ssg --input <path>
```

```bash
ssg --input <path> --output <path>
```

```bash
ssg --input <path> --output <path> --stylesheet <URL>
```

```bash
ssg --input <path> --output <path> --stylesheet <URL> --lang <languageCode>
```

```bash
ssg -i <path> -o <path> -s <URL> -l <languageCode>
```

```bash
ssg -c <path>
```

## Commands Supported

```none
  _____                 _                 ____    ____     ____
 |_   _|   ___  __  __ | |_              / ___|  / ___|   / ___|
   | |    / _ \ \ \/ / | __|    _____    \___ \  \___ \  | |  _
   | |   |  __/  >  <  | |_    |_____|    ___) |  ___) | | |_| |
   |_|    \___| /_/\_\  \__|             |____/  |____/   \____|

Options:
    -v, --version     Show version number            			          [boolean]
    -h, --help        Show help                      		   	          [boolean]
    -i, --input       Folder/File input location    	                  [string] [required]
    -s, --stylesheet  URL to a CSS stylesheet         			          [string]
    -o, --output      Folder output location                              [string] [default: "./dist"]
    -l, --lang        HTML lang tag                                       [string] [default: "en-CA"]
    -c, --config      Folder/File configuration JSON file location        [string]
```
