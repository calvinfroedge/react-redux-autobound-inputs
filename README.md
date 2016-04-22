# Overview

This project provides automatic data binding to redux store for some common inputs. The inputs include choices from `react-bootstrap` and `react-widgets`.

An example of data binding:

```
<Input type="text" action="text_update" dispatch={dispatch} value={sample.sample_text} />
```

All arguments not handled by the data binder are passed onto the input element. 

This lib aims for input which have a viewing and editing state, so clicking / tapping on the element enters edit state and focuses on the field, and leaving focus blurs the field. All the parent needs to do is pass down a redux action to dispatch, and a value to render.

The redux action dispatched will have the elements new value as its payload. It happens on blur for input elements, and on change for date elements.

Work in progress! More inputs and tests coming soon.

# Props

- readOnly: Pass readOnly to allow disable mode toggle

# Playing around

Clone, install, and run `npm run development` to use the input playground.
