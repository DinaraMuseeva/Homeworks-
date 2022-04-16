/*

class HallOfFame {

	constructor(size = 5, players = []) {
		this.size = size;
		this.players = players;
	}

	sortArray(array) {
		array.sort(function (a, b) {
		
			if (a[1] < b[1] && a[0] !== b[0]     //  если имена НЕ равны, а счет второго больше
				|| a[1] === b[1] && a[0] > b[0]) {     // если счет равен, сортируем по алфавиту
				return 1;
			}
			else {
				return -1;
			}
			
		});
		
	}
	

	listPlayers(array) {
		let result = [];
		for (let i = 0; i < this.size; i++) {
			if (array[i] === undefined) {     // если на входе undefined
				result.push('');    // заполняем новый массив пустыми строками   
			}
			else {     // если же передается массив каких-то значений        
				let item = array[i].join(': ');    // преобразуем к виду 'name: score'
				result.push(item);      // и заполним новый массив
			}
		}
		return result;
	}

	//метод фильтрует игроков, добавленных в список и возвращает результат в новый массив
	filterPlayer() {
		const result = [];
		for (let i = 0; i < this.players.length; i++) {
			for (let j = i + 1; j < this.players.length; j++) {
				// если в список попадает два игрока с одинаковым именем, но разным счетом, 
				// оставляем того, чей счет больше, а второго удалим
				if (this.players[j][0] === this.players[i][0]) {
					if (this.players[i][1] < this.players[j][1]) {
						this.players.splice(i, 1);
					}
					else {
						this.players.splice(j, 1);
					}
					result.push(this.players);
				}
			}
		}
		return result;
	}

	get list() {
		this.sortArray(this.players); // выполним сортировку входящего массива согласно условия
		return this.listPlayers(this.players); // преобразуем входящий массив по условию и выведем список в новый массив
	}

	add(player) {
		this.players.push(player); //добавим нового игрока в список
		this.filterPlayer(this.players); // отфильтруем список игроков согласно условия
		return this;  // возвращаем объект (по условию)
	}
}
var top3 = new HallOfFame();
console.log(top3);
// var top3 = new HallOfFame(3, [["Kim: 88"], ["Zoe: 88"]])
// top3.add(["Bob", 90])
// top3.add(["Zoe", 99])
// top3.add(["Kim", 89])

*/


function fillData(element) {
	if (!element.getElementsByTagName('ul').length) {
		return 0;

	} else {
		

		let nDesc = element.getElementsByTagName('li').length;
		console.log(nDesc);
		
		


		let list = element.getElementsByTagName('ul')[0].children
		//console.log(list);
		
		for (let li of list) {

			if (li.getElementsByTagName('li').length) {
				fillData(li)
			}
		}
		return element.firstChild.data += `[${nDesc}]`
	}
}

const container = document.querySelector('div');

fillData(container);
//container.firstChild.data = null;
