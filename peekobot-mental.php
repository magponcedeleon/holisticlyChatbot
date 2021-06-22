<?php /* Template Name: ChatbotM */ ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Holisticly | Mental Health</title>

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Page styles - make your own! -->
    <link rel="stylesheet" href="main.css">

    <!-- Google Font -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">

    <!-- Peekobot custom properties (CSS variable) - set these! -->
    <style>
        :root {
            --peekobot-height: 30vh;
            --peekobot-avatar: url("https://holisticly.io/wp-content/uploads/2021/06/avatar.png");
        }
    </style>
    <!-- Peekobot styles -->
    <link rel="stylesheet" href="https://holisticly.io/wp-content/themes/hello-elementor/peekobot.css">

    <!-- These provide in-browser transpilation of ES6 JS code to ES5 to support IE11 -->
    <script src="https://unpkg.com/@babel/polyfill@7.6.0/dist/polyfill.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <!-- Usercentrics -->
    <script id="usercentrics-cmp" data-settings-id="yWsTfqAU6" src="https://app.usercentrics.eu/browser-ui/latest/bundle.js" defer></script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-168998438-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-168998438-1');
    </script>
</head>

<body>

  <header>
      <div class="info">
          <img src="https://holisticly.io/wp-content/themes/hello-elementor/assets/holisticly.png" alt="logo" class="logo">
          <span class="title">Your happiest, <br>healthiest self</span>
      </div>
      <div class="featured">
        <img  src="https://holisticly.io/wp-content/uploads/2021/04/mental.png" alt="featured">
      </div>
  </header>

    <main id="main">
      <div class="content">
          <p>Effectively address anxiety, stress, and burnout with coach Holi. Discover what works for you. Get started for free.</p>
      </div>
      <div id="peekobot-container">
          <div id="peekobot-inner">
              <div id="peekobot"></div>
          </div>
      </div>
    </main>

    <script src="https://holisticly.io/wp-content/themes/hello-elementor/peekobot-conversation-mental.js"></script>
    <script src="https://holisticly.io/wp-content/themes/hello-elementor/peekobot.js"></script>

    <script>
        var vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        window.addEventListener('resize', () => {
            window.vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });
    </script>

</body>

</html>
