window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  })
  return trNode;
}

function createTDNode(childNode,e,l) {
  let btnNode = document.createElement("button");
  let btnNodeText=createTxtNode(btnTxt);
  btnNode.appendChild(btnNodeText);
  btnNode.addEventListener(e,l);
  return btnNode;
}

function createTxtNode(childNode) {
  let childNode = document.createTextNode(txt);
  return txtNode;
}

function addTable() {
  const tableNode = document.createElement("table");
  for(let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)"));
    let col2= createTDNode(createTxtNode("Edit text","click",function(){
      edit(col1);
    })
    tableNode.appendChild(createTRNode([col1]));
  }
  document.getElementById("root").appendChild(tableNode);
}

function edit(node){
  let newNode=document.createElement("input");
  newNode.type='text';
  newNode.placeholder='Enter Cell (x,y) ...';
  node.replaceChild(newNode,node.childNodes[0]);
}