function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms * 1000));
}

function getElementByXPath(xpath, context = document) {
  const result = document.evaluate(
    xpath,
    context,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null,
  );

  return result.singleNodeValue;
}
async function again() {
  const posts =
    "/html/body/div[1]/div/div[1]/div/div[3]/div/div/div[1]/div[1]/div[2]/div/div/div/div/div[4]/div[2]/div/div[2]/div[4]";

  const eposts = getElementByXPath(posts);
  console.log(eposts);
  const count = eposts.children.length - 1;
  eposts
    .querySelector(
      '[aria-label="Send this to friends or post it on your profile."]',
    )
    .click();

  await sleep(2);
  const share_to_group = document.querySelector(
    '[aria-label="Share to a group"]',
  );
  share_to_group.click();
}
function getGroupList() {
  const group_list =
    "/html/body/div[1]/div/div[1]/div/div[4]/div/div/div[1]/div/div[2]/div/div/div/div/div[2]/div/div[2]/div[2]/div/div/div/div[2]/div/div[1]/div/div/div[2]/div";
  const egroup_list =
    getElementByXPath(group_list).querySelectorAll('[role="listitem"]');
  const list_count = egroup_list.length;
  return { e: egroup_list, c: list_count };
}
async function getPosts() {
  again();
  await sleep(5);
  let eg = getGroupList();
  for (let index = 0; index < eg.c; index++) {
    await sleep(5);
    if (index !== 0) {
      again();
      await sleep(3);
      eg = getGroupList();
    }
    await sleep(3);
    console.log(eg.e[index].children[0]);
    await sleep(3);
    eg.e[index].children[0].click();
    await sleep(5);
    let s = document.querySelector('[aria-label="Post"]');
    console.log("ssss=>", s);
    s.click();
    await sleep(5);
  }

  console.log("end the script");
}

getPosts();
