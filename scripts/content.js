/**
 * @param {String} HTML representing any number of sibling elements
 * @return {NodeList}
 */
function htmlToElements(html) {
  var template = document.createElement("template");
  template.innerHTML = html;
  return template.content.childNodes;
}

function createPagesLink() {
  const href = location.href;
  if (href.includes(".github.io")) {
    return `https://${href.split("/").at(-1)}`;
  }
  const user = href.split("/").at(-2);
  const page = href.split("/").at(-1);
  return `https://${user}.github.io/${page}`;
}

function main() {
  let hasTargetGithubPage = false;

  if (location.href.includes(".github.io")) {
    hasTargetGithubPage = true;
  }
  if (document.querySelector("body").innerText.includes("github-pages")) {
    hasTargetGithubPage = true;
  }
  if (!hasTargetGithubPage) {
    return;
  }
  const sideBar = document.querySelector(".Layout-sidebar");
  const link = createPagesLink();
  console.log(link);
  const newNode = htmlToElements(
    /*html*/
    `<h1><a href="${link}">🔗LINK TO GITHUB PAGES PAGE</a></h1>`
  );
  sideBar.prepend(newNode[0]);
}

main();
