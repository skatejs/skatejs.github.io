[![Build Status](https://travis-ci.org/treshugart/witness.png?branch=master)](https://travis-ci.org/treshugart/witness)

witness
====

Listen for changes in JavaScript objects.

Usage
-----

To observe changes, you must first get an observer for the object you want to observe:

    var observed = {};
    var observer = witness(observed);

### Additions

Adding a property:

    observer.on('add', console.log);
    observed.test = false;

Would log:

    {
      object: { test: false },
      type: 'add',
      name: 'test',
      oldValue: undefined,
      newValue: false
    }

### Updates

Updating a property:

    observer.on('update', console.log);
    observed.test = true;


Would log:

    {
      object: { test: true },
      type: 'add',
      name: 'test',
      oldValue: false,
      newValue: true
    }

### Deletions

Deleting a property:

    observer.on('delete', console.log);
    delete observed.test;

Would log:

    {
      object: {},
      type: 'delete',
      name: 'test',
      oldValue: true,
      newValue: undefined
    }

### Any Type of Change

You can also listen for any type of change to the object:

    observer.on('change', console.log);

### Removing Listeners

You may want to remove a listener for a particular event type:

    observer.off('change', console.log);

Or all listeners for a given type:

    observer.off('change');

### Destroying

If you don't want to observe the object anymore and want to destroy the observer's reference to it:

    observer.destroy();
