# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug related to infinite loops within the `useEffect` hook.  The bug arises from incorrectly using the state variable inside the `useEffect`'s callback function, causing the effect to continuously re-run and update the state, resulting in an infinite loop. The solution showcases the proper approach to avoid this issue.

## Bug Description

The `bug.js` file contains a React component that attempts to increment a state variable (`count`) within a `useEffect` hook that has no dependencies.  This leads to an infinite loop since the effect re-runs after every state update.

## Solution

The `bugSolution.js` file demonstrates the corrected implementation.  By using the functional update pattern, or by updating `useEffect` with the correct dependencies, the infinite loop is prevented.
