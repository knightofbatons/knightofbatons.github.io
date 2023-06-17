---
title: MBA
date: 2017-01-03
category:
  - 记录
tag:
  - 数据分析
---

购物篮分析，备忘
<!--more-->

在地铁上看《瓦尔登湖》

“一个月过后两个孩子谁将获得最大的发展：一个挖掘矿物，通过冶炼，为自己制造了一把折叠刀，
其间，为了实现这个目的尽可能进行了大量的阅读；另一位则置身于学院，参加了关于炼金术的讲座，
后来从他父亲那里接受了一把落杰斯特折叠刀。哪一位又最有可能被刀子割破手指呢？”

这本书于我很神奇的地方就是总能让我停下读它，激发我去做一些别的什么
于是我在地铁上读了从那里借来的，在家没怎么看的动物书《数据算法》
人的记忆曲线陡的吓人，到学校就着手记录了一下最近正好也能用上的样子。

## MBA 目标
有五个商品
``` bash
{A,B,C,D,E}
```
对应6个交易（可以通过交易记录获取）
``` bash
Transaction 1 ：A,C
Transaction 2 ：B,D
Transaction 3 ：A,C,E
Transaction 4 ：C,E
Transaction 5 ：A,B,E
Transaction 6 ：B,E
```
目标为构建项集 F1 和 F2 
例子中构建 F1 和 F2 所用最小支持度为 2 所以去除了支持度为 1 的 [D,1] 
``` bash
F1 = {[C,3],[A,3],[B,3],[E,4]}
F2 = {[<A,C>,2],[<C,E>,2],[<A,E>,2],[<B,E>,2]}
```
项集 F1 和 F2 可以生成交易的 [关联规则](http://www.bing.com/knows/search?q=%E5%85%B3%E8%81%94%E8%A7%84%E5%88%99&mkt=zh-cn&FORM=BKACAI)
数据挖掘中，关联规则有两个度量标准支持度 Support 置信度 Confidence [解释：博客园](http://www.cnblogs.com/bobsoft/articles/2714561.html) [解释：网易博客](http://nwsuafer.blog.163.com/blog/static/18359836120106130556633/)

### 1. 项集可以解答的问题
哪些商品会被一起购买？
商品如何邻近放置？
等等

### 2. 使用 MapReduce 的 MBA
我们收集到这样的信息
``` bash
Transaction 1 ：蛋糕，冰淇淋，咖啡，苹果
Transaction 2 ：鸡肉，披萨，咖啡，面包
Transaction 3 ：书包，小苏打，刮胡刀，蛋糕，百事可乐
Transaction 4 ：书包，象棋，打印纸，牛奶
等等
```
我们需要的输出
二阶
``` bash
(蛋糕，咖啡) 9709
(小苏打，鸡蛋) 7524
(书包，牛奶) 6666
(象棋，苹果) 2333
等等
```
三阶
``` bash
(蛋糕，咖啡，鸡蛋) 9709
(小苏打，鸡蛋，书包) 7524
(书包，牛奶，象棋) 6666
(象棋，苹果，鸡蛋) 2333
等等
```
### 3. 其中列出所有两两三三组合的问题
需要给组合计数，首先需要分出有哪些不同的组合，这是一个经典数学问题了
这里需要注意的是
``` bash
Transaction 1 ：蛋糕，冰淇淋，咖啡
Transaction 2 ：冰淇淋，咖啡，蛋糕
```
这种不同记录顺序的相同交易会被计算出
``` bash
{[(蛋糕,冰淇凌)，1],[(蛋糕,咖啡)，1],[(冰淇凌,咖啡)，1]}
{[(冰淇凌,咖啡)，1],[(冰淇凌,蛋糕)，1],[(咖啡,蛋糕)，1]}
```
这样是不对的，有一些相同的 KEY 被区别开了，所以需要按统一规则排序再进行计算就不会出现不同的 KEY 其实是一件事了

### 4. 尝试编写
书上的代码比较简洁（缺点东西），我照着实现了一下，具体用的话改改输入输出应该就可以了（现在是从 HDFS 输入和输出）
[GitHub](https://github.com/knightofbatons/HadoopMBATest.git)
输入
``` bash
crackers,bread,banana
crackers,coke,butter,coffee
crackers,bread
bread,crackers
crackers,bread,coffee
butter,coke
butter,coke,bread,crackers
```
运行
``` bash
hadoop jar /home/HadoopTest.jar MBADriver /MBA/input /MBA/output 2
```
输出
``` bash
[banana, bread]	1
[banana, crackers]	1
[bread, butter]	1
[bread, coffee]	1
[bread, coke]	1
[bread, crackers]	5
[butter, coffee]	1
[butter, coke]	3
[butter, crackers]	2
[coffee, coke]	1
[coffee, crackers]	2
[coke, crackers]	2
```