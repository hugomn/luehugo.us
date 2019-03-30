var ghpages = require('gh-pages');

console.log('Starting github pages deploy...');
 
ghpages.publish('public', {
  branch: 'master',
  repo: 'git@github.com:hugomn/hugomn.github.io.git',
  user: {
    name: 'Hugo Nogueira',
    email: 'hugomn@gmail.com'
  }
}, function(err) { console.error('Error: ' + err); });

console.log('Deploy finished.');
