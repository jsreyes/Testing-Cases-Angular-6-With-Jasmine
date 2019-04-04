import { greet } from './greet';

// Ejecuta grupo de funciones
describe('greet', () => {
  it('should include the name in the message', () => {
    expect(greet('Xavi')).toContain('Xavi');
  });
});
