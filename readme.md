# Removing a Node from a Binary Search Tree (BST)

BST deletion has **three cases**, depending on the number of children of the node being removed.

## 1. No Children (Leaf Node)

- The node has no left or right child.
- **Return `null`** to disconnect it from its parent.

```js
if (node.left === null && node.right === null) {
  return null;
}
```

## 2. One Child

- The node has only one child.
- **Return the existing child** so the parent can link directly to it.

```js
if (node.left === null) return node.right;
if (node.right === null) return node.left;
```

## 3. Two Children

- Find the **in-order successor**: the smallest node in the right subtree.
- Copy its value into the node being deleted.
- Recursively delete the original successor from the right subtree.

```js
const successor = this.#getSmallest(node.right);
node.data = successor.data;
node.right = this.#removeNode(node.right, successor.data);
return node;
```

> **Key idea:** `#removeNode()` returns the updated subtree root. The caller assigns that return value to `node.left`, `node.right`, or `this.root` to keep the BST connected.
>

