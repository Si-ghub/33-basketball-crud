class Basketball {
    constructor(leagueName, maxPlayers) {
        this.leagueName = leagueName;
        this.maxPlayers = maxPlayers;
        this.team = [];
        this.playersList = [];
    }

    wannaBePlayer(playerName, playerPrice) {
        let playerObject = { playerName, playerPrice }
        this.playersList.push(playerObject);
        console.log(playerObject);
    }

    createTeam(teamName) {
        this.team.push({ teamName });
        console.log(`A ${teamName} just entered a game!`);
    }

    buyPlayer(teamId, playerId) {


    }


}

module.exports = Basketball;