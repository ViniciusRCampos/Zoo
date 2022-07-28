const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Retorna um array com todos os nomes dos elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });
  it('Retorna undefined se não passar nenhum parametro', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('Retorna "Parâmetro inválido, é necessário uma string" se passar um parametro que não seja string', () => {
    expect(handlerElephants(5)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Retorna null se passar uma string sem funcionalidade', () => {
    expect(handlerElephants('batata')).toBe(null);
  });
});
