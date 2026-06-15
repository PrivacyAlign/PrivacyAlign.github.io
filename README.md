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

These files are served from the **`gh-pages`** branch at the repo root, so the
page is published at `https://servicenow.github.io/PrivacyAlign/`. Enable Pages
for the `gh-pages` branch (root) in the repository settings.

## Remaining placeholders

- **arXiv ID**: the Paper button and BibTeX use `arxiv.org/abs/XXXX.XXXXX` /
  `eprint = {XXXX.XXXXX}`. Replace with the real identifier once available.
- **Dataset**: the Dataset button points at
  `https://huggingface.co/datasets/ServiceNow/PrivacyAlign`; make that dataset
  public before launch.
- Authors, code link (`github.com/ServiceNow/PrivacyAlign`), and figures are final.
