     // Instantiation
            var theater = new TheaterJS();

            // Describe actors
            theater
                .describe("Mat", .8, "#mat")

            // Write the scenario
            theater
                .write("Mat:Hey.", 400, " I'm Matthieu.", 600)
                .write("Mat:Welcome to my website.", 400) 
                .write("Mat:Check out my projects.", 400)
                .write("Mat:I hope you like them.", 800)
                .write("Mat:Thanks for stopping by.", 600)
                .write("Mat:Enjoy!")

            // Listen to theater's events
            theater
                .on("say:start, erase:start", function () {
                    // add blinking caret
                })
                .on("say:end, erase:end", function () {
                    // remove blinking caret
                })
                .on("*", function () {
                    // do something
                }); 
