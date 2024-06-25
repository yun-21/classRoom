const vendingMachin = {
  items : [
    {name:"콜라", price:1000},
    {name:"사이다", price:1000},
    {name:"커피", price:1500},
    {name:"물", price:500}
  ],
  total : 0,
  purchaseItem : function (itemName){
    //this.items == undefined
    console.log(this.items)
    const item = vendingMachin.items.find((item)=>{
      //find 메서드는 조건에 맞는 첫 번째 요소를 반환
      //매우 자주 사용하는 '조회' 메서드
      let result = item.name === itemName;
      return result;
    });
    if(item !== undefined){
      this.total += item.price;
      console.log(`${itemName}를 구매하셨습니다. 가격은 ${this.price}원 입니다.`)
    }else{
      console.log(`${itemName}는 현재 판매하지 않습니다.`);
    }
  },
  showTotal : function(){
    console.log(`총 구매 금액은 ${this.total}원 입니다.`);
  }
};

//새로운 객체 생성 (자판기와는 다르지만 아이템을 구매하려고 함)
const userOne = {
  name : "신지윤",
  total : 0
};

//콜라를 구매하려면 원래는 vendingMachin 객체에서 purchaseItem 메서드를 호출해야 함.
//vendingMachine.purchaseItem('콜라');

//call 메서드를 사용하여 userOne 객체가 vendingMachine의 purchaseItem 메서드를 사용하게 함.
vendingMachin.purchaseItem.call(userOne, "콜라");

//userOne의 total 금액 확인
console.log(`공욱재의 총 구매 금액은 ${userOne.total}원 입니다.`)