let blogPosts = [
  "2017-08-31-hello-world",
  "2017-09-04-hajj-memories",
  "2017-09-07-ta-day-0",
  "2017-10-18-why-learn-assembly",
  "2019-07-17-coop-red-hat-and-ibm",
  "2019-07-17-howd-you-like-the-6ix",
  "2019-07-27-company-of-the-truthful",
  "2020-01-01-new-website",
];
let fileSuffix = ".md"

function loadFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result;
}

let postDir = 'blog-posts/';
let siteUrl = window.location.pathname;
let postDirUrl = siteUrl.substr(0, siteUrl.lastIndexOf('/') + 1) + postDir;
let blogSection = document.getElementById('blog')
let converter = new showdown.Converter()

// display posts in reverse chronological order
blogPosts.sort();
blogPosts.reverse();

blogPosts.forEach((post) => {
  let postMd = loadFile(postDirUrl + post + fileSuffix);
  let postMdLines = postMd.split('\n');
  
  let postTitle = postMdLines[1].split(':').slice(1).join(":").substring(2, postMdLines[1].split(':').slice(1).join(":").length-1);
  console.log(postTitle);
  let postDate = postMdLines[2].split(':')[1].substring(2, 12);
  let postContent = postMdLines.slice(5).join('\n');
  let postHtml = converter.makeHtml(postContent);
  
  let divider = document.createElement('hr');
  let postDiv = document.createElement('div');
  postDiv.id = post;
  postDiv.classList.add('post')
  let postTitleElem = document.createElement('h2');
  postTitleElem.classList.add('post-title');
  postTitleElem.appendChild(document.createTextNode(postTitle));
  let postDateElem = document.createElement('h4');
  postDateElem.classList.add('post-date');
  postDateElem.appendChild(document.createTextNode(postDate));

  postDiv.appendChild(postTitleElem);
  postDiv.appendChild(postDateElem);
  postDiv.innerHTML += postHtml;

  blogSection.appendChild(divider);
  blogSection.appendChild(postDiv);
});
