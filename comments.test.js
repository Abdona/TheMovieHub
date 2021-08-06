const { dspCommentsLength } = require('./src/utills.js');

const mockCommentsObj = [
  {
    comment: 'I did not like the ending of the movies, but overall its a good movie',
    creation_date: '2021-08-05',
    username: 'Abdulrahman',
  },
];

test('Should count comments', () => {
  expect(dspCommentsLength(mockCommentsObj)).toBe(mockCommentsObj.length);
});