# js-select-from-object
A JS util to select a property from an object, and if it doesn't exist, return a default value, instead of throwing an error or returning an undefined value.

[![npm version](https://badge.fury.io/js/js-select-from-object.svg)](https://badge.fury.io/js/js-select-from-object)

## Installation

To start using this library, first install the package:

```bash
npm install react-fluxible-utils --save
```

## Usage

 An example of how it can be used:

```javascript
import select from 'js-select-from-object';

const o = {
  foo: 'bar',
  xxx: {
    yyy: 'zzz'
  }
};

select(o, 'foo', 'wut?'); // => returns 'bar'
select(o, 'xxx.yyy', 'wut?'); // => returns 'zzz'
select(o, 'aaa.bbb'); // => returns null
select(o, 'aaa.bbb', 'wut?'); // => returns 'wut?'
```

## Todo

* Allow for selection of arrays within objects
