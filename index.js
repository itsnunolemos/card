const chalk = require("chalk");
const boxen = require("boxen");

console.log(
  boxen(
    chalk.white("it's") + "\n" + 
    chalk.bold("NUNOLEMOS") + chalk.hex('#1aeab4')(".") +
    "\n" + "\n" + "\n" + 
    chalk.hex('#80d152')("       Work: ") + chalk.hex('#c0c0c0')("  Full Stack Developer at NQ Digital Agency") + "\n" +
    chalk.hex('#80d152')("    Website: ") + chalk.hex('#c0c0c0')("  https://www.itsnunolemos.com") + "\n" + "\n" +
    chalk.hex('#80d152')("   Linkedin: ") + chalk.white("  https://linkedin.com/in/nunorlemos/") + "\n" +
    chalk.hex('#80d152')("    Twitter: ") + chalk.white("  https://twitter.com/itsnunolemos") + "\n" +
    chalk.hex('#80d152')("  Instagram: ") + chalk.white("  https://instagram.com/itsnunolemos") + "\n" +
    chalk.hex('#80d152')("     Github: ") + chalk.white("  https://github.com/itsnunolemos") + "\n" +
    chalk.hex('#80d152')("     Medium: ") + chalk.white("  https://medium.com/@itsnunolemos") +
    "\n" + "\n" + 
    chalk.hex('#1aeab4')("       Card: ") + chalk.white("  npx itsnunolemos") 
    
    ,{ padding: 1 }
  )
);
