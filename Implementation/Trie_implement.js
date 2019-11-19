// Trie (Useful in handling string)
function TrieNode(character){
     this.character = character;
     this.parent = null;
     this.children = {}; //object like hash
     this.end = false;
}
TrieNode.prototype.getWord =function(){
    var result = [],
        node = this;
    while(node !== null){
        result.unshift(node.character);
        node = node.parent;
    }
    return result.join('');
}

function Trie(){
    this.root = new TrieNode(null);
}

Trie.prototype.insert=function(word){
    var node = this.root;
    for(let i =0; i<word.length; i++){
        if(!node.children[word[i]]){
            node.children[word[i]] = new TrieNode(word[i]);
            node.children[word[i]].parent = node;
        }
        node = node.children[word[i]];
        if(i == word.length-1) this.end = true;
    }
};

Trie.prototype.find = function(prefix){
    var node = this.root;
    var result = [];
    for(let i =0; i<prefix.length; i++){
        if(node.children[prefix[i]]){
            node = node.children[prefix[i]];
        }else return result;
    }

    findWord(result,node);
    return result;
}

function findWord(result, node){
    if(node.end) result.push(node.getWord());
    for(let i in node.children){
        findWord(result, node.children[i])
    }
}