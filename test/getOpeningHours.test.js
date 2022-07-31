const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Se não passar nenhum parametro retorna um objeto com todos os dias', () => {
    expect(getOpeningHours()).toEqual(
      {
        Tuesday: { open: 8, close: 6 },
        Wednesday: { open: 8, close: 6 },
        Thursday: { open: 10, close: 8 },
        Friday: { open: 10, close: 8 },
        Saturday: { open: 8, close: 10 },
        Sunday: { open: 8, close: 8 },
        Monday: { open: 0, close: 0 },
      },
    );
  });
  it('Para os parametros "Monday" e "09:00-AM" deve retornar a string The zoo is closed', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Verifica se é case Sensitve, sunday === Sunday', () => {
    const sunday = getOpeningHours('Sunday', '09:00-AM');
    expect(getOpeningHours('sunday', '09:00-AM')).toBe(sunday);
  });
  it('Para os argumentos Wednesday e 09:00-PM deve retornar a string The zoo is closed ', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Para os argumentos Sunday e 15:00-PM deve retornar um erro', () => {
    expect(() => { getOpeningHours('Sunday', '15:00-PM'); }).toThrowError(new Error('The hour must be between 0 and 12'));
  });
  it('Para os argumentos Sunday e 12:65-AM deve retornar um erro', () => {
    expect(() => { getOpeningHours('Sunday', '12:65-AM'); }).toThrowError(new Error('The minutes must be between 0 and 59'));
  });
  it('Para os argumentos Sunday e 12:T5-AM deve retornar um erro', () => {
    expect(() => { getOpeningHours('Sunday', '12:T5-AM'); }).toThrowError(new Error('The minutes should represent a number'));
  });
  it('Para os argumentos Sunday e Z2:05-AM deve retornar um erro', () => {
    expect(() => { getOpeningHours('Sunday', 'Z2:05-AM'); }).toThrowError(new Error('The hour should represent a number'));
  });
  it('Para os argumentos Sunday e 12:05-KM deve retornar um erro', () => {
    expect(() => { getOpeningHours('Sunday', '12:05-KM'); }).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('Para os argumentos Su e 12:05-AM deve retornar um erro', () => {
    expect(() => { getOpeningHours('Su', '12:05-AM'); }).toThrowError(new Error('The day must be valid. Example: Monday'));
  });
  it('Para os argumentos Tuesday e 09:00-AM deve retornar a string The zoo is closed ', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
});
