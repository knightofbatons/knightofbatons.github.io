---
title: Union-Find
date: 2018-02-08
category:
  - 记录
tag:
  - 公开课
  - 算法
---

[UnionFind.pdf](https://d3c33hcgiwev3.cloudfront.net/_b65e7611894ba175de27bd14793f894a_15UnionFind.pdf?Expires=1520035200&Signature=en3Y-PmfIxCkhi3cXcGBZMuOx-fRM8ZexvZvw~jUZwpsK9iEvtN~8~~g0ux3rAGT0zfeJOTjzepAWCaED2v2U-IKYctEK-cTiQy25J9hg19cYGjrSyrOrfoTQlcPYMD63cGsdVsl~kCvcpWzcs0NxN0vbPCF7BUf3s20kCWY-U8_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A)
<!--more-->

## 1. Quick-find

### 1.1 Qucik-find demo
```
before
------
0   1 ——2   3 ——4
|       |   |   |
5 ——6   7   8   9
```
| N     | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|-------|---|:-:|---|---|---|---|--:|---|---|---|
| id[N] | 0 | 1 | 1 | 8 | 8 | 0 | 0 | 1 | 8 | 8 |


union(6,1)


```
after
-----
0   1 ——2   3 ——4
|   |   |   |   |
5 ——6   7   8   9
```
| N     | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|-------|---|:-:|---|---|---|---|--:|---|---|---|
| id[N] | 1 | 1 | 1 | 8 | 8 | 1 | 1 | 1 | 8 | 8 |

### 1.2 Quick-find: java implementation
```
java code
---------

public class QuickFindUF{
    
    private int[] id;
    
    //Set id of each obiect to itself (N array accesses)
    public QuickFindUF(int N){
        id = new int[N];
        for (int i = 0; i < N; i++){
            id[i] = i;
        }
    }

    //Check whether p and q are in the same component (2 array accesses)
    public boolean connected(int p, int q){
        return id[p] == id[q];
    }

    //Change all entries with id[p] to id[q] (at most 2N + 2 array accesses)
    public void union(int p, int q){
        int pid = id[p];
        int qid = id[q];
        for (int i = 0; i < id.length; i++){
            //* if connected to p connect to q 
            if (id[i] == pid) id[i] = qid;
        }
    }
}
```

## 1.3 Quick-find is too slow
Cost model. Number of array accesses (for read or write).

| algorithm  | initialize | union | find |
|------------|------------|:-----:|------|
| quick-find |      N     |   N   |   1  |
↑ order or growth of number of array accesses

Quick-find defect. Union too expensive.

Ex. Takes N^2 array accesses to process sequence of N union commands on N objects.


## 2. Quick-union

### 2.1 Quick-union demo
```
before
------
0   1   9   6   7   8
        /\  |
       2  4 5
          |
          3
```
| N     | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|-------|---|:-:|---|---|---|---|--:|---|---|---|
| id[N] | 0 | 1 | 9 | 4 | 9 | 6 | 6 | 7 | 8 | 9 |


union(3,5)


```
after
-----
0   1   6   7   8
        /\
       9  5       
      /\  
     2  4 
        |
        3
```
| N     | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|-------|---|:-:|---|---|---|---|--:|---|---|---|
| id[N] | 0 | 1 | 9 | 4 | 9 | 6 | 6 | 7 | 8 | 6 |

### 2.2 Quick-union: java implementation
```
java code
---------

public class QuickUnionUF{
    
    private int[] id;
    
    //Set id of each obiect to itself (N array accesses)
    public QuickFindUF(int N){
        id = new int[N];
        for (int i = 0; i < N; i++) id[i] = i;
    }

    //Chase parent pointers until reach root (depth of i array accesses)
    privte int root(int i){
        while (i != id[i]) i = id[i];
        return i;
    }

    //Check if p and q have same root (depth of p and q array accesses)
    public boolean connected(int p, int q){
        return root[p] == root[q];
    }

    //Change root of p to point to root of q (depth of p and q array accesses)
    public void union(int p, int q){
        int i = root(p);
        int j = root(q);
        id[i] = j;
    }
}
```

### 2.3 Quick-union is also too slow
Cost model. Number of array accesses (for read or write)

| algorithm   | initialize | union | find |
|-------------|------------|:-----:|------|
| quick-find  |      N     |   N   |   1  |
| quick-union |      N     |   N↑  |   N  | ← worst case
↑ includes cost of finding roots

Quick-find defect.
union too expensive (N array accesses).
Trees are flat, but too expensive to keep them flat.
Quick-union defect.
Trees can get tall.
Find too expensive (could be N array accesses).


## 3. quick-union Inprovements

### 3.1 Weighting

Data structure. Same as quick-union, but maintain extra array sz[i] to count number of objects in the tree rooted at i.

Find. Identical to quick-union.

Union. Modify quick-union to:
Link root of smaller tree to root of larger tree.
Update the sz[] array.

```
java code
---------
...
    //Change root of p to point to root of q (depth of p and q array accesses)
    public void union(int p, int q){
        int i = root(p);
        int j = root(q);
        if (i == j) return;
        if (sz[i] < sz[j]){
            id[i] = j;
            sz[j] += sz[i];
        }else{
            id[j] = i;
            sz[i] += sz[j];
        }
    }
...
```

Proposition. Depth of any node x is at most lg N.

| algorithm   | initialize | union | find |
|-------------|------------|:-----:|------|
| quick-find  |      N     |   N   |   1  |
| quick-union |      N     |   N↑  |   N  |
| weighted QU |      N     | lg N↑ | lg N |

### 3.2 Path compression

Quick union with path compression. Just after computing the root of p, set the id of each examined node to point to that root.

Two-pass implementation: add second loop to root() to set the id[] of each examined node to the root.

Simpler one-pass variant: Make every other node in path point to its grandparent (thereby halving path length)

```
java code
---------
...
private int root(int i){
    //当其不是根节点时
    while (i != id[i]){
        将其父节点设置为其原本父节点的父节点（原本的祖父节点）
        id[i] = id[id[i]];
        下一个循环检查其新的父节点 （原本的祖父节点）
        i = id[i];
    }
    return i;
}
...
```