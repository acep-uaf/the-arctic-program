# thearcticprogram.net (in progress)

## Project Overview
The ARCTIC Program website provides information about energy research, technology development, and partnerships, leveraging Hugo for static site generation, and includes custom features to meet the needs of the program.

## Requirements
To run this project locally, you will need the following:
- [**Hugo**](https://gohugo.io/installation/)
- [**Git**](https://git-scm.com/downloads)
- [**npm**](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) - v18+

## Draft Site on GitHub Pages

[acep-uaf.github.io/the-arctic-program](https://acep-uaf.github.io/the-arctic-program)

The current draft of the site is deployed using GitHub Pages. Deployment is automated via GitHub Actions, whenever changes are made to the `main` branch.

## Usage

1. Clone the repository with submodules (piko theme):
```bash
git clone --recurse-submodules https://github.com/acep-uaf/the-arctic-program
```

2. Navigate to the project directory:
```bash
cd the-arctic-program
```

3. Install `npm` dependencies"
```bash
npm install
```

4. Start the server:
```bash
hugo serve
```
If you already cloned the repo without submodules, you can pull the submodule later by running:

```bash
git submodule update --init --recursive
```

## Assets

This project makes use of Hugo Pipes and stores assets in the `assets/` directory. The project is currently using `npm` to manage external dependencies. The `node_modules/` directory is mounted to the `assets/` directory, allowing import statments from npm packages.

`@import "../bootstrap/scss/bootstrap";`

Dependencies from [Piko Theme](https://github.com/heksagonnet/piko) third-party libraries and plugins are located in `static/plugins/`.

Future plans may consider migrating to Hugo Modules for dependency management, which could provide additional flexibility and performance benefits for handling external libraries and modules.

### Dependencies
#### Manage by [Piko Theme](https://github.com/heksagonnet/piko) 
  * [Pico CSS Framework](https://picocss.com)
  * [Feather Icons](https://feathericons.com)
  * [fuse.js](https://www.fusejs.io)
  * [highlight.js](https://highlightjs.org)
#### Managed by `npm`
- [PhotoSwipe](https://photoswipe.com): A ligthbox library for displaying images.
- [Bootstrap v5.3](https://getbootstrap.com): CSS framework for styling.

