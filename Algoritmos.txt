   // Algoritmo para obter um ranger de datas
  function getDates(startDate: any, stopDate: any) {
    var dateArray = [];
    var currentDate = moment(startDate);
    while (currentDate <= moment(stopDate)) {
      dateArray.push(moment(currentDate).format('YYYY-MM-DD'));
      currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray;
  }
  console.log(getDates(event?.subscriptionStartAt, event?.subscriptionEndAt));