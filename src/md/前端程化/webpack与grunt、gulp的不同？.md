Grunt、Gulp是基于任务运⾏的⼯具： 它们会⾃动执⾏指定的任务，就像流⽔线，把资源放上去然后通过不同插件进⾏加⼯，它们包含活跃的社区，丰富的插件，能⽅便的打造各种⼯作流。

Webpack是基于模块化打包的⼯具: ⾃动化处理模块，webpack把⼀切当成模块，当 webpack 处理应⽤程序时，它会递归地构建⼀个依赖关系图 (dependency graph)，其中包含应⽤程序需要的每个模块，然后将所有这些模块打包成⼀个或多个 bundle。

因此这是完全不同的两类⼯具,⽽现在主流的⽅式是⽤npm script代替Grunt、Gulp，npm script同样可以打造任务流。