class Basketball {
    constructor(leagueName, maxPlayers) {
        this.leagueName = leagueName;
        this.maxPlayers = maxPlayers;

        this.allTeams = [];
        this.allPlayers = [];
        this.playingTeams = [0, 0];
        this.teamId = 0;
    }

    wannaBePlayer(playerName, playerPrice) {
        this.allPlayers.push({ playerName, playerPrice });
        console.log(playerName, playerPrice);
    }

    createTeam(name) {
        this.allTeams.push({ name, playersInTeam: [], });
        console.log(`A "${name}" just entered a game!`);
    }

    buyPlayer(teamId, playerId) {
        const team = this.allTeams[teamId - 1];
        const teamPlayers = team.playersInTeam;

        if (teamPlayers.includes(playerId)) {
            console.log(`"${team.name}" team can't add the same player twice!`);
            return;
        } else if (teamPlayers.length >= 3) {
            console.log(`"${team.name}" team can't add extra players to it's team.\nMaximum players per team is 3.`);
            return;
        } else {
            teamPlayers.push(playerId);
        }
        console.log(`"${team.name}" team just acquired new player ${this.allPlayers[playerId - 1].playerName} for ${this.allPlayers[playerId - 1].playerPrice} cash / year!`);
    }

    teamValue(teamId) {
        const team = this.allTeams[teamId - 1];

        let totalTeamValue = 0;
        for (const playerId of team.playersInTeam) {
            totalTeamValue += this.allPlayers[playerId - 1].playerPrice;
        }
        console.log(`"${team.name}" team is paying ${totalTeamValue} cash/year for it's players.`);
    }

    letsPlay(teamOneId, teamTwoId) {
        console.log(`New game everybody!\n"${this.allTeams[teamOneId - 1].name}" vs. "${this.allTeams[teamTwoId - 1].name}"`);
    }

    score(teamOneScore, teamTwoScore) {
        if (teamOneScore > teamTwoScore) {
            console.log(`"${this.allTeams[this.teamId].name}" wins!`);
        }
    }
}
module.exports = Basketball;