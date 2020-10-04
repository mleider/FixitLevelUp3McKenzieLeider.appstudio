function homeLoanPayment(homeLoanPrinciple2, homeLoanYears2, homeLoanInterest2) {
  let homePaymentFormula = (homeLoanPrinciple2 / homeLoanYears2 * 12) * ((homeLoanInterest2 / 100) + 1);
  return homePaymentFormula;
}

function carLoanPayment(carLoanPrinciple2, carLoanMonths2, carLoanInterest2) {
  let carPaymentFormula = (carLoanPrinciple2 / carLoanMonths2) * ((carLoanInterest2 / 100) + 1)
  return carPaymentFormula
}

btnCarLoan.onclick = function() {

  let carLoanPrinciple = ""
  let carLoanInterest = ""
  let carLoanMonths = ""

  carLoanPrinciple = Number(inptPrinciple.value)
  carLoanInterest = (Number(inptMonthly.value)) / 100
  console.log(carLoanInterest)
  carLoanMonths = Number(inptNumberOfMonths.value)

  let carTotal = carLoanPayment(carLoanPrinciple, carLoanMonths, carLoanInterest)
  lblmessage.value = `A car loan for $${carLoanPrinciple} over ${carLoanMonths} months at ${carLoanInterest} interest would have a monthly payment of $${carTotal}`
}


//house loan


btnHomeLoan.onclick = function() {

  let homeLoanPrinciple = ""
  let homeLoanYears = ""
  let homeLoanInterest = ""

  homeLoanPrinciple = Number(inptPrinciple.value)
  homeLoanInterest = Number(inptMonthly.value)
  homeLoanYears = Number(inptNumberYears.value)


  let homeTotal = homeLoanPayment(homeLoanPrinciple, homeLoanYears, homeLoanInterest);
  lblmessage.value = `A home loan for $${homeLoanPrinciple} over ${homeLoanYears} years at ${homeLoanInterest}% percent interest would have a monthly payment of $${homeTotal}`
}