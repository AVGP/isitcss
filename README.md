# Is it ITCSS?

A little tool to check if your stylesheets follow ITCSS,
[Harry Roberts]' school of thought for a better CSS organisation and utilisation.

## What is ITCSS?

[ITCSS](https://www.youtube.com/watch?v=1OKZOV-iLj4&hd=1) is a school of thought
that aims at organising CSS in a maintainable, extensible and predictable manner.

ITCSS stands for "Inverted Triangle CSS" and basically means all CSS is organised
from lower specificity (i.e. broader impact) to higher specificity (i.e. smaller impact).

There are seven layers specified, all optional.

1. **Settings**: Global variables, config switches
2. **Tools**: Default mixins and functions
3. **Generic**: Ground-zero styles (Normalize.css, resets, box-sizing)
4. **Base**: Unclassed HTML elements (type selectors)
5. **Objects**: Cosmetic-free design patterns
6. **Components**: Designed components, chunks of UI
7. **Trumps**: Helpers and overrides

Layers one and two are meant to be used for postprocessors.

## Status of `isitcss`

It's a work-in-progress and is very limited yet, contributions absolutely welcome!

Current, known limitations:

* only listing a single selector per line

## Installation of `isitcss`

It can be globally installed via `npm install -g isitcss` or locally for usage with npm scripts.

## Usage of `isitcss`

`isitcss your-stylesheet.css`

You can also run it in `quiet` mode that outputs the number of violations in the exit code instead of STDOUT:
`isitcss --quiet your-stylesheet.css`
