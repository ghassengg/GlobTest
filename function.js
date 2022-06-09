module.exports = {
    foo: function (p) {
      try {
        const params = JSON.parse("[" + p + "]");
        params.sort(function (a, b) {
          return a[1] - b[1];
        });
        function intersection(firstTab, secondTab) {
          return true ? firstTab[1] < secondTab[0] : false;
        }
        function fusion(firstIndex, secondIndex) {
          if (secondIndex - firstIndex == 1) {
            return params[firstIndex];
          } else {
            let result = params.filter(
              (word) =>
                secondIndex > params.indexOf(word) &&
                params.indexOf(word) > firstIndex
            );
            result = result.reduce((a, b) => a.concat(b), []);
            const max = Math.max(...result);
            const min = Math.min(...result);
            return [min, max];
          }
        }
        let arrayIntersectionIndex = [];
        params.map((item, index) => {
          if (
            index < params.length - 1 &&
            intersection(params[index], params[index + 1])
          ) {
            arrayIntersectionIndex.push(index + 1);
          }
        });
        arrayIntersectionIndex.push(params.length);
        let itemInial = -1;
        const finalResult = [];
        arrayIntersectionIndex.map((item) => {
          finalResult.push(fusion(itemInial, item));
          itemInial = item;
        });
        return finalResult;
      } catch (error) {
        console.log(
          "Svp tapez sur votre command CLI ==> node app.js [1,2],[3,5]"
        );
      }
    },
  };
  