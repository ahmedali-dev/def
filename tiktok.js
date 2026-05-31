// https://www.tiktok.com/signup/phone-or-email/email
function setupDate() {
  const month = document.querySelector(
    '[aria-label="Month. Double-tap for more options"]',
  );
  month.children[0].click();
  const month_select = month.querySelector(":nth-child(2)");
  month_select.children[0].click();

  const day = document.querySelector(
    '[aria-label="Day. Double-tap for more options"]',
  );
  day.children[0].click();
  const day_select = day.querySelector(":nth-child(2)");
  day_select.children[0].click();
  const year = document.querySelector(
    '[aria-label="Year. Double-tap for more options"]',
  );
  year.children[0].click();
  const year_select = document.getElementById("Year-options-list-container");
  const year_length = year_select.children.length - 1;
  let randomSelectYear = Math.floor(Math.random() * year_length);
  while (true) {
    if (randomSelectYear > year_length) {
      randomSelectYear = Math.floor(Math.random() * year_length);
    } else {
      if (randomSelectYear < 2007) {
        break;
      }
    }
  }
  year_select.children[randomSelectYear].click();
}

function setupInfo() {
  const email = document.querySelector('input[name="email"]');
  email.value = "sam125@deltajohnsons.com";
  email.dispatchEvent(new Event("input", { bubbles: true }));
  const password = document.querySelector('input[type="password"]');
  password.value = "helloworld";

  const code = document.querySelector(
    'input[placeholder="Enter 6-digit code"]',
  );
  const button = code.parentElement.parentElement.querySelector("button");
  // button.disabled=false

  setTimeout(() => {
    button.click();
  }, 3000);
  const email_consent = document.getElementById("email-consent");
  email_consent.click();
  setTimeout(() => {
    // code.value = 'code'
  }, 5000);
}

setupDate();
setupInfo();
