const greetings = {
  hello: [{
    english: 'hi',
    french: 'bonjour',
    portuguese: 'oi'
  }],
  goodbye: [{
    english: 'bye',
    french: 'au revoir',
    portuguese: 'tchau'
  }]
};
console.log(greetings.hello[0].portuguese);
greetings['hello'][0]['portuguese'];
