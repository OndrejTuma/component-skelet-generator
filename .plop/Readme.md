# How to use plop

## What is plop anyway?

Plop is a mini framework for generating code. It is based on [Inquirer](https://www.npmjs.com/package/inquirer) and [Handlebars](https://www.npmjs.com/package/handlebars).

## How it works

plop runtime boils down to two simple steps:

1. What to generate (choosing generator)
1. Which rules to apply (choosing parameters from prompts)

## Why do we need it?

The most straightforward example would be for automatic generating component skelets.

There is a lot of places where we repeat ourselves or copy+paste stuff for extending functionality, for which plop should be better fit

## Using plop

You can either use simplified version of command:

```
yarn plop
```

which will take you through the entire process.

Or, after a while, when you get more comfortable using it, you can save a little time by passing parameters otherwise obtained through cli input

```
yarn plop {generator name} [{generator prompts}] 
```

You can find each generator's prompt inside `frontend/__plop__/generators`

## Examples

Stateless component **Test**
```
yarn plop stateless Test
```

Stateful component **Test** into `core/components`
```
yarn plop stateful Test core/components
```

Stateful component **Test** with mobx `generalStore`
```
yarn plop statefulMobx Test 'generalStore' core/components
```

But hey, its always easier to use the GUI:)