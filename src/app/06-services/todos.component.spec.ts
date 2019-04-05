import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';


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

  it('should call the server to save the changes when a new todo item is added', () => {

    const spy = spyOn(service, 'add').and.callFake(t => {
      return Observable.empty();
    });

    component.add();

    expect(spy).toHaveBeenCalled();
  });

  it('should add the new todo retruned from the server', () => {
    const todo = { id: 1 };
    // Se puede reemplazar el call fake por return value
    const spy = spyOn(service, 'add').and.returnValue(Observable.from([ todo ]));

    component.add();

    expect(spy).toHaveBeenCalled();
  });

  it('should set the message property if server returns an error when adding a new todo ', () => {
    const error = 'error from the server';
    // Se puede reemplazar el call fake por return value
    const spy = spyOn(service, 'add').and.returnValue(Observable.throw(error));

    component.add();

    expect(component.message).toBe(error);
  });
});
