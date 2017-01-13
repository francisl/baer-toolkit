# Web based Desktop component for react and preact

Provides a set a widgets to build javascript application

## Goals
- Build UI in a flash
- No custom css or adding class to elements is required to build the application
- Themable
- Optimize for speed and size
- Aligment, position and parameters inspire by native apps
- Make it possible to build a UI graphically

## Installation

### Requirements

- react or preact

`npm install --save aphrodite`

`npm install --save preact preact-compat`

For preact, you will need to [configure some alias](https://preactjs.com/guide/switching-to-preact)

- aphrodite (will be install by this package)

### Installation

Its currently not possible to install it through npm (coming)

```
git clone git@github.com:francisl/baer-toolkit.git

cd baer-toolkit

npm install

npm run build

npm link

cd [your-project]

npm link baer-toolkit
```

## The system includes:
- Layout 
- Containers
- Menu/Navigation
- Components (UI widgets)
- Buttons
- Table
- Window

## Widgets

### Layout
- [ ] HorizontalView/VerticalView
- [ ] SizeablePane

### Containers
- [ ] Tab Switcher
- [ ] GridView
- [ ] ScrollView
- [ ] ListView

### Menu/Nav
- [ ] Menu Bar
- [ ] Toolbar
- [ ] Grouped side menu
- [ ] TreeView
- [ ] ActionBar

### Components
- [ ] Input
- [ ] Password
- [ ] Date
- [ ] Time
- [ ] TextArea
- [ ] Label
- [ ] Image
- [ ] Message
- [ ] ProgressBar
- [ ] StatusBar
- [ ] Slider
- [ ] Spinner

### Buttons
- [ ] Button
- [ ] Toggle
- [ ] Dropdown
- [ ] Checkbox
- [ ] GroupedButton (toggle, multi)
- [ ] RadioGroup
- [ ] RadioButton
- [ ] MenuButton
- [ ] ColorPickerButton

### Data
- [ ] Table

### Window
- [ ] alert
- [ ] Info (with tab)
- [ ] color picker

### Desktop Feature
- [ ] menu
- [ ] assistant 
- [ ] file selection
- [ ] print dialog


[See License](./LICENSE)
