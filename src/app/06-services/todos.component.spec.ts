import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/from';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    // Se inicializa el servicio
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos property with the items returned from the server', () => {
    const todos = [1, 2, 3];
    // Podemos espiar un servicio o una función (Arrange)
    spyOn(service, 'getTodos').and.callFake(() => {
      return Observable.from( [todos] );
    });

    // (Act)
    component.ngOnInit();

    // expect(component.todos.length).toBeGreaterThan(0); Llamada general
    expect(component.todos.length).toBe(3); // Llamada especifica (Assert)
  });
});
