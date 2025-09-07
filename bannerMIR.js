// bannerMIR.js
import cfonts from 'cfonts';
import chalkAnimation from 'chalk-animation';
import gradient from 'gradient-string';
import chalk from 'chalk';
import dotenv from 'dotenv';
dotenv.config();

export async function bannerMIR() {
  console.clear();

  // Big MIR using cfonts
  cfonts.say(process.env.BANNER_TEXT || 'MIR', {
    font: 'block',
    align: 'center',
    gradient: [process.env.PRIMARY_COLOR || 'cyan', process.env.ACCENT_COLOR || 'magenta'],
    transitionGradient: true,
    space: true
  });

  // Animated rainbow subtitle
  const subtitle = `✨ Welcome to Poseidon AutoBot ✨`;
  const anim = chalkAnimation.rainbow(`\n${subtitle}\n`);
  await new Promise(resolve => setTimeout(resolve, 3500));
  anim.stop();

  // Divider
  console.log(gradient.pastel('='.repeat(64)));

  // Social links (read from env)
  const tw = process.env.TWITTER || 'https://x.com/0XMIRX';
  const tg = process.env.TELEGRAM || 'https://t.me/mirty0';
  const gh = process.env.GITHUB || 'https://github.com/dimmy-bit';

  console.log(`
🌐 Twitter : ${chalk.cyan(tw)}
💬 Telegram: ${chalk.green(tg)}
📂 GitHub  : ${chalk.magenta(gh)}
  `);

  console.log(gradient.pastel('='.repeat(64)));
  await new Promise(resolve => setTimeout(resolve, 700));
}
