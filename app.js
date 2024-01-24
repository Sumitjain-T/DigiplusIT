// Define the tree object
let tree = {
  text: "Root",
  children: []
};

// Function to add a node to the tree
function addNode() {
  let text = document.getElementById("nodeText").value;
  let node = {
    text: text,
    children: []
  };
  tree.children.push(node);
  renderTree(tree, "#tree");
}

// Function to add a child node to the selected node
function addChildNode() {
  let text = document.getElementById("nodeText").value;
  let selectedNode = getSelectedNode();
  if (selectedNode) {
    let node = {
      text: text,
      children: []
    };
    selectedNode.children.push(node);
    renderTree(tree, "#tree");
  } else {
    alert("Please select a node to add a child node.");
  }
}

// Function to add a parent node to the selected node
function addParentNode() {
  let text = document.getElementById("nodeText").value;
  let selectedNode = getSelectedNode();
  
  if (selectedNode) {
    let parentNode = {
      text: text,
      children: [selectedNode]   // The selected node becomes a child of the new parent
    };

    let parentIndex = tree.children.indexOf(selectedNode);
    if (parentIndex !== -1) {
      tree.children.splice(parentIndex, 1, parentNode);
      renderTree(tree, "#tree");
    } else {
      alert("Error: Selected node not found in the tree.");
    }
  } else {
    alert("Please select a node to add a parent node.");
  }
}