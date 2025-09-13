"use strict";
// Задача 1. Описати масив об’єктів – сайтів розроблених компанією з такими властивостями
// ----- Властивості ------
// назва компанії на час розробки (назву періодично змінюють)
// власник компанії
// споснсори (масив спонсорів)
//              * прізвище спонсора
//       * ім’я  спонсора
//       * сума вкладень спонсора
// рік випуску
// вартість сайту
// Знайти:
// 1) загальну вартість усіх сайтів
// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
// 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
// 5) знайти рік, коли прибуток був найбільшим
// 6) упорядкувати список за спаданням прибутку
// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
if (confirm('Почати тестування?')) {
    let siteList = [
        {
            companyName: "Onix",
            companyOwner: "Petro",
            sponsors: [
                {
                    lastName: "Ivanov",
                    firstName: "Ivan",
                    investmentAmount: 30000
                },
                {
                    lastName: "Tokar",
                    firstName: "Olena",
                    investmentAmount: 80000
                }
            ],
            yearOfRelease: 2024,
            siteCost: 4500000
        },
        {
            companyName: "Onix",
            companyOwner: "Petro",
            sponsors: [
                {
                    lastName: "Ivanova",
                    firstName: "Inna",
                    investmentAmount: 2000
                },
                {
                    lastName: "Fedorova",
                    firstName: "Olena",
                    investmentAmount: 500
                }
            ],
            yearOfRelease: 2007,
            siteCost: 9000
        }, {
            companyName: "Banda",
            companyOwner: "Olena",
            sponsors: [
                {
                    lastName: "Ilina",
                    firstName: "Katya",
                    investmentAmount: 20000
                },
                {
                    lastName: "Ivanova",
                    firstName: "Ivanna",
                    investmentAmount: 20000
                }
            ],
            yearOfRelease: 2004,
            siteCost: 80000
        }, {
            companyName: "Fenix",
            companyOwner: "Poll",
            sponsors: [
                {
                    lastName: "Ivanov",
                    firstName: "Ivan",
                    investmentAmount: 40000
                },
                {
                    lastName: "Ivanov",
                    firstName: "Ivan",
                    investmentAmount: 100000
                }
            ],
            yearOfRelease: 2005,
            siteCost: 300000
        }
    ];
    document.write(`<h1>Задача 1. Описати масив об’єктів – сайтів розроблених компанією з такими властивостями</h1>
----- Властивості ------ <br>
назва компанії на час розробки (назву періодично змінюють) <br>
власник компанії <br>
споснсори (масив спонсорів) <br>
             * прізвище спонсора <br>
      * ім’я  спонсора <br>
      * сума вкладень спонсора <br>
рік випуску <br>
вартість сайту<br>
Знайти:
1) загальну вартість усіх сайтів <br>
2) кількість сайтів, що було зроблено між 2000 та 2009 рр.<br>
3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000<br>
4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)<br>
5) знайти рік, коли прибуток був найбільшим<br>
6) упорядкувати список за спаданням прибутку<br>
7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000<br> <br>
`);
    // 1) загальну вартість усіх сайтів
    let totalSumm = siteList.reduce((prevSum, site) => prevSum + site.siteCost, 0);
    document.write(`1. загальна вартість усіх сайтів: ${totalSumm}<br>`);
    // 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
    let numberOfSites = siteList.reduce((prevCount, site) => site.yearOfRelease > 2000 && site.yearOfRelease < 2009 ? prevCount + 1 : prevCount, 0);
    document.write(`2. кількість сайтів, що було зроблено між 2000 та 2009 рр.: ${numberOfSites}<br>`);
    // 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
    let numberOfSitesAmountOfSponsorshipInvestmentsWasMoreThan100000 = 0;
    siteList.forEach(site => {
        const sum = site.sponsors.reduce((prevSum, sponsor) => sponsor.investmentAmount + prevSum, 0);
        if (sum > 100000)
            numberOfSitesAmountOfSponsorshipInvestmentsWasMoreThan100000 += 1;
    });
    document.write(`3. кількість сайтів, де сума спонсорських вкладень була більшою за 100000: ${numberOfSitesAmountOfSponsorshipInvestmentsWasMoreThan100000}<br>`);
    // 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
    let sponsorsList = [];
    siteList.forEach(site => {
        sponsorsList.push(...site.sponsors);
    });
    console.log("загальний список усіх спонсорів");
    console.log(sponsorsList);
    document.write(`4. відповідь у консолі<br>`);
    // 5) знайти рік, коли прибуток був найбільшим
    const siteListWithProfit = siteList.map(site => {
        const sumOfInvestmentAmount = site.sponsors.reduce((prevSum, sponsor) => prevSum + sponsor.investmentAmount, 0);
        const profit = site.siteCost - sumOfInvestmentAmount;
        return Object.assign(Object.assign({}, site), { profit });
    });
    const maxProfitSite = siteListWithProfit.reduce((prevMax, site) => site.profit > prevMax.profit ? site : prevMax);
    document.write(`5. знайти рік, коли прибуток був найбільшим: ${maxProfitSite.yearOfRelease}<br>`);
    // 6) упорядкувати список за спаданням прибутку
    siteListWithProfit.sort((a, b) => b.profit - a.profit);
    console.log("список упорядкований за спаданням прибутку");
    console.log(siteListWithProfit);
    document.write(`6. відповідь у консолі<br>`);
    // 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
    const sitesWithCostLess10000 = [];
    const sitesWithCostMore10000 = [];
    siteList.forEach(site => {
        if (site.siteCost < 10000)
            sitesWithCostLess10000.push(JSON.parse(JSON.stringify(site)));
        if (site.siteCost > 10000)
            sitesWithCostMore10000.push(JSON.parse(JSON.stringify(site)));
    });
    console.log("сайти з вартість до 10000");
    console.log(sitesWithCostLess10000);
    console.log("сайти з вартість  більше 10000");
    console.log(sitesWithCostMore10000);
    document.write(`7. відповідь у консолі<br>`);
}
