---
title: Hodllive
---

# Introduction

In early 2020, VTubers rapidly began to rise in popularity. In VTuber culture, hitting certain
milestone subscriber counts is cause for celebration. I found myself manually visiting many VTubers'
channels every week to check their current subscriber counts to see how close they were to the next
milestone.

The first group of VTubers that I watched consistently was Hololive, and the subscriber charts have
a tendency to go up and to the right, hence "HODLLive".

# The self-updating static site pattern

There are probably other people out there using this pattern, but I've never seen it written about.
Hodllive is designed to be a _self-updating_ static website.

Aside from storing and retrieving the data set, the app is well-suited to be hosted as a static
website.

Hodllive uses Vue served from a CDN, and all of the application logic is contained in a single JS
file, so there isn't a build step[^1]. "Deploying" new versions of the app is as simple as
committing and pushing to GitHub.

[^1]: Holocraft uses a variant of this pattern with a svelte build step.

# Scraping Wayback Machine

In July of 2022, I became interested in expanding Hodllive to include Nijisanji members. This was a
huge undertaking: Hololive had few enough members that I was able to scrape names, YouTube channel
URLs, generation membership, and colors manually. Nijisanji has nearly 200 members across all of its
branches (excluding VirtuaReal, who I excluded because they stream on Bilibili, which I don't have a
subscriber retrieval script for).

# Credits

Hodllive's cute favicon of Roboco-san's glasses was made by [PJ Rosa](https://pj.codes/)
