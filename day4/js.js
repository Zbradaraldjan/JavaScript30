 // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1
    // Some data we can work with
    
    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
      ];

      // Array.prototype.filter()
      // 1. Filter the list of inventors for those who were born in the 1500's
      console.table(inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600 )));

      // Array.prototype.map()
      // 2. Give us an array of the inventors' first and last names
      const inventors_name = inventors.map(inventor => ({first: inventor.first, last: inventor.last}));
      console.log(inventors_name);
      
      // Array.prototype.sort()
      // 3. Sort the inventors by birthdate, oldest to youngest
      inventors.sort((a, b) => a.year - b.year);
      console.log(inventors);

      // Array.prototype.reduce()
      // 4. How many years did all the inventors live?
      //var res = inventors.reduce((a, b) => (a.passed - a.year) + (b.passed - b.year), 0);
      var res = inventors.reduce((a, b) => a + (b.passed - b.year), 0);
      console.log(res);

      // 5. Sort the inventors by years lived
      inventors.sort((a, b) => ((a.passed - a.year) - (b.passed-b.year)));
      console.log(inventors);

      // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
      // You should execute the following code in the console of the links page.
      /*const category = document.querySelector('.mw-category');
      const links = category.querySelectorAll('a');
      const with_de = links.map((a) = a.textContent).filter(a => a.includes("de")); 
      */
      const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
      // 7. sort Exercise
      // Sort the people alphabetically by last name
      const nez = people.sort((a, b) => {
        var nameA = a.split(', ')[1].toUpperCase(); // ignore upper and lowercase
        var nameB = b.split(', ')[1].toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });

      console.log(nez);
      // 8. Reduce Exercise
      // Sum up the instances of each of these
      const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

      const count = data.reduce((a, b) => {
        if(!a[b]) a[b] = 0;
        a[b]++;
        return a;
      }, {});
      console.log(count);