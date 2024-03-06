const program = require('commander');
const crypto = require('crypto');

program
  .command('generate <num>')
  .description('generate a list of hexadecimal colors')
  .action((num) => {
    for(let i = 0; i < num; i++) {
      const color = crypto.randomBytes(3).toString('hex');
      console.log(`#${color}`);
    }
  });

program.parse(process.argv);
