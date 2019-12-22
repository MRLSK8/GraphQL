const query = '{ UserAge, UserName, UserEmail }';

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/JSON'
  },
  body: JSON.stringify({
    query
  })
};

fetch('http://localhost:4000/graphql', options)
  .then(response => response.json())
  .then(data => console.log(data.data));
