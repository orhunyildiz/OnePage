$(function () {
    $("#accordion").accordion();
    $("#tabs").tabs();
    $("#resizable").resizable();
    $("#dialog").dialog({
        autoOpen: false,
        modal: true,
        resizable: false,
        width: 400,
        buttons: {
            "Close": function () {
                $(this).dialog("close");
            }
        }
    });
    $("#dialogButton").click(function () {
        $("#dialog").dialog("open");
    });
    var tags = [
        "C", "C++", "C#", "Java", "JavaScript", "TypeScript", "Python", "PHP",
        "Ruby", "Swift", "Kotlin", "Objective-C", "Dart", "Rust", "Go", "Perl",
        "Haskell", "Scala", "Lua", "R", "MATLAB", "F#", "Elixir", "Clojure",
        "ColdFusion", "ASP", "VB.NET", "Pascal", "Fortran", "COBOL", "Groovy",
        "Erlang", "Shell Script", "PowerShell", "SQL", "PL/SQL", "GraphQL",

        // Web Frameworks & Libraries
        "React", "Angular", "Vue.js", "Svelte", "Next.js", "Nuxt.js", "Alpine.js",
        "Ember.js", "Backbone.js", "Express.js", "NestJS", "FastAPI", "Spring Boot",
        "Django", "Flask", "Ruby on Rails", "Laravel", "ASP.NET Core", "Symfony",
        "CodeIgniter", "CakePHP", "Phoenix Framework", "Meteor.js",

        // Mobile Development
        "Flutter", "React Native", "SwiftUI", "Jetpack Compose", "Ionic", "Xamarin",
        "Cordova", "Apache Flex",

        // Game Development
        "Unity", "Unreal Engine", "Godot", "Cocos2d", "Pygame", "Phaser.js",

        // DevOps & Cloud
        "Docker", "Kubernetes", "Terraform", "Ansible", "Puppet", "Chef", "AWS",
        "Azure", "Google Cloud Platform", "Firebase", "DigitalOcean",

        // Database
        "MySQL", "PostgreSQL", "MongoDB", "SQLite", "Redis", "Cassandra", "DynamoDB",

        // Machine Learning & AI
        "TensorFlow", "PyTorch", "Keras", "OpenCV", "scikit-learn", "Pandas", "NumPy",
        "Matplotlib", "SciPy",

        // Cybersecurity
        "Metasploit", "Wireshark", "Burp Suite", "Nmap", "Kali Linux",

        // Misc
        "Bash", "Zsh", "Markdown", "LaTeX", "Regex"
    ];
    $("#autocomplete").autocomplete({
        source: function (request, response) {
            var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
            response($.grep(tags, function (item) {
                return matcher.test(item);
            }));
        }
    })
});
