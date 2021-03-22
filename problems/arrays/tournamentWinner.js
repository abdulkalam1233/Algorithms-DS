function tournamentWinner(competitions, results) {
  // Write your code here.
	let teamWins = {'': 0};
	let idx = 0;
	let finalWinner = '';
	for(let result of results){
		const current = competitions[idx][result ? 0 : 1];
		if(teamWins[current]){
			teamWins[current] += 1;
		} else{
			teamWins[current] = 1;
		}
		if(teamWins[current] >= teamWins[finalWinner]){
				finalWinner = current;
			}
		idx+=1;
	}
  return finalWinner;
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;
