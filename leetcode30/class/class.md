## Method Chaining ##
-method chaining is a technique that involves calling multiple methods in a single statement.
-This is possible when each method returns an object, allowing the calls to be chained together.
-The fundamental principle behind method chaining is that each method returns an object, and then another method is called on that object.

```
class Car {
    setMake(make) {
        this.make = make;
        return this;
    }

    setModel(model) {
        this.model = model;
        return this;
    }

    setColor(color) {
        this.color = color;
        return this;
    }
}

const car = new Car().setMake('Toyota').setModel('Corolla').setColor('Blue');
```