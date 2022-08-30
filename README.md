# sportsBet-test

### To run
```npm install```

headless mode:
```npm run headless-cypress```

open the cypress ui:
```npm run open-cypress```


### Assumptions
- There are always going to be `next races` available. A business rule to check is what happens to this space in the middle of the night when there are no more races to be run for the day as an example.

### Issues
- Since the `next race` is always on a count down, this creates a race condition from when the user can bet on it in the racing page. To make this more robust, I would select the first race with gr ~30 seconds before starting. (assuming your e2e test won't take longer than ~30 seconds).

### Improvements
- Application had consistent data-automation-id's which significantly improves the test quality. One small issue I noticed is that the application reused these data-automation-id's across the page. These should be unique for every page similar to how we treat general element id's as properties in a html page. 