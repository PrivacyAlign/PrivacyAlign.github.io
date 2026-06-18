# PrivacyAlign Project Page

Self-contained static project page (Nerfies template lineage) for **PrivacyAlign**.

Open `index.html` in a browser to view it locally.

## Files

- `index.html`: page content and section order
- `failures.html`: full privacy failure examples from dataset records and frontier evaluation outputs (all scenarios are synthetic)
- `static/css/site.css`: responsive layout and visual styling
- `static/js/site.js`: BibTeX copy button behavior
- `static/images/`: project figures

## Deployment (GitHub Pages)

This is a self-contained static site: GitHub Pages can serve it directly from
the repository root. The `.nojekyll` file tells GitHub Pages not to run Jekyll.

To publish it as the organization site at `https://PrivacyAlign.github.io/`:

1. Create a repository under the `PrivacyAlign` GitHub organization named
   `PrivacyAlign.github.io`.
2. Push the contents of this directory to that repository. The site should live
   at the repository root, with `index.html` at the top level.
3. In the GitHub repository settings, open **Pages** and set the source to the
   branch containing these files, usually `main` or `gh-pages`, served from
   `/ (root)`.

If you instead create a normal project repository under the organization, such
as `PrivacyAlign/project-page`, GitHub Pages will publish it at
`https://PrivacyAlign.github.io/project-page/` rather than the root domain.

## Remaining placeholders

- **arXiv ID**: the Paper button and BibTeX use `arxiv.org/abs/XXXX.XXXXX` /
  `eprint = {XXXX.XXXXX}`. Replace with the real identifier once available.
- **Dataset**: the Dataset button points at
  `https://huggingface.co/datasets/ServiceNow/PrivacyAlign`; make that dataset
  public before launch.
- Authors, code link (`github.com/ServiceNow/PrivacyAlign`), and figures are final.
