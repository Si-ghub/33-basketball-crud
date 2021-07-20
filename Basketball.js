class Basketball {
    constructor(leagueName, maxPlayers) {
        this.leagueName = leagueName;
        this.maxPlayers = maxPlayers;
        this.allTeams = [];
        this.allPlayers = [];
    }

    wannaBePlayer(playerName, playerPrice) {
        // playerObject = { playerName, playerPrice }
        this.allPlayers.push({ playerName, playerPrice });
        console.log(playerName, playerPrice);
    }

    createTeam(teamName) {
        this.allTeams.push({ teamName, playersInTeam: [], });
        console.log(`A "${teamName}" just entered a game!`);
    }

    buyPlayer(teamId, playerId) {
        const team = this.allTeams[teamId - 1];
        const teamPlayers = team.playersInTeam;
        //console.log(team, teamPlayers);
        if (teamPlayers.includes(playerId)) {
            console.log(`"${team.teamName}" team can't add the same player twice!`);
            return;
        } else if (teamPlayers.length >= 3) {
            console.log(`"${team.teamName}" team can't add extra players to it's team.\nMaximum players per team is 3.`);
            return;
        } else {
            teamPlayers.push(playerId);
        }
        console.log(`"${team.teamName}" team just acquired new player ${this.allPlayers[playerId - 1].playerName} for ${this.allPlayers[playerId - 1].playerPrice} cash / year!`);
    }

    teamValue(teamId) {
        let totalTeamValue = 0;
        const team = this.allTeams[teamId - 1];
        for (const playerId of team.playersInTeam) {
            totalTeamValue += this.allPlayers[playerId - 1].playerPrice;
        }
        console.log(`"${team.teamName}" team is paying ${totalTeamValue} cash/year for it's players.`);
    }

    letsPlay(teamId) {
        console.log(`New game everybody!\n"${this.allTeams[teamId - 1].teamName}" vs. "${this.allTeams[teamId].teamName}"`);
    }

    score(points) {

    }
}
module.exports = Basketball;