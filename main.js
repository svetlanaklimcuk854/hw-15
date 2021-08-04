
const codeString = 'Германия, Берлин, 83млн, 357.4тыс.кв.км; Беларусь, Минск, 9.4млн, 207.6тыс.кв.км; Польша, Варшава, 37.9млн, 312.6тыс.кв.км; Франция, Париж, 67.8млн, 643.8тыс.кв.км; Нидерланды, Амстердам, 17.4млн, 41.5тыс.кв.км; Испания, Мадрид, 44.3млн, 505.9тыс.кв.км; Бельгия, Брюссель, 11.4млн, 30.5тыс.кв.км;';

function Country(name, capital, population, area) {
  this.name = name;
  this.capital = capital;
  this.population = population;
  this.area = area;
};

const countries = codeString.split('; ').map(function (country) { return new Country(...country.split(', ')); });

const sum = (arr, value) => arr.reduce(function (accumulator, item) { return accumulator + parseFloat(item[value]); }, 0);

const kingdom = new Country('Лонг Лендс', countries[1].capital, sum(countries, 'population'), sum(countries, 'area'));

console.log(codeString);

function createCard(country) {
  document.querySelector('.kingdom').textContent = `Королевство: ${country.country}`;
  document.querySelector('.capital').textContent = `Столица: ${country.capital}`;
  document.querySelector('.population').textContent = `Население: ${country.population} млн`;
  document.querySelector('.area').textContent = `Площадь: ${country.area} тыс.кв.км`;
};

createCard(kingdom);
