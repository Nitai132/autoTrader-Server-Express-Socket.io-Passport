const fetch = require("isomorphic-fetch");

// מייצר את הטבלה מקבל נתונים מהמונגו ושולח דרך שיטס בסט למסמך עצמו 
const createReport = async (positions, userEmail, amount) => {
  try {
    var buy = `"BUY"`;
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    const createSheet = async (exchange, array, userEmail, amount) => {
      for (let i = 1; i < array.length; i++) {
        let tp1 = array[i].takeProfit[0]?.marketPrice;
        let tp2 = array[i].takeProfit[1]?.marketPrice;
        let tp3 = array[i].takeProfit[2]?.marketPrice;
        let tp4 = array[i].takeProfit[3]?.marketPrice;
        let tp5 = array[i].takeProfit[4]?.marketPrice;
        let tpAmount1 = array[i].takeProfit[0]?.quantity;
        let tpAmount2 = array[i].takeProfit[1]?.quantity;
        let tpAmount3 = array[i].takeProfit[2]?.quantity;
        let tpAmount4 = array[i].takeProfit[3]?.quantity;
        let tpAmount5 = array[i].takeProfit[4]?.quantity;
        // URL from sheet best
        fetch(`https://sheet.best/api/sheets/cfda1ecc-d3f4-4642-a7b5-defff7a75dbd/${i}`, {
          method: "PATCH",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({

            SYMBOL: array[i].symbol,

            TYPE: array[i].positionType,

            DATE: array[i].startDate.substring(0, 10),

            "OPEN TIME": array[i].startDate.slice(11),

            "CLOSE TIME": array[i].endDate.slice(11),

            "END DATE": array[i].endDate.substring(0, 10),

            "TOTAL TRADING TIME": `=E${i + 2}-D${i + 2}`,

            "MARKET CLOSE POSITION PRICE": array[i].endPrice,

            "MARKET OPEN POSITION PRICE": array[i].startPrice,

            "BUY/SELL": array[i].operation.toUpperCase(),

            "QUANTITY OF SHARES": "100",

            "LOT SIZE": `=IF(J${i + 2}=${buy},H${i + 2}*K${i + 2},K${i + 2}*I${i + 2})`,

            "NEW DRAWDOWN%": `=IF(O${i + 2}<0, IFERROR(IF(MIN($O$1:O${i + 2})<>O${i + 2}," ",MIN($O$1:O${i + 2})),"")," ")`,

            "NEW PEAK%": `=IFERROR(IF(MAX($O$1:O${i + 2})<>O${i + 2}," ",MAX($O$1:O${i + 2})),"")`,

            "PROFIT/LOSS%": `=IFERROR((P${i + 2}*100%)/S${i + 2},0)`,

            "PROFIT/LOSS WITHOUT BROKER FEE": `=IF(J${i + 2}=${buy},K${i + 2}*(H${i + 2}-I${i + 2}),K${i + 2}*(I${i + 2}-H${i + 2}))`,

            "BROKER FEE": `=IF(K${i + 2}>250,K${i + 2}/100,2.5)`,

            "PROFIT/LOSS WITH BROKER FEE": `=IF(ISBLANK(P${i + 2}),0,P${i + 2}-Q${i + 2})`,

            EQUITY: `=IF(ISBLANK(A${i + 2}),0,S${i + 1}+R${i + 2})`,

            "STOP LOSS PRICE": array[i].stopLoss,

          "TAKE PROFIT 1": tp1,

          "TAKE PROFIT 2": tp2,

          "TAKE PROFIT 3": tp3,

          "TAKE PROFIT 4": tp4,

          "TAKE PROFIT 5": tp5,

          "QUANTITY TAKE PROFIT 1": tpAmount1,

          "QUANTITY TAKE PROFIT 2": tpAmount2,

          "QUANTITY TAKE PROFIT 3": tpAmount3,

          "QUANTITY TAKE PROFIT 4": tpAmount4,

          "QUANTITY TAKE PROFIT 5": tpAmount5,

            "R1 BUY/SELL": `=IF(J${i + 2}="SELL",T${i + 2}-I${i + 2},I${i + 2}-T${i + 2})`,

            "TAKE PROFIT 1 OPEN POSITION": `=IF(J${i + 2}="SELL",I${i + 2}-U${i + 2},U${i + 2}-I${i + 2})`,

            "TAKE PROFIT 2 OPEN POSITION 1": `=IF(J${i + 2}="SELL",U${i + 2}-V${i + 2},V${i + 2}-U${i + 2})`,

            "TAKE PROFIT 3 OPEN POSITION 2": `=IF(J${i + 2}="SELL",V${i + 2}-W${i + 2},W${i + 2}-V${i + 2})`,

            "TAKE PROFIT 4 OPEN POSITION 3": `=IF(J${i + 2}="SELL",W${i + 2}-X${i + 2},X${i + 2}-W${i + 2})`,

            "TAKE PROFIT 5 OPEN POSITION 4": `=IF(J${i + 2}="SELL",X${i + 2}-Y${i + 2},Y${i + 2}-X${i + 2})`,

          }),
        })
          .then((r) => r.json())
          .then(console.log)
          .catch(console.error);
      }

      await delay(20000);

      // URL from sheet best
      fetch("https://sheet.best/api/sheets/cfda1ecc-d3f4-4642-a7b5-defff7a75dbd/0", {
        method: "PATCH",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({

          SYMBOL: array[0].symbol,

          TYPE: array[0].positionType,

          DATE: array[0].startDate.substring(0, 10),

          "OPEN TIME": array[0].startDate.slice(10),

          "CLOSE TIME": array[0].endDate.slice(10),

          "END DATE": array[0].endDate.substring(0, 10),

          "TOTAL TRADING TIME": `=E2-D2`,

          "MARKET CLOSE POSITION PRICE": array[0].endPrice,

          "MARKET OPEN POSITION PRICE": array[0].startPrice,

          "BUY/SELL": array[0].operation.toUpperCase(),

          "QUANTITY OF SHARES": "100",

          "LOT SIZE": `=IF(J2=${buy},H2*K2,K2*I2)`,

          "NEW DRAWDOWN%": `=IFERROR(IF(S2>AF2," ",O2))`,

          "NEW PEAK%": `=IFERROR(IF(S2>AF2,O2," "))`,

          "PROFIT/LOSS%": `=IFERROR((P2*100%)/S2,0)`,

          "PROFIT/LOSS WITHOUT BROKER FEE": `=IF(J2=${buy},K2*(H2-I2),K2*(I2-H2))`,

          "BROKER FEE": `=IF(K2>250,K2/100,2.5)`,

          "PROFIT/LOSS WITH BROKER FEE": `=IF(ISBLANK(P2),0,P2-Q2)`,

          EQUITY: `=AF2+R2`,

          "STOP LOSS PRICE": array[0].stopLoss,

          "TAKE PROFIT 1": array[0].takeProfit[0]?.marketPrice,

          "TAKE PROFIT 2": array[0].takeProfit[1]?.marketPrice,

          "TAKE PROFIT 3": array[0].takeProfit[2]?.marketPrice,

          "TAKE PROFIT 4": array[0].takeProfit[3]?.marketPrice,

          "TAKE PROFIT 5": array[0].takeProfit[4]?.marketPrice,

          "QUANTITY TAKE PROFIT 1": array[0].takeProfit[0]?.quantity,

          "QUANTITY TAKE PROFIT 2": array[0].takeProfit[1]?.quantity,

          "QUANTITY TAKE PROFIT 3": array[0].takeProfit[2]?.quantity,

          "QUANTITY TAKE PROFIT 4": array[0].takeProfit[3]?.quantity,

          "QUANTITY TAKE PROFIT 5": array[0].takeProfit[4]?.quantity,

          "R1 BUY/SELL": `=IF(J2="SELL",T2-I2,I2-T2)`,

          "TAKE PROFIT 1 OPEN POSITION": `=IF(J2="SELL",I2-U2,U2-I2)`,

          "TAKE PROFIT 2 OPEN POSITION 1": `=IF(J2="SELL",U2-V2,V2-U2)`,

          "TAKE PROFIT 3 OPEN POSITION 2": `=IF(J2="SELL",V2-W2,W2-V2)`,

          "TAKE PROFIT 4 OPEN POSITION 3": `=IF(J2="SELL",W2-X2,X2-W2)`,

          "TAKE PROFIT 5 OPEN POSITION 4": `=IF(J2="SELL",X2-Y2,Y2-X2)`,

          "Starting Balance Amount": amount,

          "EMAIL": userEmail,
        }),
      })
        .then((r) => r.json())
        .then(console.log)
        .catch(console.error);
    }
    createSheet('Position', positions, userEmail, amount);
  } catch (err) {
    //במקרה של כשלון
    throw err;
  }
};

module.exports = { createReport };
