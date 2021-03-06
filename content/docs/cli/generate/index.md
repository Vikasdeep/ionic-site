---
layout: fluid/docs_base
category: cli
id: cli-generate
command_name: generate
title: Ionic CLI Documentation - generate
header_sub_title: Ionic CLI
---

# `$ ionic generate`

Generate pipes, components, pages, directives, providers, and tabs (ionic-angular >= 3.0.0)
## Synopsis

```bash
$ ionic generate [<type>] [<name>]
```
  
## Details

Automatically create components for your Ionic app.

The given `name` is normalized into an appropriate naming convention. For example, `ionic generate page neat` creates a page by the name of `NeatPage` in `src/pages/neat/`.


Input | Description
----- | ----------
`type` | The type of generator (e.g. `component`, `directive`, `page`, `pipe`, `provider`, `tabs`)
`name` | The name of the component being generated




## Examples

```bash
$ ionic generate 
$ ionic generate component
$ ionic generate directive
$ ionic generate page
$ ionic generate pipe
$ ionic generate provider
$ ionic generate tabs
$ ionic generate component foo
$ ionic generate page Login
$ ionic generate pipe MyFilterPipe
```
