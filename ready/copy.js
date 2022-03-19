function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  //date类型
  if (obj instanceof Date) {
    const copydata = new Date();
    copydata.setTime(obj.getTime());
    return copydata;
  }
  //正则
  if (obj instanceof RegExp) {
    const Constructor = obj.Constructor; //constructor 属性返回对创建此对象的数组函数的引用
    return new Constructor(obj);
  }
  if (obj instanceof Array || obj instanceof Object) {
    //数组以及引用类型
    const copyObj = Array.isArray(obj) ? [] : {};
    for (var i in obj) {
      copyObj[i] = typeof obj[i] == "object" ? deepClone(obj[i]) : obj[i];
    }
    return copyObj;
  }
}
const data=[]