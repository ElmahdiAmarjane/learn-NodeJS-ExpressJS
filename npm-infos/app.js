// npm install lodash or npm i lodash
// npm init --yes => for create package.json
// npm view mongoose version => lister all mongoose version disponible
// npm install lodash@4.5.9 => install specified version of lodash 
// npm outdated => know if exist version recent to install it
// npm i jshint --save-dev  or npm i jshint -D
// devDependencies => the packeges necessry in development 
// npm unistall lodash or nom un lodash => unistall lodash 
// npm un jshint --save-dev  or npm un jshint -D => uinstall jshint installer in devDepend..
const lodash = require('lodash');
 const result = lodash.take([1,2,3,4,5] , 2);
 console.log(result);


 // signification de version exemple : ^4.17.19 => ^major.minor.patch
 // major : modification haut niveau : modifier technologie , modifier nom d'une class ....
 // minor : modification moyen niveau : ajouter une nouvelle fonctionalité , methode ou class
 //patch : modification bas niveau : corriger un beug  
 // carnet ^ : signifie : 4.* sa veut dire si il existe une version minor ou patch plus recent --> l'installer
 // tilde ~ : signifie : 4.17.* ,, une version patch plus recente --> l'installer