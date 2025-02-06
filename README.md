# React 19 useEffect Cleanup Issue: Memory Leak

This repository demonstrates a common mistake when using the `useEffect` hook in React 19, leading to memory leaks.  The example shows an incorrect cleanup function, failing to properly clear an interval, causing a memory leak.

## Bug Description:

The primary issue lies within the first `useEffect` hook.  It attempts a cleanup, but it lacks the crucial logic to stop an interval started elsewhere. While the second `useEffect` correctly clears its interval, the missing cleanup in the first one persists, potentially leading to unwanted side effects and memory leaks.

## Bug Reproduction:

1. Clone this repository.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Observe that the counter continuously increments even after unmounting the component, indicating a memory leak.

## Solution:

The solution involves fixing the cleanup function in the first `useEffect` hook. A proper cleanup function must handle any resources acquired, and in this case stop any timers or intervals.