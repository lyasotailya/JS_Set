import { Team } from '../set';
import { Character } from '../character';
import { test } from "@jest/globals";


test('should class Character', () => {
  let ilya = new Character('ilya')
  expect(ilya.name).toEqual('ilya')
})

test('should class Team', () => {
  let team = new Team()
  let test0
  expect(team).toBeDefined();

  team.add(test0)
  expect(team.members).toEqual(new Set([test0]))
  expect(() => team.add(test0)).toThrow(new Error('Ошибка. Объект уже добавлен!'))

  let test1
  let test2
  team.addAll(test1, test2);
  expect(team.members).toEqual(new Set([test0, test1, test2]))

  expect(team.toArray()).toEqual(Array.from(team.members))
});
