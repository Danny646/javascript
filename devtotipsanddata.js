const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('hello');

    // Interpolated
    console.log('Hello I am a %s string!', '💩');

    // Styled
    // console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue')

    
    // Info
    console.info('Crocodiles eat 3-4 people per year');

    // Testing
    const p = document.querySelector('p');

    console.assert(p.classList.contains('ouch'), 'That is wrong!');

    // clearing
    console.clear();

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);

    console.clear();

//Grouping together 
cats.forEach(cat=> {
  console.groupCollapsed('${cat.name'});
    console.log('This is ${cat.name}');
    console.log('${cat.name} is $ {cat.age} years old');
    console.log('${cat.name}is${cat.age*6}cat years old')
    console.groupEnd(`${dog.name}`);
    });

    // counting

    console.count('Wes');
    console.count('Wes');
    console.count('Steve');
    console.count('Steve');
    console.count('Wes');
    console.count('Steve');
    console.count('Wes');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');

// timing
console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });

    console.table(dogs);




