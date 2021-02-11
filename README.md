# Web based Desktop component for

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/8363dc6e003b4533bd4b3278854d746f)](https://www.codacy.com/app/francisl/baer?utm_source=github.com&utm_medium=referral&utm_content=francisl/baer&utm_campaign=badger)

!!! This is a prototype/Work In progress. It will change, break things.

Provides a set a layout to build JavaScript application like a native application with containers instead of using noisy grid system

## Goals

- Build an application layout expressively
- Less verbose and requires no knowledge of the style framework.
- Support react and preact


## Installation

### Requirements

- react or preact

`npm install --save preact preact-compat`

For preact, you will need to [configure some alias](https://preactjs.com/guide/switching-to-preact)

## Documentation and Examples

```
git clone git@github.com:francisl/baer.git

cd baer

npm install

npm run storybook
```

### Installation

Its currently not possible to install it through npm (coming)

```
git clone git@github.com:francisl/baer.git

cd baer

npm install

npm run build

npm link

cd [your-project]

npm link baer
```

## The system includes:
- Layout
- Containers

## Widgets

### Layouts
- [X] Layout Horizontal/Vertical
- [ ] GridLayout
- [ ] Spacer

### Containers
- [ ] Tab Switcher
- [X] ScrollView
- [ ] Frame
- [ ] HorizontalScrollView
- [ ] SplitPane


### Widgets

Mainly for test, should you UI framewokr widgets

- [X] Button
- [X] Input

[See License](./LICENSE)
