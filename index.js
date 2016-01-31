/* jshint asi:true */
var css = require('css'),
    fs = require('fs'),
    specificity = require('css-specificity'),
    chalk = require('chalk')

var ast = css.parse(fs.readFileSync(process.argv.pop(), 'utf8'))
var rules = ast.stylesheet.rules
var quiet = process.argv.pop() === '--quiet'

var currentSpecificity = 0, violations = 0

for(var i=0; i<rules.length; i++) {
  var selectorInfo = specificity.calc(rules[i].selectors[0])[0]
  var specificityValue = selectorInfo.a * 100 + selectorInfo.b * 10 + selectorInfo.c

  if(currentSpecificity > specificityValue) {
    var prevSelector = rules[i-1] && rules[i-1].selectors[0],
        line = rules[i].position.start.line
    if(!quiet) console.error(chalk.red('- Line ' + line + ': Selector ' + rules[i].selectors[0] + ' has lower specificity than previous selector ' + prevSelector))
    violations++;
  } else {
    currentSpecificity = specificityValue
  }
}

if(!quiet) {
  if(violations > 0) {
    console.log('--------------------------------\n', 'Found ' + chalk.bold(violations) + ' violation' + (violations == 1 ? '' : 's'))
  } else {
    console.log(chalk.green(rules.length + ' rules scanned, no violations'))
  }
} else process.exit(violations)
