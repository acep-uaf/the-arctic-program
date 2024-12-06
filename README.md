# thearcticprogram.net

## Project Overview
The ARCTIC Program website provides information about energy research, technology development, and partnerships, leveraging Hugo for static site generation, and includes custom features to meet the needs of the program.

## Requirements
To run this project locally, you will need the following:
- [**Hugo**](https://gohugo.io/installation/) - extended_0.128.0
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

`import PhotoSwipe from '../photoswipe/dist/photoswipe.esm.js';`

Dependencies from [Piko Theme](https://github.com/heksagonnet/piko) third-party libraries and plugins are located in `static/plugins/`.

### Dependencies
#### Manage by [Piko Theme](https://github.com/heksagonnet/piko) 
  * [Pico CSS Framework](https://picocss.com)
  * [Feather Icons](https://feathericons.com)
  * [highlight.js](https://highlightjs.org)
#### Managed by `npm`
- [PhotoSwipe](https://photoswipe.com): A ligthbox library for displaying images.

## Updating Content

### Update Partners

Each partner has a dedicated folder within the `content/partners/` directory. Partner-specific content is managed through leaf bundles, which include:
- An `index.md` file for partner metadata and content.
- A logo file.

The structure for a partner’s folder looks like this:
```bash
content/partners/
├── partner-example
│   ├── partner-logo.png     # Partner logo
│   └── index.md             # Metadata and content
```

#### Update logo:
  1. Save the new logo file in the respective partner’s leaf bundle directory under `content/partners/`.
  2. Open `index.md` and set the `logo` parameter in the front matter to reference the logo file name.
  ```toml
  +++
  logo = "partner-logo.png"
  +++
  ```

#### Update content:
- Modify or add metadata or content such as title, description, or links in the `index.md` file.


### Update Background Images
Each page bundle has a background image that is referenced in the `_index.md` (`index.md` for About Page) front matter using the `heroBackgroundImage` and `heroBackgroundImageCredit` parameters. To update the background image:
1. **Add the New Background Image**
  - Save the new image in the same folder as the `_index.md` file for the respective page bundle.
    - **Special Case for Home Page**: Images for the home page can be saved in `content/indexImages/`
2. **Update the Front Matter**
  - Open the `_index.md` or `index.md` file.
  - Update the `heroBackgroundImage` parameter with the name of the new image.
  - Provide proper photo credits by adding or updating the `heroBackgroundImageCredit` parameter.

  ```toml
  +++
  heroBackgroundImage = "example-backgroundImage.png"
  heroBackgroundImageCredit = "John Smith"
  +++
  ```

### Linking Partners to Foundational Activities
To link a foundational activity to specific partners, you must add the partner’s id (found in the partner’s front matter) to the partners list parameter in the foundational activity’s front matter. This establishes the connection between the foundational activity and the relevant partners.

1. Locate the Partner `id` in it's `index.md` file in `content/partners/`
```toml
+++
id = "partner-2"
+++
```

2. Update the Foundational Activity
    - Open the relevant foundational activity's file in `content/foundationalActivities/`
    - Add parnter's `id` to the `partners` list in the front matter.
```toml
+++
partners = ["partner-1", "partner-2"]   # Add Partner ID here
+++
```