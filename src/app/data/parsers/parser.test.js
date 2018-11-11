import {parsePie} from './parser';
import Data from './../source/fire.json';
describe('yyy', () => {
  it('xxx', () => {
    expect.assertions(2);
    let d = parsePie(Data);
    expect(d).toHaveProperty('male')
    expect(d).toHaveProperty('female')
    // .toEqual(expect.objectContaining({
    //   name: 'test-user'
    // }));
  })
})


//** check if array contain an element */
let shoppingList = ['diapers', 'kleenex', 'trash bags', 'paper towels', 'beer'];

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
})

test('zero', () => {
  let z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test.only('the data is peanut butter', () => {
  expect.assertions(3)
  return testApi().then((data) => {
    // expect(data).toBe('peanut butter');
    expect(data).toHaveProperty('completed');
    expect(data.userId).toBe(1)
    expect(data.id).toBe(2)
    // expect(data.userId).toBe(1)
  });
})

export const testApi = () => {
  return fetch('https://jsonplaceholder.typicode.com/todos/2')
    .then(response => {
      console.log('response json ', response.json);
      return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
      });
    });
}
