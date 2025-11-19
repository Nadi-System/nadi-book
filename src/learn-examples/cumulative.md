# Cumulative Sum

Here we can use the stream ordering formula to calculate the stream order for each node:

```task run image ../output/cumulative-1.svg
!network load_str("
!d1 -> d2
!d3 -> g1
!d2 -> g1
!g1 -> d4
!g2 -> d4
!d4 -> g3
!");
node<inputsfirst>.stream_ord = max(inputs.stream_ord, 1) + int(count(inputs._?) > 1);
!network typst.compile(typst.table("Name => {NAME}\nstream_ord => {stream_ord}"), "./output/cumulative-1.svg")
```

The first part takes the maximum order of the input nodes, then the second part `int(count(inputs._?) > 1)` checks if there are more than one input, adding one to the order when multiple streams combine into one. You can use the funciton `inputs_count()` instead of `count(inputs._?)` to do the same thing.

That is the core of the NADI Task System, you can write functions that have their own logic and then load them into the system. You can then use the syntax and network based analysis methods of NADI using those functions.

And of course, we can visualize the different order of streams for easier understanding.

```task run image ../output/cumulative-2.svg
!network load_str("
!d1 -> d2
!d3 -> g1
!d2 -> g1
!g1 -> d4
!g2 -> d4
!d4 -> g3
!");
!node<inputsfirst>.stream_ord = max(inputs.stream_ord, 1) + int(count(inputs._?) > 1);
node.visual.nodesize = 2 + stream_ord;
node(stream_ord == 1).visual.nodecolor = "green";
node(stream_ord == 2).visual.nodecolor = "blue";
node(stream_ord == 3).visual.nodecolor = "red";

!network typst.compile(typst.table("Name => {NAME}\nstream_ord => {stream_ord}"), "./output/cumulative-2.svg")
```
