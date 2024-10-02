# thearcticprogram.net (in progress)

## Project Overview
The ARCTIC Program website provides information about energy research, technology development, and partnerships, leveraging Hugo for static site generation, and includes custom features to meet the needs of the program.

## Requirements
To run this project locally, you will need the following:
- [**Hugo**](https://gohugo.io/installation/)
- [**Git**](https://git-scm.com/downloads)

## Usage
Clone the repo with submodules:

```bash
# Clone the repository with submodules (piko theme)
git clone --recurse-submodules https://github.com/acep-uaf/the-arctic-program

# cd to the project directory
cd the-arctic-program

# Start the local server
hugo serve
```

If you already cloned the repo without submodules, you can pull the submodule later by running:

```bash
git submodule update --init --recursive
```

## Assets

Most assets are processed using Hugo’s asset pipeline and stored in the `assets/` directory. Some third-party libraries and plugins are located in `static/plugins/` for direct use. Future plans may include using `npm` for better dependency/asset management.

### Dependencies
- [Piko Theme](https://github.com/heksagonnet/piko) 
  * [Pico CSS Framework](https://picocss.com)
  * [Feather Icons](https://feathericons.com)
  * [fuse.js](https://www.fusejs.io)
  * [highlight.js](https://highlightjs.org)
- [PhotoSwipe](https://photoswipe.com): A ligthbox library for displaying images.
- [Bootstrap v5.3](https://getbootstrap.com): CSS framework for styling.

## Draft Site on GitHub Pages

[acep-uaf.github.io/the-arctic-program](https://acep-uaf.github.io/the-arctic-program)

The current draft of the site is deployed using GitHub Pages. Deployment is automated via GitHub Actions, whenever changes are made to the `main` branch.
