class Sorter {

  constructor() {
    this.arr=[];
    this.comparator= function(a, b) {
    return a-b;
      }
  }

  add(element) {
    this.arr.push(element);}

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    var tmp=[];
    indices.sort();
    for (var i=0; i<indices.length; i++){
      tmp[i]=this.arr[indices[i]];}
      tmp.sort(this.comparator);
      for(var i=0; i<indices.length; i++){
        this.arr[indices[i]]=tmp[i];
      }
  }

  setComparator(compareFunction) {
    this.comparator=compareFunction;
  }


}

module.exports = Sorter;