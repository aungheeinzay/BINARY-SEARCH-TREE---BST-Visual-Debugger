class Node{
    constructor(data,left=null,right=null){
        this.data=data
        this.left=left
        this.right=right
    }
    show(){
        return this.data
    }
}

class BST{
    constructor(){
        this.root=null
    }
    insert(data){
        const newNode = new Node(data)
        if(this.root==null){
            this.root=newNode
            return
        }
        let current = this.root
        while(true){
            if(data<current.data){
                if(current.left==null){
                    current.left=newNode
                    return
                }
                current=current.left
            }else{
                if(current.right==null){
                    current.right=newNode
                    return
                }
                current=current.right
            }
        }
    }
    getSmallest(){
        let current = this.root
        while(current.left!==null){
            current=current.left
        }
        return current
    }
    getGratest(){
        let current=this.root
        while(current.right!==null){
            current=current.right
        }
        return current
    }
    find(data){
        let current = this.root
        while(current && current.data!==data){
            if(data<current.data){
                current=current.left
            }else{
                current=current.right
            }
        }
        return current
    }

    inOrder(node=this.root){
        if(node==null)return
        this.inOrder(node.left)
        console.log(node.data);
        this.inOrder(node.right)
    }
    preOrder(node=this.root){
        if(node==null)return
        console.log(node.data)
        this.preOrder(node.left)
        this.preOrder(node.right)
    }
    postOrder(node=this.root){
        if(node==null)return
        this.postOrder(node.left)
        this.postOrder(node.right)
        console.log(node.data);
    }
    remove(data){
        this.root=this.#removeNode(this.root,data)

    }
    #removeNode(node,data){
        if(node==null)return null
       if(data==node.data){
        if(node.left==null && node.right==null){
            return null
        }
        if(node.left==null){
            return node.right
        }
        if(node.right==null){
            return node.left
        }
        let leafNode =this.getSmallest(node.right)
        node.data=leafNode.data
        node.right=this.#removeNode(node.right,leafNode.data)
        return node
       }
       else if(data<node.data){
        node.left=this.#removeNode(node.left,data)
        return node
       }else{
        node.right =this.#removeNode(node.right,data)
        return node
       }
    }
    getSmallest(node){
       let current =node
       while(current!==null){
        current=current.left
       }
       return current
    }
}

const bst = new BST()
bst.insert(20)
bst.insert(10)
bst.insert(5)
bst.insert(30)
bst.insert(1)

console.log(bst.root);

bst.inOrder()
bst.remove(10)
bst.inOrder()