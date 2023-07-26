<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Membership - Resilient Equity Green Tech Foundation</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <!-- Include the navigation bar component -->
  <!-- Replace the following line with: <?php include 'navbar.html'; ?> if you are using a server-side language -->
  <?php include 'navbar.html'; ?>

  <div class="container">
    <header>
      <h1>Membership</h1>
    </header>

    <section>
      <h2>Platform Attributes</h2>
      <div class="platform-attributes">
        <div class="platform-attribute">
          <img src="images/connecting-individuals.png" alt="Connecting Individuals">
          <p>Connecting individuals and communities to digital and technological skills.</p>
        </div>
        <div class="platform-attribute">
          <img src="images/inclusive-environment.png" alt="Inclusive Environment">
          <p>Promoting a democracy-inclusive environment where every member of the community has access to the resources they need to participate fully in society.</p>
        </div>
        <div class="platform-attribute">
          <img src="images/nature-conservation.png" alt="Nature Conservation">
          <p>Protecting nature through conservation efforts and sustainable practices.</p>
        </div>
        <div class="platform-attribute">
          <img src="https://cdn.britannica.com/91/5391-050-78522514/Victoria-Falls-bridge-Zambezi-River-Zimbabwe-Zambia.jpg" alt="Supporting Needs">
          <p>Supporting the needs of the youth, women, men, and children in our community.</p>
        </div>
        <div class="platform-attribute">
          <img src="images/linking-zambians.png" alt="Linking Zambians">
          <p>Linking Zambians to the rest of the world and to Africa through a platform that facilitates productive connections and collaborations.</p>
        </div>
      </div>
    </section>

    <section>
      <h2>Strategies</h2>
      <p>
        To achieve our platform attributes and fulfill our mission, we have implemented the following strategies:
      </p>
      <ol>
        <li>Prioritizing diversity and inclusion to ensure a level playing field for all members of the community.</li>
        <li>Advocating for policies and programs that promote economic and social justice.</li>
        <li>Engaging and empowering communities to co-create culturally appropriate, effective, and sustainable solutions.</li>
        <li>Collecting data and utilizing evidence-based decision-making to measure the impact of our programs.</li>
      </ol>
    </section>

  </div>

  <script>
    // JavaScript Interactivity
    document.addEventListener('DOMContentLoaded', function() {
      // Fade-in effect for platform attributes
      const platformAttributes = document.querySelectorAll('.platform-attribute');

      platformAttributes.forEach(function(attribute) {
        attribute.style.opacity = 0;
      });

      const fadeInAttributes = function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            observer.unobserve(entry.target);
          }
        });
      };

      const platformAttributesObserver = new IntersectionObserver(fadeInAttributes, {
        root: null,
        threshold: 0.5,
      });

      platformAttributes.forEach(function(attribute) {
        platformAttributesObserver.observe(attribute);
      });
    });
  </script>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <script src="script.js"></script>
</body>

</html>
