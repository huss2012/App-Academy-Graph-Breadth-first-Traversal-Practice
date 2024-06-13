const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
}

function printBreadthFirst(start) {
    // your code here
// 1. Creating a queue and enqueue the starting node.
// 2. Create a set to store visited nodes.
// 3. While the queue is not empty, repeate steps 4 - 6.
// 4. Dequeue the first node.
// 5. DO THE THINK THAT YOU NEED TO FOR THE DEQUEUED NODE.
// 6. For each unvisited neighbor, add it to the visited nodes and to the back of the queue.
    let queue = [];
    queue.push(start);
    let visitedNodeSet = new Set();
    visitedNodeSet.add(queue[0]);
    while (queue.length > 0) {
        let currentNode = queue.shift();
        console.log(currentNode);
        for (let i = 0; i < adjList[currentNode].length; i++) {
            let neighbor = adjList[currentNode][i];
            if (!visitedNodeSet.has(neighbor)) {
                visitedNodeSet.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}

//----------Local Test Area------------------
console.log("First Test:")
printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
// One possible solution:  3, 2, 4, 1, 5, 6
console.log("Second Test:")
printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
// One possible solution:  6, 4, 3, 5, 2, 1
console.log("Third Test:")
printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
// One possible solution:  4, 3, 5, 6, 2, 1
