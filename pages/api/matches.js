import HLTV from 'hltv';

export default async function handler(req, res) {
  const matches = await HLTV.getMatches();
  const filteredMatches = [...matches].filter((match) => {
    return match.team1.name === 'MIBR' || match.team2.name === 'MIBR';
  });

  res.status(200).json(filteredMatches);
}
