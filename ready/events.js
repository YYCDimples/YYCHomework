//发布订阅模式
class Events {
  constructor() {
    this.list = [];
    this.length = 0;
  }
  // 发布
  $emit() {
    const eventname = arguments[0];
    const data = Array.prototype.slice.call(arguments, 1);
    if(this.list[eventname]) {
        this.list[eventname].forEach((callback) =>{
            callback(data)
        })
    }
  }
  // 订阅
  $on(eventname,callback) {
   if(!this.list[eventname]) {
       this.list[eventname] =[callback]
   }else{
       this.list[eventname]=[...this.list[eventname],callback]
   }
  }
  
}
const events = new Events();
//派发事件 发布者
events.$emit("memeda",123,456,789);
//调用事件
events.$on("memeda",function(data){
    console.log("张三订阅memeda",data);
});
events.$on("memeda",function(data){
    console.log("李思订阅memeda",data);
});

