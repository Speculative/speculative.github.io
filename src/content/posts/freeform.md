---
title: FreeForm - Flexibly Augmenting Formulas with Synchronized Markup and Graphical Edits
---

_Jeffrey Tao_, Litao Yan, Jessica Shi, Mia Ginsberg, Andrew Head<br />CHI 2025

[[PDF](/publications/chi25-freeform.pdf)]

# Abstract

Authors of typeset formulas augment those formulas to make them easier to understand. When they do
so, they trade off between using markup tools like LaTeX and formula-unaware graphical editors. In
this paper, we explore how editing tools could combine the best affordances of both kinds of tools.
We develop FreeForm, a projectional editor wherein authors can augment formulas—with color, labels,
spacing, and more—across multiple synchronized representations. Augmentations are created
graphically using direct selections and compact menus. Those augmentations propagate to LaTeX
markup, which can itself be edited and easily exported. In two lab studies, we observe the value of
our editor versus baselines of a widely-used LaTeX document editor and a state-of-the-art formula
augmentation tool. Finally, we make recommendations for the design of projectional markup
augmentation editors.

<img src="/posts/freeform_figure.svg" />

An example of augmenting a formula with FreeForm. Authors can quickly add and edit LaTeX-based
formula code in the left pane (①) and preview the rendered result in the center pane (②). Graphical
edits allow authors to select elements of the formula directly (③) and apply augmentations such as
colors and labels via a menu (④). Edits are synchronized in both directions between the code and
graphics editors, backed by a syntax-tree-based representation. The right pane shows this tree
hierarchy and facilitates navigation and editing (⑤).
