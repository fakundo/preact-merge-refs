# preact-merge-refs

[![npm](https://img.shields.io/npm/v/preact-merge-refs.svg)](https://www.npmjs.com/package/preact-merge-refs)

Simple utility function for merging Preact refs.

## Installation

```
npm i preact-merge-refs
```

## Usage

```js
import { useRef } from 'preact/hooks';
import { mergeRefs } from 'preact-merge-refs'

const refFunc = (node) => {};

export const TestComponent() {
  const ref1 = useRef();
  const ref2 = useRef();
  return (
    <div ref={mergeRefs([ref1, ref2, refFunc])} />
  );
}
```

## API

```ts
export declare function mergeRefs<T = any>(
  refs: Array<Preact.Ref<T>>
): Preact.RefCallback<T>;
```
