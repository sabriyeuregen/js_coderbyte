function FindIntersection(strArr) { 
    let array1=strArr[0].split(', ')
   let array2=strArr[1].split(', ')
  let newArr=[]
  
    // arrayda tekrar eden rakamlarÄ± yazdÄ±ran fonksiyon
     for(i=0;i<array1.length;i++){ 
         let str1=array1[i]
       for(j=0;j<array2.length;j++){
        let str2=array2[j]
         if( str1===str2){
        newArr.push(str1)
        break
         }
       }
     }
       if (newArr.length === 0) {
      return false;
    } else {
      return newArr.join(","); 
    }
       
       }
     
  console.log(FindIntersection(readline()));

  //map ve foreach ile çözüm

  function Find(strArr) {
    strArr=[str1,str2]
    const lists=strArr.map(str =>str.split(","))
    const firstList=lists[0]
    const secondList=lists[1]
    let matchMap={}
    let resultArr=[]

    firstList.forEach(num =>matchMap[num]=true) 
    secondList.forEach(num => {
      if (matchMap[num]) {
        resultArr.push(num)
      }
    })
    return strArr
      
  }
  console.log(Find(readline()));