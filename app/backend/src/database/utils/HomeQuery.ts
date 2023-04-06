const homeLeaderBoard = `SELECT t.team_name AS name,
SUM(CASE WHEN m.home_team_goals > m.away_team_goals THEN 1 ELSE 0 END) AS totalPoints,
COUNT(*) AS totalGames, 
SUM(CASE WHEN m.home_team_goals > m.away.team.goals THEN 3 
  WHEN m.home_team_goals < m.away.team.goals THEN 1 ELSE 0 END) AS totalPoints,
SUM(CASE WHEN m.home_team_goals > m.away_team_goals THEN 1 ELSE 0 END) AS totalVictories,
SUM(CASE WHEN m.home_team_goals = m.away_team_goals THEN 1 ELSE 0 END) AS totalDraws,
SUM(CASE WHEN m.home_team_goals < m.away_team_goals THEN 1 ELSE 0 END) AS totalLosses,
SUM(m.home_team_goals) AS goalsFavor,
SUM(m.away_team_goals) AS goalsOwn,
SUM(m.home_team_goals  - m.away_team_goals) AS goalsBalance,
FROM teams AS t JOIN matches AS m ON m.home_team_id = t.id AND m.in_progress IS FALSE GROUP BY name
`;

export default homeLeaderBoard;
