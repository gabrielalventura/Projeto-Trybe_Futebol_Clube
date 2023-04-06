const homeLeaderBoard = `SELECT t.team_name AS name,
  SUM(CASE WHEN m.home_team_goals > m.away_team_goals THEN 3
  WHEN m.home_team_goals = m.away_team_goals THEN 1 ELSE 0 END) AS totalPoints,
  COUNT(*) AS totalGames, SUM(IF(m.home_team_goals > m.away_team_goals, 1, 0)) AS totalVictories,
  SUM(IF(m.home_team_goals = m.away_team_goals, 1, 0)) AS totalDraws,
  SUM(IF(m.home_team_goals < m.away_team_goals, 1, 0)) AS totalLosses,
  SUM(home_team_goals) AS goalsFavor,
  SUM(away_team_goals) AS goalsOwn,
  (SUM(home_team_goals) - SUM(away_team_goals)) AS goalsBalance
  FROM teams AS t JOIN matches AS m ON m.home_team_id = t.id
  AND m.in_progress IS FALSE GROUP BY name
`;

export default homeLeaderBoard;
