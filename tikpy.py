from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.firefox import GeckoDriverManager

import random
import time

# ----------------------------
# Setup Firefox Driver
# ----------------------------

proxy = "109.236.88.82:80"

options = webdriver.FirefoxOptions()

# Optional
# options.add_argument("--start-maximized")

# Proxy setup
options.set_preference("general.useragent.override", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML) Chrome/83.0.4103.97 Safari/537.36")
options.set_preference("media.volume_scale", "0.0")
options.set_preference("dom.webdriver.enabled", False)
options.set_preference('useAutomationExtension', False)

options.set_preference("network.proxy.type", 1)
options.set_preference("network.proxy.http", "113.160.132.26")
options.set_preference("network.proxy.http_port", 8080)
options.set_preference("network.proxy.ssl", "113.160.132.26")
options.set_preference("network.proxy.ssl_port", 8080)

service = Service(GeckoDriverManager().install())

driver = webdriver.Firefox(
    service=service,
    options=options,

)

wait = WebDriverWait(driver, 20)

driver.get("https://www.tiktok.com/signup/phone-or-email/email")


# ----------------------------
# Setup Date
# ----------------------------

def setup_date():

    # Month
    month = wait.until(
        EC.presence_of_element_located(
            (By.CSS_SELECTOR,
             '[aria-label="Month. Double-tap for more options"]')
        )
    )

    month_children = month.find_elements(By.XPATH, "./*")
    month_children[0].click()

    time.sleep(1)

    month_select = month.find_elements(By.XPATH, "./*")[1]
    month_options = month_select.find_elements(By.XPATH, "./*")

    random.choice(month_options).click()

    # Day
    day = wait.until(
        EC.presence_of_element_located(
            (By.CSS_SELECTOR,
             '[aria-label="Day. Double-tap for more options"]')
        )
    )

    day_children = day.find_elements(By.XPATH, "./*")
    day_children[0].click()

    time.sleep(1)

    day_select = day.find_elements(By.XPATH, "./*")[1]
    day_options = day_select.find_elements(By.XPATH, "./*")

    random.choice(day_options).click()

    # Year
    year = wait.until(
        EC.presence_of_element_located(
            (By.CSS_SELECTOR,
             '[aria-label="Year. Double-tap for more options"]')
        )
    )

    year_children = year.find_elements(By.XPATH, "./*")
    year_children[0].click()

    time.sleep(1)

    year_select = wait.until(
        EC.presence_of_element_located(
            (By.ID, "Year-options-list-container")
        )
    )

    year_options = year_select.find_elements(By.XPATH, "./*")

    valid_years = []

    for option in year_options:
        text = option.text.strip()

        if text.isdigit():
            year_num = int(text)

            if 1990 <= year_num <= 2005:
                valid_years.append(option)

    if valid_years:
        random.choice(valid_years).click()


# ----------------------------
# Setup Account Info
# ----------------------------

def setup_info():

    # Email
    email = wait.until(
        EC.presence_of_element_located(
            (By.NAME, "email")
        )
    )

    email.clear()
    email.send_keys("purpleengracia@wshu.net")

    # Password
    password = wait.until(
        EC.presence_of_element_located(
            (By.CSS_SELECTOR, 'input[type="password"]')
        )
    )

    password.clear()
    password.send_keys("helloworld123#")

    # Consent checkbox
    email_consent = wait.until(
        EC.presence_of_element_located(
            (By.ID, "email-consent")
        )
    )

    driver.execute_script(
        "arguments[0].click();",
        email_consent
    )

    time.sleep(2)

    try:
        send_code_button = wait.until(
            EC.presence_of_element_located(
                (
                    By.XPATH,
                    '//*[@id="loginContainer"]/div[1]/div[1]/form/div[7]/div/div/button'
                )
            )
        )

        driver.execute_script(
            "arguments[0].scrollIntoView(true);",
            send_code_button
        )

        time.sleep(1)

        driver.execute_script(
            "arguments[0].click();",
            send_code_button
        )

        print("Send code clicked")

    except Exception as e:
        print("Failed to click send code button")
        print(e)


# ----------------------------
# Run
# ----------------------------

setup_date()
setup_info()

print("Finished setup")

input("Press ENTER to close browser...")

driver.quit()
