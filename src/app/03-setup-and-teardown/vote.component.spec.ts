import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  // Se define la variable
  let component: VoteComponent;

  // Método que se lanza antes de cada prueba
  beforeEach(() => {
    // Se inicializa el componente
    component = new VoteComponent();
  });

  // Método que se lanza despues de cada prueba (Sirve para hacer limpieza)
  afterEach(() => {});

  // Método que se lanza antes de todas las pruebas
  beforeAll(() => {});

  // Método que se lanza despues de todas las pruebas
  afterAll(() => {});

  it('should increment totalVotes when upvoted', () => {
    // Llama la función de component (Act: Acto invoce método o función)
    component.upVote();

    // Función que evalua el resultado que se espera (Assert: Afirmar)
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvoted', () => {
    // Llama la función de component (Act: Acto invoce método o función)
    component.downVote();

    // Función que evalua el resultado que se espera (Assert: Afirmar)
    expect(component.totalVotes).toBe(-1);
  });
});
