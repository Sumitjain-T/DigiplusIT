Problem Statement: 
Develop an single page web application to demonstrate the functionality of hierarchical tree formation. 
User should be able to add single node, child node or parent node on selected node with text data in it.


Solution for above statement
I have made using JavaScript and the provided JavaScript code defines a basic tree data structure and includes functions to add nodes, child nodes, and parent nodes to the tree. 
The tree object serves as the root, featuring a text property for the node's content and a children property as an array for its offspring. The addNode function inserts a new node with user-input text as a child of the root, while addChildNode adds a child node to the currently selected node.
The addParentNode function creates a new parent node with user-input text and designates the selected node as its child, replacing the selected node in the root's children array. The rendered tree is updated accordingly. 
This code facilitates the dynamic construction of a hierarchical structure through user interactions.
