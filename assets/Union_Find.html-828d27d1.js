import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as d,c as a,b as e,d as s,e as r,a as l,f as c}from"./app-17df7116.js";const o={},v={href:"https://d3c33hcgiwev3.cloudfront.net/_b65e7611894ba175de27bd14793f894a_15UnionFind.pdf?Expires=1520035200&Signature=en3Y-PmfIxCkhi3cXcGBZMuOx-fRM8ZexvZvw~jUZwpsK9iEvtN~8~~g0ux3rAGT0zfeJOTjzepAWCaED2v2U-IKYctEK-cTiQy25J9hg19cYGjrSyrOrfoTQlcPYMD63cGsdVsl~kCvcpWzcs0NxN0vbPCF7BUf3s20kCWY-U8_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A",target:"_blank",rel:"noopener noreferrer"},u=c(`<h2 id="_1-quick-find" tabindex="-1"><a class="header-anchor" href="#_1-quick-find" aria-hidden="true">#</a> 1. Quick-find</h2><h3 id="_1-1-qucik-find-demo" tabindex="-1"><a class="header-anchor" href="#_1-1-qucik-find-demo" aria-hidden="true">#</a> 1.1 Qucik-find demo</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>before
------
0   1 ——2   3 ——4
|       |   |   |
5 ——6   7   8   9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>N</th><th>0</th><th style="text-align:center;">1</th><th>2</th><th>3</th><th>4</th><th>5</th><th style="text-align:right;">6</th><th>7</th><th>8</th><th>9</th></tr></thead><tbody><tr><td>id[N]</td><td>0</td><td style="text-align:center;">1</td><td>1</td><td>8</td><td>8</td><td>0</td><td style="text-align:right;">0</td><td>1</td><td>8</td><td>8</td></tr></tbody></table><p>union(6,1)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>after
-----
0   1 ——2   3 ——4
|   |   |   |   |
5 ——6   7   8   9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>N</th><th>0</th><th style="text-align:center;">1</th><th>2</th><th>3</th><th>4</th><th>5</th><th style="text-align:right;">6</th><th>7</th><th>8</th><th>9</th></tr></thead><tbody><tr><td>id[N]</td><td>1</td><td style="text-align:center;">1</td><td>1</td><td>8</td><td>8</td><td>1</td><td style="text-align:right;">1</td><td>1</td><td>8</td><td>8</td></tr></tbody></table><h3 id="_1-2-quick-find-java-implementation" tabindex="-1"><a class="header-anchor" href="#_1-2-quick-find-java-implementation" aria-hidden="true">#</a> 1.2 Quick-find: java implementation</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>java code
---------

public class QuickFindUF{
    
    private int[] id;
    
    //Set id of each obiect to itself (N array accesses)
    public QuickFindUF(int N){
        id = new int[N];
        for (int i = 0; i &lt; N; i++){
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
        for (int i = 0; i &lt; id.length; i++){
            //* if connected to p connect to q 
            if (id[i] == pid) id[i] = qid;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-3-quick-find-is-too-slow" tabindex="-1"><a class="header-anchor" href="#_1-3-quick-find-is-too-slow" aria-hidden="true">#</a> 1.3 Quick-find is too slow</h2><p>Cost model. Number of array accesses (for read or write).</p><table><thead><tr><th>algorithm</th><th>initialize</th><th style="text-align:center;">union</th><th>find</th></tr></thead><tbody><tr><td>quick-find</td><td>N</td><td style="text-align:center;">N</td><td>1</td></tr><tr><td>↑ order or growth of number of array accesses</td><td></td><td style="text-align:center;"></td><td></td></tr></tbody></table><p>Quick-find defect. Union too expensive.</p><p>Ex. Takes N^2 array accesses to process sequence of N union commands on N objects.</p><h2 id="_2-quick-union" tabindex="-1"><a class="header-anchor" href="#_2-quick-union" aria-hidden="true">#</a> 2. Quick-union</h2><h3 id="_2-1-quick-union-demo" tabindex="-1"><a class="header-anchor" href="#_2-1-quick-union-demo" aria-hidden="true">#</a> 2.1 Quick-union demo</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>before
------
0   1   9   6   7   8
        /\\  |
       2  4 5
          |
          3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>N</th><th>0</th><th style="text-align:center;">1</th><th>2</th><th>3</th><th>4</th><th>5</th><th style="text-align:right;">6</th><th>7</th><th>8</th><th>9</th></tr></thead><tbody><tr><td>id[N]</td><td>0</td><td style="text-align:center;">1</td><td>9</td><td>4</td><td>9</td><td>6</td><td style="text-align:right;">6</td><td>7</td><td>8</td><td>9</td></tr></tbody></table><p>union(3,5)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>after
-----
0   1   6   7   8
        /\\
       9  5       
      /\\  
     2  4 
        |
        3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>N</th><th>0</th><th style="text-align:center;">1</th><th>2</th><th>3</th><th>4</th><th>5</th><th style="text-align:right;">6</th><th>7</th><th>8</th><th>9</th></tr></thead><tbody><tr><td>id[N]</td><td>0</td><td style="text-align:center;">1</td><td>9</td><td>4</td><td>9</td><td>6</td><td style="text-align:right;">6</td><td>7</td><td>8</td><td>6</td></tr></tbody></table><h3 id="_2-2-quick-union-java-implementation" tabindex="-1"><a class="header-anchor" href="#_2-2-quick-union-java-implementation" aria-hidden="true">#</a> 2.2 Quick-union: java implementation</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>java code
---------

public class QuickUnionUF{
    
    private int[] id;
    
    //Set id of each obiect to itself (N array accesses)
    public QuickFindUF(int N){
        id = new int[N];
        for (int i = 0; i &lt; N; i++) id[i] = i;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-quick-union-is-also-too-slow" tabindex="-1"><a class="header-anchor" href="#_2-3-quick-union-is-also-too-slow" aria-hidden="true">#</a> 2.3 Quick-union is also too slow</h3><p>Cost model. Number of array accesses (for read or write)</p><table><thead><tr><th>algorithm</th><th>initialize</th><th style="text-align:center;">union</th><th>find</th></tr></thead><tbody><tr><td>quick-find</td><td>N</td><td style="text-align:center;">N</td><td>1</td></tr><tr><td>quick-union</td><td>N</td><td style="text-align:center;">N↑</td><td>N</td></tr><tr><td>↑ includes cost of finding roots</td><td></td><td style="text-align:center;"></td><td></td></tr></tbody></table><p>Quick-find defect.<br> union too expensive (N array accesses).<br> Trees are flat, but too expensive to keep them flat.<br> Quick-union defect.<br> Trees can get tall.<br> Find too expensive (could be N array accesses).</p><h2 id="_3-quick-union-inprovements" tabindex="-1"><a class="header-anchor" href="#_3-quick-union-inprovements" aria-hidden="true">#</a> 3. quick-union Inprovements</h2><h3 id="_3-1-weighting" tabindex="-1"><a class="header-anchor" href="#_3-1-weighting" aria-hidden="true">#</a> 3.1 Weighting</h3><p>Data structure. Same as quick-union, but maintain extra array sz[i] to count number of objects in the tree rooted at i.</p><p>Find. Identical to quick-union.</p><p>Union. Modify quick-union to:<br> Link root of smaller tree to root of larger tree.<br> Update the sz[] array.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>java code
---------
...
    //Change root of p to point to root of q (depth of p and q array accesses)
    public void union(int p, int q){
        int i = root(p);
        int j = root(q);
        if (i == j) return;
        if (sz[i] &lt; sz[j]){
            id[i] = j;
            sz[j] += sz[i];
        }else{
            id[j] = i;
            sz[i] += sz[j];
        }
    }
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Proposition. Depth of any node x is at most lg N.</p><table><thead><tr><th>algorithm</th><th>initialize</th><th style="text-align:center;">union</th><th>find</th></tr></thead><tbody><tr><td>quick-find</td><td>N</td><td style="text-align:center;">N</td><td>1</td></tr><tr><td>quick-union</td><td>N</td><td style="text-align:center;">N↑</td><td>N</td></tr><tr><td>weighted QU</td><td>N</td><td style="text-align:center;">lg N↑</td><td>lg N</td></tr></tbody></table><h3 id="_3-2-path-compression" tabindex="-1"><a class="header-anchor" href="#_3-2-path-compression" aria-hidden="true">#</a> 3.2 Path compression</h3><p>Quick union with path compression. Just after computing the root of p, set the id of each examined node to point to that root.</p><p>Two-pass implementation: add second loop to root() to set the id[] of each examined node to the root.</p><p>Simpler one-pass variant: Make every other node in path point to its grandparent (thereby halving path length)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>java code
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40);function h(b,m){const i=n("ExternalLinkIcon");return d(),a("div",null,[e("p",null,[e("a",v,[s("UnionFind.pdf"),r(i)])]),l("more"),u])}const g=t(o,[["render",h],["__file","Union_Find.html.vue"]]);export{g as default};
