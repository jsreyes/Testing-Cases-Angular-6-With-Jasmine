// se importa la función que se va a utilizar
import { compute } from './compute';

describe('compute', () => { // describe un conjunto de funciones
  it('should return 0 if input is negative', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });

  it('should increment the input if is positive', () => {
    const result = compute(1);
    expect(result).toBe(2);
  });
});
