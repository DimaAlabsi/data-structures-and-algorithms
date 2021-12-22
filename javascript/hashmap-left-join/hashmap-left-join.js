
    const leftJoin=  (leftTable, rightTable)=>  {
        let resultRow = [];
        let key;
        let valueOne;
        let valueTwo = null;
        for (let i = 0; i < leftTable.map.length; i++) {
          if (leftTable.map[i]) {
            key = Object.keys(leftTable.map[i].head.value)[0];
            valueOne = Object.values(leftTable.map[i].head.value)[0];
            if (rightTable.contains(key)) {
              valueTwo = Object.values(rightTable.map[i].head.value)[0];
            } else {
              valueTwo = null;
            }
            resultRow.push([key, valueOne, valueTwo]);
          }
        }
        return resultRow;
      };

      module.exports= leftJoin;

  
  
