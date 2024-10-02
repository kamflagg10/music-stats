import { clientId, clientSecret } from '../../credentials';

async function generateSpotifyToken() {
  const params = new URLSearchParams();
  params.append('client_id', clientId);
  params.append('client_secret', clientSecret);
  const res = await fetch(
    `https://accounts.spotify.com/api/token?grant_type=client_credentials&${params}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );
  const jsonRes = await res.json();
  console.log(jsonRes);
  // currToken = jsonRes['access_token'];
}

app.get('/token', async (req, res) => {
  try {
    await generateSpotifyToken();
    res.send({ message: 'got the token successfully.' }).status(200);
  } catch (error) {
    res.send({ message: 'error getting the token!' }).status(404);
  }
});

app.get('/authorize', async (req, res) => {});

app.get('/callback', (req, res) => {
  res.send('Failed to authenticate').status(404);
});
